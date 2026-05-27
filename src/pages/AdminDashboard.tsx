import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  clearAuthSession,
  getTokenExpiryDelay,
  getValidToken,
} from "../lib/auth";
import "./AdminDashboard.css";

interface Message {
  _id: string;
  name: string;
  phone: string;
  itemType: string;
  message: string;
  createdAt: string;
  image?: string;
}

const AdminDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const itemsPerPage = 5;

  const handleLogout = useCallback(
    (reason = "You have been logged out.") => {
      clearAuthSession();
      setMessages([]);
      setError(reason);
      navigate("/", { replace: true, state: { reason } });
    },
    [navigate],
  );

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError("");

    const token = getValidToken();
    if (!token) {
      handleLogout("Your session expired. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.status === 401) {
        handleLogout("Your session expired. Please log in again.");
        return;
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch messages");
      }

      setMessages(Array.isArray(data) ? data : []);
      setCurrentPage(1);
      setSearch("");
    } catch (fetchError) {
      console.error("Error fetching messages:", fetchError);
      setMessages([]);
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Unable to load messages",
      );
    } finally {
      setLoading(false);
    }
  }, [handleLogout]);

  const deleteMessage = async (id: string) => {
    if (!window.confirm("Delete this message?")) return;

    const token = getValidToken();
    if (!token) {
      handleLogout("Your session expired. Please log in again.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        handleLogout("Your session expired. Please log in again.");
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Delete failed");
      }

      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg._id !== id),
      );
    } catch (deleteError) {
      console.error("Delete failed:", deleteError);
      setError(
        deleteError instanceof Error ? deleteError.message : "Delete failed",
      );
    }
  };

  useEffect(() => {
    const token = getValidToken();

    if (!token) {
      handleLogout("Please log in to access the admin dashboard.");
      return;
    }

    fetchMessages();

    const expiryDelay = getTokenExpiryDelay(token);
    if (expiryDelay === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      handleLogout("Your session expired. Please log in again.");
    }, expiryDelay);

    return () => window.clearTimeout(timeoutId);
  }, [fetchMessages, handleLogout]);

  const filteredMessages = (Array.isArray(messages) ? messages : []).filter(
    (msg) => {
      const term = search.toLowerCase();
      return (
        msg.name.toLowerCase().includes(term) ||
        (msg.itemType || "").toLowerCase().includes(term)
      );
    },
  );

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  return (
    <div className="dashboard-wrapper">
      <div className={`topbar ${menuOpen ? "active" : ""}`}>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ Menu
        </div>

        <div className="top-left">Admin Panel</div>

        <div className="top-center">
          <input
            type="text"
            placeholder="Search by name or item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="top-right">
          <Link to="/" className="home-btn">
            Home
          </Link>
          <button onClick={fetchMessages} className="refresh-btn">
            Refresh
          </button>
          <button
            onClick={() => handleLogout("You have logged out successfully.")}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {loading ? (
          <p>Loading messages...</p>
        ) : filteredMessages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMessages.map((msg) => (
                  <tr key={msg._id} className="border-t">
                    <td className="p-3">{msg.name}</td>
                    <td className="p-3">{msg.phone}</td>
                    <td className="p-3">{msg.itemType}</td>
                    <td className="p-3">{msg.message}</td>
                    <td className="p-3">
                      {msg.image ? (
                        <img
                          src={`http://localhost:5000/uploads/${msg.image}`}
                          alt="uploaded"
                          className="w-16 h-16 object-cover rounded-lg border cursor-pointer hover:scale-110 transition"
                          onClick={() =>
                            window.open(
                              `http://localhost:5000/uploads/${msg.image}`,
                              "_blank",
                            )
                          }
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                    <td className="p-3">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteMessage(msg._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

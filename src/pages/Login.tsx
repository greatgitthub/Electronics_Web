import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearAuthSession, getValidToken } from "../lib/auth";

interface LoginProps {
  compact?: boolean;
  redirectIfAuthenticated?: boolean;
}

const Login: React.FC<LoginProps> = ({
  compact = false,
  redirectIfAuthenticated = true,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const redirectReason = useMemo(() => {
    if (
      typeof location.state === "object" &&
      location.state !== null &&
      "reason" in location.state &&
      typeof location.state.reason === "string"
    ) {
      return location.state.reason;
    }

    return "";
  }, [location.state]);

  useEffect(() => {
    const token = getValidToken();
    const loggedIn = Boolean(token);

    setIsAuthenticated(loggedIn);

    if (loggedIn && redirectIfAuthenticated) {
      navigate("/admin", { replace: true });
      return;
    }

    setError(redirectReason);
  }, [navigate, redirectIfAuthenticated, redirectReason]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      clearAuthSession();
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      navigate("/admin", { replace: true });
    } catch (err: unknown) {
      clearAuthSession();
      setIsAuthenticated(false);

      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Login failed");
      } else {
        setError("Login failed");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = () => {
    clearAuthSession();
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    navigate("/", {
      replace: true,
      state: { reason: "You have been logged out." },
    });
  };

  const containerClasses = compact
    ? "w-full max-w-md lg:ml-auto"
    : "min-h-screen bg-slate-100 px-4 py-10 flex items-center justify-center";

  return (
    <div id="admin-login" className={containerClasses}>
      <div className="w-full rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-slate-300/40 backdrop-blur">
        <div className="mb-5">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Admin access
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            Admin Login
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Sign in to manage customer messages and requests.
          </p>
        </div>

        {isAuthenticated && !redirectIfAuthenticated ? (
          <div className="space-y-4">
            <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
              You are already logged in.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Open Dashboard
              </button>
              <button
                type="button"
                onClick={handleSignOut}
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Signing in..." : "Login"}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        {!compact && (
          <div className="mt-5 text-center text-sm text-slate-500">
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

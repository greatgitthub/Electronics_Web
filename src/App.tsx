import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
const HomePage: React.FC = () => (
  <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
    <Header />
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

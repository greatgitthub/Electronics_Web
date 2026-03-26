import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Toaster position="top-center" richColors />
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
};

export default App;
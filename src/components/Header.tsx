import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "../lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "መነሻ", href: "#" },
    { name: "አገልግሎቶች", href: "#services" },
    { name: "ስለ እኛ", href: "#about" },
    { name: "እውቂያ", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <PhoneCall className="w-6 h-6 text-white" />
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              isScrolled ? "text-slate-900" : "text-slate-900 md:text-white",
            )}
          >
            ጥገና <span className="text-blue-600">ማእከል</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-bold transition-colors hover:text-blue-400",
                isScrolled
                  ? "text-slate-700"
                  : "text-slate-200 md:text-white/80",
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+251 937423224"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-blue-200"
          >
            አሁኑኑ ይደውሉ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl p-4 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-slate-700 md:text-slate-200 py-2 border-b border-slate-50 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+251 956535999"
              className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
            >
              አሁኑኑ ይደውሉ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

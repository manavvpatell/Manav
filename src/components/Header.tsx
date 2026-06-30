import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-between p-1 transition-transform group-hover:scale-105">
            <div className="w-2 h-full bg-on-primary rounded-xs"></div>
            <div className="w-1.5 h-full bg-on-primary rounded-xs"></div>
            <div className="w-1 h-full bg-on-primary rounded-xs"></div>
          </div>
          <span className="font-display text-2xl font-black tracking-tight text-white transition-colors group-hover:text-primary">
            Gameium<span className="text-secondary font-sans font-light text-sm ml-1 tracking-wider uppercase">Prime</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection("pipeline")}
            className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            Pipeline Calculator
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-5 py-2.5 rounded-lg bg-primary text-on-primary font-display font-bold text-sm tracking-wide transition-all hover:shadow-[0_0_20px_rgba(184,195,255,0.4)] hover:scale-102 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Start Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-on-surface p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface-lowest border-b border-white/5 py-6 px-6 space-y-4 shadow-2xl">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="block w-full text-left font-sans font-medium text-lg text-on-surface-variant hover:text-white py-2"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left font-sans font-medium text-lg text-on-surface-variant hover:text-white py-2"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className="block w-full text-left font-sans font-medium text-lg text-on-surface-variant hover:text-white py-2"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection("pipeline")}
            className="block w-full text-left font-sans font-medium text-lg text-on-surface-variant hover:text-white py-2"
          >
            Pipeline Calculator
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left font-sans font-medium text-lg text-on-surface-variant hover:text-white py-2"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full py-3 rounded-lg bg-primary text-on-primary font-display font-bold tracking-wide text-center block"
          >
            Start Project
          </button>
        </div>
      )}
    </header>
  );
}

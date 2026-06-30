import { Gamepad2 } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-surface-lowest border-t border-white/5 py-12 relative overflow-hidden">
      {/* Decorative vertical light streak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-primary/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex items-center space-x-2 group">
          <div className="w-6 h-6 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
            <Gamepad2 className="w-3.5 h-3.5" />
          </div>
          <span className="font-display text-lg font-black tracking-tight text-white">
            Gameium<span className="text-secondary font-sans font-light text-xs ml-0.5 uppercase tracking-wider">Prime</span>
          </span>
        </div>

        {/* Dynamic navigation links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] text-on-surface-variant/80 uppercase tracking-widest font-semibold">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection("pipeline")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Pipeline Calculator
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Legal copyrights */}
        <div className="font-mono text-[10px] text-on-surface-variant/40">
          &copy; {new Date().getFullYear()} GAMEIUM PRIME. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

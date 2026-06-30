import { motion } from "motion/react";
import { ChevronRight, Gamepad2, Layers } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Dynamic Grid Background with Glow effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141521_1px,transparent_1px),linear-gradient(to_bottom,#141521_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80" />
      
      {/* Futuristic digital glowing streaks/orbs */}
      <div className="absolute top-[20%] left-[15%] w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      {/* Cyberpunk horizontal dividing streak */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />

      <div className="relative max-w-[1280px] mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-low border border-white/5 text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-8"
        >
          <Gamepad2 className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>AAA Game Co-Development Suite</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          Elevating Gaming Through <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
            Art & Innovation
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed"
        >
          From concept to launch, we bring your game worlds to life with
          industry-leading art, seamless interface systems, and stellar design pipelines.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("portfolio")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-on-primary font-display font-bold tracking-wide hover:shadow-[0_0_25px_rgba(184,195,255,0.5)] hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore Our Work</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-secondary text-secondary font-display font-bold tracking-wide hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(233,195,73,0.2)] hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Consult Our Team</span>
            <Layers className="w-4 h-4 text-secondary" />
          </button>
        </motion.div>

        {/* Engine Compatibilities bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 w-full max-w-3xl border-t border-white/5 pt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-xs font-mono text-on-surface-variant"
        >
          <span>ENGINE OPTIMIZED:</span>
          <span className="hover:text-primary transition-colors cursor-default">UNREAL ENGINE 5</span>
          <span className="text-white/20">•</span>
          <span className="hover:text-primary transition-colors cursor-default">UNITY PRO</span>
          <span className="text-white/20">•</span>
          <span className="hover:text-primary transition-colors cursor-default">GODOT ENTERPRISE</span>
          <span className="text-white/20">•</span>
          <span className="hover:text-primary transition-colors cursor-default">CUSTOM ENGINES</span>
        </motion.div>
      </div>
    </section>
  );
}

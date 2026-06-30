import { ShieldAlert, Award, Clock, Smartphone } from "lucide-react";

export default function Stats() {
  return (
    <section id="why-us" className="py-24 bg-surface-lowest relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Built for Serious Studios
          </h2>
          <p className="font-sans text-on-surface-variant text-sm sm:text-base mt-4 leading-relaxed">
            We operate at the nexus of technological optimization and high-fidelity art style, making co-development a hassle-free, frictionless extension of your core engine.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Stat 1 */}
          <div className="bg-surface-low border border-white/5 p-8 rounded-lg flex flex-col justify-between transition-all hover:border-white/10 group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-lowest border border-white/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-secondary tracking-tight">
                10+
              </div>
              <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mt-3">
                Industry Veterans
              </div>
            </div>
            <p className="font-sans text-on-surface-variant text-sm mt-4 leading-relaxed">
              Over 10 years of experience delivering AAA quality assets directly to premier world-wide publishers.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-surface-low border border-white/5 p-8 rounded-lg flex flex-col justify-between transition-all hover:border-white/10 group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-lowest border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-secondary tracking-tight">
                Fast
              </div>
              <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mt-3">
                Rapid Turnaround
              </div>
            </div>
            <p className="font-sans text-on-surface-variant text-sm mt-4 leading-relaxed">
              Efficient, automated custom pipelines delivering high volumes without sacrificing any quality.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-surface-low border border-white/5 p-8 rounded-lg flex flex-col justify-between transition-all hover:border-white/10 group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-lowest border border-white/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-105 transition-transform">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-secondary tracking-tight">
                Any
              </div>
              <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mt-3">
                Platform Agnostic
              </div>
            </div>
            <p className="font-sans text-on-surface-variant text-sm mt-4 leading-relaxed">
              Fully optimized asset shaders and layouts, tailored for PC, Consoles, Mobile, and Web integration.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Settings, Cpu, Clock, Users, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";

interface ConfiguratorProps {
  onApplySpec?: (specText: string, projectType: string) => void;
}

export default function PipelineConfigurator({ onApplySpec }: ConfiguratorProps) {
  const [platform, setPlatform] = useState<"PC/Console" | "Mobile" | "Cross-Platform">("PC/Console");
  const [scope, setScope] = useState<"Indie/DLC" | "Mid-Size" | "AAA Title">("Mid-Size");
  const [artStyle, setArtStyle] = useState<"Stylized" | "Semi-Realistic" | "Ultra-Realistic">("Semi-Realistic");
  const [pipelines, setPipelines] = useState<string[]>(["3D Modeling", "UI/UX"]);

  const [duration, setDuration] = useState<number>(12);
  const [teamSize, setTeamSize] = useState<number>(4);
  const [complexity, setComplexity] = useState<string>("Medium");

  const togglePipeline = (pipeline: string) => {
    if (pipelines.includes(pipeline)) {
      if (pipelines.length > 1) {
        setPipelines(pipelines.filter((p) => p !== pipeline));
      }
    } else {
      setPipelines([...pipelines, pipeline]);
    }
  };

  // Dynamically calculate specs on input change
  useEffect(() => {
    let baseWeeks = 6;
    let baseStaff = 2;

    // Platform multipliers
    if (platform === "Mobile") {
      baseWeeks *= 0.8;
      baseStaff -= 1;
    } else if (platform === "Cross-Platform") {
      baseWeeks *= 1.3;
      baseStaff += 1;
    }

    // Scope multipliers
    if (scope === "Indie/DLC") {
      baseWeeks *= 0.7;
      baseStaff = Math.max(1, baseStaff - 1);
    } else if (scope === "AAA Title") {
      baseWeeks *= 1.8;
      baseStaff += 3;
    }

    // Art Style multipliers
    if (artStyle === "Stylized") {
      baseWeeks *= 0.9;
    } else if (artStyle === "Ultra-Realistic") {
      baseWeeks *= 1.4;
      baseStaff += 1;
    }

    // Pipelines additions
    baseWeeks += pipelines.length * 1.5;
    baseStaff += Math.floor(pipelines.length / 2);

    // Final state updates
    const roundedWeeks = Math.round(baseWeeks);
    const finalStaff = Math.max(1, baseStaff);
    setDuration(roundedWeeks);
    setTeamSize(finalStaff);

    // Complexity rating
    if (roundedWeeks > 18 || finalStaff > 7) {
      setComplexity("Ultra / AAA Spec");
    } else if (roundedWeeks > 10 || finalStaff > 3) {
      setComplexity("High Fidelity");
    } else {
      setComplexity("Optimized Standard");
    }
  }, [platform, scope, artStyle, pipelines]);

  const handleApplySpec = () => {
    const specText = `Pipeline Spec configured:\n- Platform: ${platform}\n- Scope: ${scope}\n- Style: ${artStyle}\n- Services: ${pipelines.join(", ")}\n- Est Duration: ${duration} weeks\n- Crew size: ${teamSize} specialists`;
    
    if (onApplySpec) {
      onApplySpec(specText, `${scope} (${platform})`);
      // Scroll to contact form
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pipeline" className="py-24 bg-background relative">
      <div className="absolute top-[20%] left-[5%] w-60 h-60 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-60 h-60 rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            B2B Interactive Tools
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Configure Your Production Pipeline
          </h2>
          <p className="font-sans text-on-surface-variant text-sm sm:text-base mt-4 leading-relaxed">
            Estimate production duration, required specialist crew sizes, and set milestones based on your specific art direction and platform targets.
          </p>
        </div>

        {/* Console Box Layout */}
        <div className="bg-surface-low border border-white/10 rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-white/5">
            
            {/* Control Header */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-container border border-white/10 flex items-center justify-center text-secondary">
                <Settings className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Pipeline Inputs</h3>
                <p className="font-sans text-xs text-on-surface-variant/70">Adjust parameters to recalculate metrics</p>
              </div>
            </div>

            {/* Platform Segmented Selector */}
            <div className="space-y-3">
              <label className="font-mono text-xs font-bold text-on-surface/90 uppercase tracking-wider block">
                1. Target Platform
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["PC/Console", "Mobile", "Cross-Platform"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`py-3 px-2 rounded font-mono text-xs font-bold uppercase tracking-wider text-center border cursor-pointer transition-all ${
                      platform === p
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(184,195,255,0.15)]"
                        : "bg-surface-lowest border-white/5 text-on-surface-variant hover:text-white hover:border-white/20"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Scope Segmented Selector */}
            <div className="space-y-3">
              <label className="font-mono text-xs font-bold text-on-surface/90 uppercase tracking-wider block">
                2. Project Scope & Asset Volume
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Indie/DLC", "Mid-Size", "AAA Title"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setScope(s)}
                    className={`py-3 px-2 rounded font-mono text-xs font-bold uppercase tracking-wider text-center border cursor-pointer transition-all ${
                      scope === s
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(184,195,255,0.15)]"
                        : "bg-surface-lowest border-white/5 text-on-surface-variant hover:text-white hover:border-white/20"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Art Direction Style */}
            <div className="space-y-3">
              <label className="font-mono text-xs font-bold text-on-surface/90 uppercase tracking-wider block">
                3. Art Direction & Material Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Stylized", "Semi-Realistic", "Ultra-Realistic"] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => setArtStyle(style)}
                    className={`py-3 px-2 rounded font-mono text-xs font-bold uppercase tracking-wider text-center border cursor-pointer transition-all ${
                      artStyle === style
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(184,195,255,0.15)]"
                        : "bg-surface-lowest border-white/5 text-on-surface-variant hover:text-white hover:border-white/20"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Co-Dev pipelines Checkbox list */}
            <div className="space-y-3">
              <label className="font-mono text-xs font-bold text-on-surface/90 uppercase tracking-wider block">
                4. Integrated Services
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {["3D Modeling", "UI/UX", "Concept Art", "Branding", "Trailers"].map((pipe) => {
                  const isChecked = pipelines.includes(pipe);
                  return (
                    <button
                      key={pipe}
                      onClick={() => togglePipeline(pipe)}
                      className={`flex items-center justify-between p-3 rounded border font-sans text-xs text-left cursor-pointer transition-all ${
                        isChecked
                          ? "bg-surface-container border-secondary/30 text-secondary font-bold"
                          : "bg-surface-lowest border-white/5 text-on-surface-variant/80 hover:text-white hover:border-white/10"
                      }`}
                    >
                      <span>{pipe}</span>
                      <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                        isChecked ? "border-secondary bg-secondary text-on-secondary" : "border-white/20 bg-transparent"
                      }`}>
                        {isChecked && (
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Outputs Right Column */}
          <div className="lg:col-span-5 bg-surface-lowest p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Output Header */}
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <Cpu className="w-4 h-4 text-primary animate-pulse" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                  Live Engine Pipeline Spec
                </span>
              </div>

              {/* Dynamic Stats Output Grid */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Duration stat */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider block">
                    Est. Duration
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-display text-2xl sm:text-3xl font-black text-white">
                      {duration}
                    </span>
                    <span className="font-sans text-xs text-on-surface-variant">weeks</span>
                  </div>
                </div>

                {/* Staff stat */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider block">
                    Expert Crew Size
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="font-display text-2xl sm:text-3xl font-black text-white">
                      {teamSize}
                    </span>
                    <span className="font-sans text-xs text-on-surface-variant">specialists</span>
                  </div>
                </div>
              </div>

              {/* Slider representing completion path */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant/70">
                  <span>PIPELINE DENSITY</span>
                  <span className="text-secondary">{complexity}</span>
                </div>
                <div className="w-full h-2 rounded bg-surface-low overflow-hidden relative">
                  {/* Glowing progress filling */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-cyan-400 to-secondary"
                    initial={{ width: "30%" }}
                    animate={{ width: `${Math.min(100, (duration / 32) * 100)}%` }}
                    transition={{ type: "spring", stiffness: 60 }}
                  />
                </div>
              </div>

              {/* High-fidelity checklist summary */}
              <div className="p-4 rounded bg-surface-low border border-white/5 space-y-3">
                <h4 className="font-mono text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  Included Milestones
                </h4>
                <ul className="space-y-2 text-xs font-sans text-on-surface-variant">
                  <li className="flex items-center justify-between">
                    <span>Kickoff & Visual Direction Book</span>
                    <span className="font-mono text-[10px] text-primary">Week 1</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Alpha High-Poly Iterations</span>
                    <span className="font-mono text-[10px] text-primary">Week {Math.max(2, Math.floor(duration * 0.3))}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>PBR Textures & Shader Maps</span>
                    <span className="font-mono text-[10px] text-primary">Week {Math.max(3, Math.floor(duration * 0.6))}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Engine-Ready Files & Retopology</span>
                    <span className="font-mono text-[10px] text-secondary">Week {duration}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Transfer to form button */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={handleApplySpec}
                className="w-full py-4 rounded bg-secondary hover:bg-secondary/95 text-on-secondary font-display font-black text-sm uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(233,195,73,0.3)] hover:scale-101 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-on-secondary animate-pulse" />
                Apply Spec to Contact Form
              </button>
              <div className="flex items-center gap-1.5 justify-center mt-3 text-[10px] font-mono text-on-surface-variant/50">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Adjusts form inputs automatically</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Layout, Video, ShieldCheck, Paintbrush, CheckCircle2, ArrowRight, X, Cpu } from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  tools: string[];
  deliverables: string[];
  workflow: string[];
  stats: string;
}

export default function Expertise() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: "art",
      title: "2D & 3D Art",
      subtitle: "High-Fidelity Assets for Modern Game Engines",
      shortDescription: "High-fidelity characters, environments, and assets tailored for any engine.",
      fullDescription: "Our AAA character and environmental design team excels at delivering optimized, breathtaking production models. From stylized low-poly designs to photo-realistic, nanite-ready high-poly assets, we ensure seamless compatibility with your rendering pipeline.",
      icon: Layers,
      tools: ["Unreal Engine 5", "Blender", "ZBrush", "Substance Painter", "Marmoset"],
      deliverables: ["PBR Game-Ready Meshes", "High & Low-Poly Fbx Source Files", "Rigged & Skinned Skeletal Characters", "Optimized Shader Graphs"],
      workflow: ["1. Reference & Ideation", "2. High-Poly Sculpting", "3. Re-topology & UV Mapping", "4. PBR Texturing", "5. Rigging & Engine Integration"],
      stats: "250K+ Assets Delivered"
    },
    {
      id: "uiux",
      title: "UI/UX",
      subtitle: "Player-Centric Interfaces",
      shortDescription: "Player-centric interfaces that blend seamless functionality with immersive aesthetics.",
      fullDescription: "Interface designs that feel native to the game's lore. We structure interactive hubs, HUDs, inventory management panels, and user onboarding maps that keep players immersed and connected to the action.",
      icon: Layout,
      tools: ["Figma", "Adobe Illustrator", "Unreal UMG", "Unity UI Toolkit"],
      deliverables: ["Interactive Prototypes", "Ready-to-Assemble Asset Atlases", "UX Flows & Player Wireframes", "Custom Icon Packages"],
      workflow: ["1. User Journey Mapping", "2. Low-Fidelity Wireframes", "3. Theme Visual Styling", "4. Animation & HUD Spec", "5. Asset Slicing & Implementation Guides"],
      stats: "50+ Global Game HUDS"
    },
    {
      id: "videos",
      title: "Product Videos",
      subtitle: "Cinematic Game Trailers & Showcases",
      shortDescription: "Cinematic trailers and gameplay reveals that capture your project's soul.",
      fullDescription: "Trailers that convert. We direct, produce, and capture breathtaking gameplay videos, story-driven cinematics, and deep-dive technical features designed to build hype and boost wishlist acquisitions.",
      icon: Video,
      tools: ["After Effects", "Premiere Pro", "Unreal Sequencer", "DaVinci Resolve"],
      deliverables: ["Teaser & Launch Trailers", "Cinematic Cutscenes", "Gameplay Deep Dives", "Ad-Ready Promo Cuts"],
      workflow: ["1. Storyboarding & Scripting", "2. Cinematic Scene Set-up", "3. High-Quality Capture & Camera Direction", "4. Post-Production Editing", "5. Audio Mastering & Sound Design"],
      stats: "15M+ Aggregate Views"
    },
    {
      id: "branding",
      title: "Branding",
      subtitle: "Immersive Gaming Franchise Identities",
      shortDescription: "Identity systems that make your game stand out in a crowded marketplace.",
      fullDescription: "Establishing memorable visual universes. We craft dynamic logos, key-art typography, launch merchandise mockups, and absolute cohesive visual identity kits that align your game to the target gaming culture.",
      icon: ShieldCheck,
      tools: ["Photoshop", "Illustrator", "InDesign", "Cinema 4D"],
      deliverables: ["Launch Key Art Design", "Typography Guidelines", "Comprehensive Franchise Brand Books", "Social & Steam Asset Kits"],
      workflow: ["1. Audience Competitor Mapping", "2. Concept Logo Moodboards", "3. Design Vector Execution", "4. Typography & Accent System Design", "5. Asset-Kit Packaging"],
      stats: "30+ Game Titles Launched"
    },
    {
      id: "concept",
      title: "Concept Art",
      subtitle: "Visionary World-Building & Character Design",
      shortDescription: "Visionary world-building and character design to define your creative direction.",
      fullDescription: "From a single concept pitch line to a fully rendered visual guide. We create keyframe illustrations, architectural blueprints, environmental layouts, and detailed character turnarounds that serve as the foundation of your entire production team.",
      icon: Paintbrush,
      tools: ["Photoshop", "Procreate", "Stable Diffusion Custom LORAs", "3D Coat"],
      deliverables: ["Character Turnarounds", "Environmental Keyframes", "Prop & Mechanical Blueprint Drawings", "Atmosphere & Color Moodboards"],
      workflow: ["1. Brief Interpretation", "2. Thumbnail Silhouettes", "3. Value Studies & Composites", "4. Detailed Color Render", "5. Production Sheet Orthographics"],
      stats: "1,200+ Environments Crafted"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#161622]/40 to-transparent" />
      <div className="absolute top-[40%] right-[20%] w-80 h-80 rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Mastering Every Phase <br className="hidden sm:inline" />
            Of Game Art Creation
          </h2>
          <p className="font-sans text-on-surface-variant text-base mt-4 leading-relaxed">
            We partner with leading publishers and independent studios to craft assets that integrate effortlessly, perform flawlessly, and captivate players worldwide.
          </p>
        </div>

        {/* Services Grid matching standard bento look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 4; // Visual variety
            
            return (
              <motion.div
                key={service.id}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -6, borderColor: "var(--color-primary)" }}
                className={`group relative p-8 rounded-lg bg-surface-low border border-white/5 hover:border-primary/40 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Subtle card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg duration-500" />
                
                <div>
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-lg bg-surface-container border border-white/10 flex items-center justify-center text-primary group-hover:text-secondary group-hover:border-secondary/30 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-on-surface-variant text-sm mt-3 leading-relaxed max-w-xl">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="font-mono text-xs text-on-surface-variant/60 group-hover:text-primary/80 transition-colors">
                    {service.stats}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-primary group-hover:text-secondary font-bold uppercase tracking-widest transition-colors">
                    <span>Inspect Pipeline</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Detail Panel */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-background/90 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl bg-surface-low border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
              >
                {/* Left side detail panel */}
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                  <div>
                    {/* Top indicator & close for mobile inside body */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-semibold tracking-widest text-secondary uppercase bg-secondary/10 px-2.5 py-1 rounded-sm">
                        {selectedService.stats}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedService.title}
                    </h3>
                    <p className="font-sans text-primary text-sm font-medium mt-1">
                      {selectedService.subtitle}
                    </p>

                    <p className="font-sans text-on-surface-variant text-sm mt-5 leading-relaxed">
                      {selectedService.fullDescription}
                    </p>

                    {/* Tools tag lists */}
                    <div className="mt-6">
                      <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Core Software / Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface-container border border-white/5 text-on-surface"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA scroll connection */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const contactEl = document.getElementById("contact");
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full py-3 rounded bg-primary hover:bg-primary/95 text-on-primary font-display font-bold text-sm tracking-wide transition-all hover:shadow-[0_0_15px_rgba(184,195,255,0.3)] cursor-pointer text-center block"
                    >
                      Inquire About {selectedService.title}
                    </button>
                  </div>
                </div>

                {/* Right side workflow and deliverables */}
                <div className="p-8 md:p-10 flex-1 bg-surface-lowest flex flex-col justify-between">
                  {/* Close button for desktop */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 text-on-surface-variant hover:text-white p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
                    aria-label="Close detailed view"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-6">
                    {/* Deliverables Section */}
                    <div>
                      <h4 className="font-mono text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                        Production Deliverables
                      </h4>
                      <ul className="space-y-2.5 font-sans text-sm text-on-surface">
                        {selectedService.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Workflow pipeline steps */}
                    <div>
                      <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-3">
                        Our Delivery Pipeline
                      </h4>
                      <div className="relative border-l border-white/10 pl-4 py-1 space-y-4">
                        {selectedService.workflow.map((step) => (
                          <div key={step} className="relative">
                            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-secondary" />
                            <span className="font-mono text-xs text-on-surface font-medium block">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 text-[11px] font-mono text-on-surface-variant/50 text-right">
                    PIPELINE OPTIMIZED FOR SHIPPED SHADERS
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

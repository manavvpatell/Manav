import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioItem } from "../types";
import { ExternalLink, X, Cpu, Tag, PenTool, Flame, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ["All", "3D Art", "UI/UX", "Concept Art", "Branding"];

  const portfolioItems: PortfolioItem[] = [
    {
      id: "p1",
      title: "Project: Neon Genesis",
      category: "3D Art",
      imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800",
      description: "A fully custom-rigged, AAA sci-fi mech soldier optimized for Unreal Engine 5's Nanite virtual geometry. Modeled with high-density surface paneling and mechanical articulation blueprints.",
      studio: "Aetheria Studios",
      tools: ["Unreal Engine 5", "ZBrush", "Substance Painter", "Blender"],
      specs: {
        polycount: "185,000 Triangles (LOD0)",
        textures: "4x 4K PBR Texture Sets",
        resolution: "Game-Ready Rigged"
      }
    },
    {
      id: "p2",
      title: "Aether: Citadel Ruins",
      category: "Concept Art",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800",
      description: "Comprehensive environment keyframe illustration setting the visual atmosphere and lighting standards for a dark fantasy RPG expansion project.",
      studio: "Frostbound Interactive",
      tools: ["Photoshop", "Blender 3D", "Wacom Intuos"],
      specs: {
        resolution: "8000 x 4500 Digital Render",
        duration: "14-Day Delivery Pipeline"
      }
    },
    {
      id: "p3",
      title: "Cyberpunk HUD Suite",
      category: "UI/UX",
      imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=800",
      description: "An immersive, vector-optimized tactical HUD with custom ammo gauges, dynamic diagnostic screens, and interactive radial select inventory menus.",
      studio: "Next-Gen FPS Project",
      tools: ["Figma", "After Effects", "Unreal UMG", "Illustrator"],
      specs: {
        textures: "SVG Vector Shapes / Atlas",
        resolution: "4K Scalable Vector Output"
      }
    },
    {
      id: "p4",
      title: "Neon Arcade Reboot",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800",
      description: "Complete visual franchise relaunch for a classic cabinet gaming series, featuring brand guides, premium typography assets, and Steam launch visuals.",
      studio: "Cabinet Classics Ltd",
      tools: ["Illustrator", "Photoshop", "After Effects"],
      specs: {
        duration: "21-Day Franchise Overhaul",
        resolution: "Dynamic Brand Identity Kit"
      }
    },
    {
      id: "p5",
      title: "Iridescent Core",
      category: "3D Art",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      description: "Highly complex alien energy core model utilizing procedural emissive shaders and custom particle collision fields to simulate infinite nuclear fusion.",
      studio: "Sci-Fi MMO Project",
      tools: ["Maya", "Substance Painter", "Unreal Niagra", "Houdini"],
      specs: {
        polycount: "42,000 Triangles (Procedural Vfx)",
        textures: "2x 2K Emissive Maps"
      }
    },
    {
      id: "p6",
      title: "Neo-Tokyo Alleyways",
      category: "Concept Art",
      imageUrl: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=800",
      description: "High-definition moody street concept detailing neon placement guidelines, garbage clutter assets, and rain slick surface reflections for production mapping.",
      studio: "Voxel Noir Inc",
      tools: ["Photoshop", "Procreate", "Lightroom"],
      specs: {
        resolution: "6000 x 3375 Paint",
        duration: "8-Day Production Phase"
      }
    },
    {
      id: "p7",
      title: "Tactical HUD Atlas",
      category: "UI/UX",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
      description: "A complete asset kit including health status nodes, active cooldown dials, reticles, and damage directional alerts, engineered to run smoothly on low-end systems.",
      studio: "Apex Warfare Co",
      tools: ["Figma", "Unity UI Toolkit", "Photoshop"],
      specs: {
        textures: "Optimized 2048px HUD Atlas Sheet",
        resolution: "Mobile & Console Optimized"
      }
    },
    {
      id: "p8",
      title: "Vesper Guild crests",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800",
      description: "Faction heraldry and dynamic vector logo designs representing ancient orders of magicians and technicians in a magical sandbox title.",
      studio: "Vesper MMORPG Corp",
      tools: ["Illustrator", "Cinema 4D"],
      specs: {
        duration: "10-Day Faction Suite Design",
        resolution: "Fully Scalable Vectors"
      }
    }
  ];

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-surface-lowest relative">
      {/* Decorative lines & glows */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header and Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              Agency Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Our Released Worlds
            </h2>
            <p className="font-sans text-on-surface-variant text-sm sm:text-base mt-3 leading-relaxed">
              Explore custom art assets, player HUD designs, and branding kits delivered to game developers around the globe.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary text-on-primary shadow-[0_0_15px_rgba(184,195,255,0.3)]"
                    : "bg-surface-low border border-white/5 text-on-surface-variant hover:text-white hover:bg-surface-container"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-surface-low border border-white/5 rounded-lg overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono font-bold text-primary uppercase tracking-widest border border-white/5">
                    {item.category}
                  </div>

                  {/* Hover arrow up right */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-on-surface-variant line-clamp-2 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-on-surface-variant/60">
                    <span>FOR: {item.studio || "NDA Studio"}</span>
                    <span>DETAIL →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Immersive Portfolio Inspect Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-background/95 backdrop-blur-md cursor-pointer"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-5xl bg-surface-low border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 text-on-surface-variant hover:text-white p-1.5 rounded-full bg-black/60 hover:bg-black/80 transition-colors focus:outline-none"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image panel */}
                <div className="lg:w-[55%] relative bg-black/20 flex items-center justify-center min-h-[250px] lg:min-h-[450px]">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover max-h-[40vh] lg:max-h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-transparent to-transparent opacity-20" />
                </div>

                {/* Content Panel */}
                <div className="lg:w-[45%] p-8 lg:p-10 overflow-y-auto flex flex-col justify-between max-h-[50vh] lg:max-h-[90vh]">
                  <div>
                    <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded">
                      {selectedItem.category}
                    </span>
                    
                    <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white mt-4">
                      {selectedItem.title}
                    </h3>
                    
                    <div className="font-sans text-sm text-primary font-medium mt-1">
                      Partner: {selectedItem.studio || "NDA Protected Gaming Studio"}
                    </div>

                    <p className="font-sans text-on-surface-variant text-sm mt-5 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    {/* Specification Specs List */}
                    <div className="mt-8 space-y-4">
                      <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">
                        Technical Specs
                      </h4>
                      <div className="grid grid-cols-2 gap-4 font-sans text-xs">
                        {selectedItem.specs?.polycount && (
                          <div>
                            <div className="text-on-surface-variant/60 font-mono">POLYCOUNT</div>
                            <div className="text-white font-medium mt-0.5">{selectedItem.specs.polycount}</div>
                          </div>
                        )}
                        {selectedItem.specs?.textures && (
                          <div>
                            <div className="text-on-surface-variant/60 font-mono">TEXTURE SETS</div>
                            <div className="text-white font-medium mt-0.5">{selectedItem.specs.textures}</div>
                          </div>
                        )}
                        {selectedItem.specs?.resolution && (
                          <div>
                            <div className="text-on-surface-variant/60 font-mono">RESOLUTION / COMPAT</div>
                            <div className="text-white font-medium mt-0.5">{selectedItem.specs.resolution}</div>
                          </div>
                        )}
                        {selectedItem.specs?.duration && (
                          <div>
                            <div className="text-on-surface-variant/60 font-mono">PIPELINE DELIVERY</div>
                            <div className="text-white font-medium mt-0.5">{selectedItem.specs.duration}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Software Tools */}
                    <div className="mt-8">
                      <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Tools Employed
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItem.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[11px] bg-surface-lowest border border-white/5 text-on-surface-variant px-2.5 py-1 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        const contactEl = document.getElementById("contact");
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="flex-1 py-3 bg-primary hover:bg-primary/95 text-on-primary font-display font-bold text-xs uppercase tracking-wider rounded text-center cursor-pointer hover:shadow-[0_0_15px_rgba(184,195,255,0.3)]"
                    >
                      Inquire About Asset Customization
                    </button>
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

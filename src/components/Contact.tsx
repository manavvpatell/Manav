import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, History, Trash2, HelpCircle } from "lucide-react";
import { ContactInquiry } from "../types";

interface ContactProps {
  initialSpecText: string;
  initialProjectType: string;
  onClearSpec: () => void;
}

export default function Contact({ initialSpecText, initialProjectType, onClearSpec }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("RPG / MMO");
  const [budgetRange, setBudgetRange] = useState("$25,000 - $50,000");
  const [message, setMessage] = useState("");

  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Load submissions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("gameium_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync state if initialSpecText changes from parent
  useEffect(() => {
    if (initialSpecText) {
      setMessage((prev) => {
        // If message is empty or doesn't have the spec yet, prepend/set it
        if (!prev.includes("Pipeline Spec")) {
          return `${initialSpecText}\n\n---\nAdditional details: ${prev}`;
        }
        return prev;
      });
    }
    if (initialProjectType) {
      setProjectType(initialProjectType);
    }
  }, [initialSpecText, initialProjectType]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newInquiry: ContactInquiry = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      projectType,
      budgetRange,
      message,
      createdAt: new Date().toLocaleTimeString()
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("gameium_inquiries", JSON.stringify(updated));

    setIsSubmitted(true);
    // Reset form fields (except for history)
    setName("");
    setEmail("");
    setMessage("");
    onClearSpec();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const clearInquiryHistory = () => {
    setInquiries([]);
    localStorage.removeItem("gameium_inquiries");
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-transparent" />
      <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-secondary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
                Ready to Deploy?
              </h2>
              <p className="font-sans text-on-surface-variant text-sm sm:text-base mt-4 leading-relaxed">
                Connect with our pipeline producers to explore full team allocations, custom shader engineering, or character design workflows.
              </p>
            </div>

            {/* Direct Channels cards */}
            <div className="space-y-4 font-sans text-sm">
              {/* Email */}
              <a
                href="mailto:alice@gameium.com"
                className="flex items-center gap-4 p-5 rounded-lg bg-surface-low border border-white/5 hover:border-primary/20 transition-all group block"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-lowest border border-white/10 flex items-center justify-center text-primary group-hover:text-secondary transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                    EMAIL INQUIRIES
                  </div>
                  <div className="text-white font-medium group-hover:text-primary transition-colors">
                    alice@gameium.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+15550000000"
                className="flex items-center gap-4 p-5 rounded-lg bg-surface-low border border-white/5 hover:border-primary/20 transition-all group block"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-lowest border border-white/10 flex items-center justify-center text-secondary group-hover:text-primary transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                    TELEPHONE HOTLINE
                  </div>
                  <div className="text-white font-medium group-hover:text-secondary transition-colors">
                    +1 (555) 000-0000
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 rounded-lg bg-surface-low border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-surface-lowest border border-white/10 flex items-center justify-center text-on-surface-variant shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                    STUDIO HQ
                  </div>
                  <div className="text-white font-medium">
                    Tokyo • Seattle • London (Hybrid)
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries sandbox toggle */}
            {inquiries.length > 0 && (
              <div className="pt-4">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="flex items-center gap-2 font-mono text-xs text-primary/80 hover:text-primary cursor-pointer transition-colors"
                >
                  <History className="w-4 h-4 animate-pulse" />
                  <span>
                    {showHistory ? "Hide Local Inquiries Log" : `View Saved Inquiries (${inquiries.length})`}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-surface-low border border-white/10 rounded-xl p-8 sm:p-10 shadow-2xl relative">
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Establish Connection
            </h3>

            {/* Submission alert */}
            {isSubmitted && (
              <div className="mb-6 p-4 rounded bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Transmission Successful</h4>
                  <p className="text-xs text-on-surface-variant/80 mt-1">
                    Your pipeline inquiry has been serialized and recorded to the local sandbox database storage.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.G. HIDEO KOJIMA"
                    className="w-full bg-surface-lowest border border-white/10 rounded px-4 py-3 font-mono text-xs text-white placeholder-on-surface-variant/30 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(184,195,255,0.15)] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.G. PRODUCER@STUDIO.COM"
                    className="w-full bg-surface-lowest border border-white/10 rounded px-4 py-3 font-mono text-xs text-white placeholder-on-surface-variant/30 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(184,195,255,0.15)] transition-all"
                  />
                </div>
              </div>

              {/* Scope & Budget row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-wider block">
                    Genre / Format
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-surface-lowest border border-white/10 rounded px-4 py-3 font-sans text-xs text-white focus:outline-none focus:border-primary transition-all cursor-pointer"
                  >
                    <option value="RPG / MMO">RPG / MMO Space</option>
                    <option value="Action FPS / TPS">Action FPS / TPS</option>
                    <option value="Mobile / Hypercasual">Mobile / Hypercasual</option>
                    <option value="VR / Immersive Reality">VR / Immersive Reality</option>
                    <option value="Cinematic Trailer / Vfx Only">Cinematic Trailer / Vfx Only</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-wider block">
                    Estimated Art Budget
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-surface-lowest border border-white/10 rounded px-4 py-3 font-sans text-xs text-white focus:outline-none focus:border-primary transition-all cursor-pointer"
                  >
                    <option value="$10,000 - $25,000">$10,000 - $25,000 USD</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000 USD</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000 USD</option>
                    <option value="$100,000+">$100,000+ USD (Custom Suite)</option>
                  </select>
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-wider block">
                  Project Scope details
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="DESCRIBE YOUR CO-DEV REQUIREMENTS, POLYGON DENSITIES, TIMELINE EXPECTATIONS..."
                  className="w-full bg-surface-lowest border border-white/10 rounded px-4 py-3 font-mono text-xs text-white placeholder-on-surface-variant/30 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(184,195,255,0.15)] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded bg-primary hover:bg-primary/95 text-on-primary font-display font-bold text-sm tracking-wide transition-all hover:shadow-[0_0_20px_rgba(184,195,255,0.4)] hover:scale-101 flex items-center justify-center gap-2 cursor-pointer mt-6"
              >
                <span>Transmit Specification</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Local submissions display container */}
        {showHistory && inquiries.length > 0 && (
          <div className="mt-12 p-6 rounded-lg bg-surface-low border border-white/5 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-primary" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Client Sandbox Submission Log (Local Cache)
                </h4>
              </div>
              <button
                onClick={clearInquiryHistory}
                className="p-1 rounded text-on-surface-variant/60 hover:text-red-400 hover:bg-white/5 transition-all flex items-center gap-1 font-mono text-[10px]"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Logs</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto">
              {inquiries.map((item) => (
                <div key={item.id} className="p-4 rounded bg-surface-lowest border border-white/5 space-y-2 relative">
                  <span className="absolute top-4 right-4 text-[9px] font-mono text-on-surface-variant/40">
                    {item.createdAt}
                  </span>
                  <div className="text-xs font-bold text-white">{item.name}</div>
                  <div className="text-[11px] text-primary font-mono">{item.email}</div>
                  <div className="text-[10px] text-secondary font-mono">
                    {item.projectType} • {item.budgetRange}
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3 bg-black/10 p-2.5 rounded border border-white/5 font-mono">
                    {item.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

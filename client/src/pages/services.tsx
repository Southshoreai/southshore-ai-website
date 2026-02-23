import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { 
  Phone, 
  MessageSquare, 
  Smartphone, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Briefcase, 
  Users, 
  Clock,
  Zap,
  Shield,
  Bot,
  Target,
  Menu,
  X
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";

// --- Components ---

const AnimatedCounter = ({ value, duration = 2, delay = 0, format = (v: number) => Math.round(v).toString() }: { value: number, duration?: number, delay?: number, format?: (v: number) => string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(0, value, {
          duration: duration,
          onUpdate(latest) {
            setDisplayValue(format(latest));
          },
        });
        return controls.stop;
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, duration, delay, format]);

  return <span ref={ref}>{displayValue}</span>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="South Shore AI" className="h-10 md:h-12" />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Solution</Link>
          <Link href="/packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          <div className="flex items-center gap-6 ml-4 border-l border-white/10 pl-6">
            <a href="tel:6175450717" className="flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-400 transition-colors shrink-0">
              <Phone size={14} />
              Talk to our AI Assistant
            </a>
            <a 
              href="https://calendly.com/scottpralinsky/30-minute-meeting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg text-sm shrink-0 whitespace-nowrap"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-white/10 p-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Engagement</Link>
          <Link href="/packages" onClick={() => setIsOpen(false)} className="text-lg font-medium">Packages</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">Contact</Link>
          <a href="tel:6175450717" className="flex items-center gap-3 text-lg font-bold text-accent">
            <Phone size={20} />
            (617) 545-0717
          </a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-accent text-center py-3 rounded-full font-bold text-white"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </nav>
  );
};

const ServiceHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent z-0 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest mb-6 uppercase">
            Responsiveness at Scale
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Your Marketing Isn’t Broken. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Your Foundation Is.</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 text-left md:text-center flex flex-col items-center">
            <ul className="space-y-3 inline-block text-left">
              {[
                "You’re spending money but can’t trace ROI.",
                "Your website looks fine but doesn’t convert.",
                "You post on social media but nothing compounds.",
                "You don’t know which lever actually drives revenue.",
                "You’re guessing."
              ].map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl md:text-3xl font-bold mt-12 text-white">
              The Growth Engine fixes the structure before you scale the traffic.
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StrategicShift = () => {
  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20"></div>
            <div className="relative bg-background p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold">The Big Promise</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We install a predictable growth system under your business.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span>Not more activity.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span>Not more noise.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span>A coordinated revenue engine.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemDiagram = () => {
  const steps = [
    { title: "Searchability", icon: <Search size={24} /> },
    { title: "SEO", icon: <Target size={24} /> },
    { title: "Website", icon: <Smartphone size={24} /> },
    { title: "Authority", icon: <Shield size={24} /> },
    { title: "Lead Capture", icon: <Users size={24} /> },
    { title: "Conversion Path", icon: <ArrowRight size={24} /> },
    { title: "Automation", icon: <Zap size={24} /> }
  ];

  return (
    <section className="py-24 container mx-auto px-4 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">The Growth System</h2>
        <p className="text-gray-400">A unified flow for predictable results</p>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-white/5 via-primary/50 to-white/5 -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-primary group-hover:text-accent group-hover:border-accent/50 transition-all shadow-lg group-hover:shadow-accent/20 mb-6 bg-background relative z-10">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-center">{step.title}</h3>
              
              {/* Mobile/Tablet Arrow (hidden on desktop last item) */}
              {idx !== steps.length - 1 && (
                <div className="lg:hidden mt-4 text-white/20">
                  <ArrowRight size={16} className="rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const phases = [
    {
      title: "Phase 1: Deep Audit",
      duration: "Week 1–2",
      items: ["Technical review", "Search audit", "Website breakdown", "Competitive scan"]
    },
    {
      title: "Phase 2: Strategic Blueprint",
      duration: "Week 3",
      items: ["Clear growth map", "Priority ranking", "Revenue leverage identification"]
    },
    {
      title: "Phase 3: Build & Optimize",
      duration: "Weeks 4–8",
      items: ["Structural fixes", "Messaging upgrades", "Conversion improvements", "Automation installs"]
    },
    {
      title: "Phase 4: Activate & Scale",
      duration: "Ongoing",
      items: ["Measured traffic", "Data tracking", "Ongoing refinement"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Timeline</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line (Desktop) */}
                {idx !== phases.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-white/10 group-hover:bg-primary/50 transition-colors z-0"></div>
                )}
                
                <div className="relative z-10 bg-card border border-white/10 rounded-2xl p-6 h-full hover:border-primary/30 transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-card flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-xl mx-auto lg:mx-0 relative">
                    {idx + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-accent text-sm font-bold uppercase tracking-wider mb-6">{phase.duration}</p>
                  
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Deliverables = () => {
  const items = [
    "Full digital ecosystem audit document",
    "Prioritized action roadmap",
    "Messaging clarity framework",
    "SEO technical correction plan",
    "Conversion optimization blueprint",
    "Lead capture strategy",
    "Revenue pathway diagram"
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">What You Actually Deliver</h2>
          <div className="space-y-6">
            <p className="text-gray-400 text-lg mb-8">
              We don't just give you "advice." We hand you a comprehensive, executable asset library that becomes the intellectual property of your business.
            </p>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex gap-4 items-center p-4 rounded-xl bg-card border border-white/5 hover:border-primary/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          {/* Abstract background elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-50"></div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            {/* Mock Document: Audit Dashboard */}
            <div className="col-span-2 bg-card border border-white/10 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-300 ml-2">Executive Overview</span>
                </div>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold border border-green-500/20">+24% Growth</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* KPI Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-background/50 rounded-lg p-4 border border-white/5 flex flex-col justify-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Leads</span>
                    <span className="text-2xl font-bold text-white"><AnimatedCounter value={1248} format={(v) => v.toLocaleString()} /></span>
                    <span className="text-xs text-green-400 mt-1 flex items-center">↑ 12% vs last month</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-white/5 flex flex-col justify-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Conversion Rate</span>
                    <span className="text-2xl font-bold text-primary"><AnimatedCounter value={4.2} duration={2.5} delay={0.2} format={(v) => v.toFixed(1) + "%"} /></span>
                    <span className="text-xs text-green-400 mt-1 flex items-center">↑ 0.8% vs last month</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-white/5 flex flex-col justify-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cost Per Lead</span>
                    <span className="text-2xl font-bold text-accent">$<AnimatedCounter value={42.50} duration={2} delay={0.4} format={(v) => v.toFixed(2)} /></span>
                    <span className="text-xs text-green-400 mt-1 flex items-center">↓ $5.20 vs last month</span>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="bg-background/50 rounded-lg p-4 border border-white/5 h-40 flex items-end justify-between px-8 py-4 relative group cursor-pointer overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   
                   {/* Simulated Bar Chart */}
                   <div className="w-8 bg-white/10 rounded-t-sm h-[30%] hover:bg-primary/50 transition-colors relative group-hover:h-[40%] duration-300"></div>
                   <div className="w-8 bg-white/10 rounded-t-sm h-[45%] hover:bg-primary/50 transition-colors relative group-hover:h-[55%] duration-300"></div>
                   <div className="w-8 bg-white/10 rounded-t-sm h-[25%] hover:bg-primary/50 transition-colors relative group-hover:h-[35%] duration-300"></div>
                   <div className="w-8 bg-white/20 rounded-t-sm h-[60%] hover:bg-primary/50 transition-colors relative group-hover:h-[70%] duration-300"></div>
                   <div className="w-8 bg-white/20 rounded-t-sm h-[80%] hover:bg-primary/50 transition-colors relative group-hover:h-[90%] duration-300"></div>
                   <div className="w-8 bg-primary/80 rounded-t-sm h-[100%] hover:bg-primary transition-colors relative shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
                   
                   {/* Chart Labels */}
                   <div className="absolute bottom-1 left-0 w-full flex justify-between px-8">
                     <span className="text-[10px] text-gray-600">Jan</span>
                     <span className="text-[10px] text-gray-600">Feb</span>
                     <span className="text-[10px] text-gray-600">Mar</span>
                     <span className="text-[10px] text-gray-600">Apr</span>
                     <span className="text-[10px] text-gray-600">May</span>
                     <span className="text-[10px] text-primary font-bold">Jun</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Mock Document: Strategy Roadmap */}
            <div className="bg-card border border-white/10 rounded-xl p-6 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                 <span className="text-sm font-bold text-accent uppercase tracking-wider">Strategy Map</span>
                 <Shield size={16} className="text-accent" />
              </div>
              
              {/* Timeline Steps */}
              <div className="space-y-5 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/10">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Phase 1: Foundation</h4>
                  <p className="text-xs text-gray-500">CRM Setup & Data Migration</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-white/20 flex items-center justify-center z-10">
                  </div>
                  <h4 className="text-sm font-bold text-gray-400 mb-1">Phase 2: Automation</h4>
                  <p className="text-xs text-gray-600">Lead Nurture Sequences</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-white/20 flex items-center justify-center z-10">
                  </div>
                  <h4 className="text-sm font-bold text-gray-400 mb-1">Phase 3: Scale</h4>
                  <p className="text-xs text-gray-600">Paid Traffic Integration</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                 <span className="text-xs text-gray-500">Q3 Roadmap</span>
                 <div className="flex -space-x-2">
                   <div className="w-6 h-6 rounded-full bg-primary/20 border border-card flex items-center justify-center text-[10px] text-primary">S</div>
                   <div className="w-6 h-6 rounded-full bg-accent/20 border border-card flex items-center justify-center text-[10px] text-accent">A</div>
                 </div>
              </div>
            </div>

            {/* Mock Document: Funnel Map */}
            <div className="bg-card border border-white/10 rounded-xl p-6 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
               <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                 <span className="text-sm font-bold text-primary uppercase tracking-wider">Funnel Architecture</span>
                 <ArrowRight size={16} className="text-primary" />
              </div>
              
              <div className="flex flex-col gap-3 flex-grow justify-center">
                {/* Traffic Source */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Target size={20} className="text-gray-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gray-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-gray-500">Ad Traffic</span>
                      <span className="text-[10px] text-gray-400 font-bold">8.5k</span>
                    </div>
                  </div>
                </div>

                {/* Capture */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-primary rounded-full"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-gray-500">Leads Captured</span>
                      <span className="text-[10px] text-primary font-bold">3.8k</span>
                    </div>
                  </div>
                </div>

                {/* Conversion */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Zap size={20} className="text-accent" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-accent rounded-full"></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-gray-500">Sales Closed</span>
                      <span className="text-[10px] text-accent font-bold">1.2k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Before / After Snapshot</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Column */}
          <div className="p-8 rounded-3xl bg-background/50 border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
            <h3 className="text-xl font-bold mb-8 text-red-400 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-sm">✕</span>
              Before Growth Engine
            </h3>
            <ul className="space-y-6">
              {[
                "Guessing",
                "Fragmented tools",
                "No data clarity",
                "Random marketing",
                "Revenue plateau"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-gray-400">
                  <span className="text-red-500/50 mt-1">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Column */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-primary/10 to-background border border-primary/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <h3 className="text-xl font-bold mb-8 text-primary flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">✓</span>
              After Growth Engine
            </h3>
            <ul className="space-y-6">
              {[
                "Clear growth map",
                "Coordinated channels",
                "Measured conversion flow",
                "Predictable pipeline",
                "Confident scaling"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-white">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoItIsFor = () => {
  const targets = [
    { title: "$500k–$10M businesses", icon: <Briefcase size={24} /> },
    { title: "Local service firms", icon: <Target size={24} /> },
    { title: "Founder-led companies", icon: <Users size={24} /> },
    { title: "Professional services", icon: <Shield size={24} /> },
    { title: "Businesses already spending on marketing but not seeing leverage", icon: <Zap size={24} />, fullWidth: true }
  ];

  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Who It’s For</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {targets.map((target, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all flex items-center gap-6 group ${target.fullWidth ? 'md:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary group-hover:text-accent group-hover:scale-110 transition-all shrink-0">
                {target.icon}
              </div>
              <h3 className="text-xl font-bold">{target.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Clear Next Step</h2>
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-xl text-gray-300">
            Stop guessing. Book a Growth Audit Strategy Call.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left space-y-4">
            <h4 className="font-bold text-white text-lg">What happens on this call:</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span>We review your current digital footprint and identify leaks.</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span>We map out a 90-day implementation plan.</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <CheckCircle className="text-primary shrink-0" size={20} />
                <span>You leave with clarity, whether you hire us or not.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Book Your Growth Audit Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="South Shore AI" className="h-8 mb-8 mx-auto opacity-50" />
        <p className="text-gray-600 text-sm mb-8">© {new Date().getFullYear()} South Shore AI. All rights reserved.</p>
        <div className="flex justify-center gap-8 text-gray-500 text-sm">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <ServiceHero />
      <StrategicShift />
      <SystemDiagram />
      <Timeline />
      <Deliverables />
      <BeforeAfter />
      <WhoItIsFor />
      <FinalCTA />
      <Footer />
    </div>
  );
}

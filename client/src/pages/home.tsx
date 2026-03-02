import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  Target, 
  Users, 
  Clock, 
  Filter,
  BarChart,
  Bot,
  Search,
  Workflow,
  Mic,
  Lightbulb,
  CheckCircle,
  MessageSquare,
  Menu,
  X,
  Shield,
  Briefcase,
  Globe,
  Star
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";
import headshot from "@assets/Gemini_Generated_Image_3r7rqo3r7rqo3r7r_(1)_1771842376088.png";
import heroVideo from "@assets/generated_videos/abstract_blue_and_teal_data_flows_for_ai_business_background.mp4";

// --- Components ---

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
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="South Shore AI" className="h-10 md:h-12" />
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors text-nowrap">Solution</Link>
          <Link href="/packages" className="text-sm font-medium hover:text-primary transition-colors text-nowrap">Packages</Link>
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
              className="bg-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20 text-sm text-nowrap shrink-0"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
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
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/70 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 z-20 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            AI Strategy for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">What’s Next.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Whether you are a complex organization seeking high-level AI advisory or a business looking to scale through automation, we provide the clarity and systems you need to lead your industry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/services" 
              className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/30 text-center"
            >
              Discover the Growth Engine
            </Link>
            <a 
              href="#strategy" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
            >
              Strategic Advisory Options
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TwoPillars = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Two Ways We Help You Lead</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/50 p-10 rounded-3xl border border-white/10 hover:border-accent/30 transition-all flex flex-col"
          >
            <h3 className="text-3xl font-bold mb-6 text-accent">The Growth Engine</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
              For Growth-Minded Businesses & SMBs. Our flagship productized solution. A complete analysis and optimization system designed to answer one question: "How do I get more customers?"
            </p>
            <a href="#growth-engine" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
              Explore the Growth Engine <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/50 p-10 rounded-3xl border border-white/10 hover:border-primary/30 transition-all flex flex-col"
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">Strategic Consulting & Advisory</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-grow">
              For Nonprofits, Complex Organizations, and Boards. We provide high-level AI roadmaps, digital transformation strategy, and executive advisory to help established organizations navigate the AI shift without the noise.
            </p>
            <a href="#strategy" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Learn More About Consulting <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StrategicAdvisory = () => {
  const points = [
    { title: "Institutional AI Roadmaps", desc: "Navigating the 'why' and 'how' of AI adoption." },
    { title: "Complex Org Solutions", desc: "Streamlining workflows in multi-stakeholder environments." },
    { title: "Advisory & Governance", desc: "Ensuring your AI implementation is ethical, secure, and strategic." },
  ];

  return (
    <section id="strategy" className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">High-Level Strategy for Complex Missions</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            AI isn’t just about marketing—it’s about operations, governance, and long-term viability. We work with CEOs, Boards, and Nonprofit leaders to integrate AI into the fabric of their organizations.
          </p>
          <div className="space-y-6 mb-10">
            {points.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary h-fit">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{p.title}</h4>
                  <p className="text-gray-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/blog" className="text-primary hover:text-white transition-colors underline underline-offset-4 font-medium">
            See our work with Nonprofits and Complex Organizations →
          </Link>
        </motion.div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
          <img src={headshot} alt="Strategy Advisory" className="relative rounded-3xl shadow-2xl border border-white/10 w-full" />
        </div>
      </div>
    </section>
  );
};

const GrowthEngine = () => {
  const areas = [
    { id: 1, name: "Searchability", icon: <Search size={20} /> },
    { id: 2, name: "Social Presence", icon: <Users size={20} /> },
    { id: 3, name: "SEO", icon: <Globe size={20} /> },
    { id: 4, name: "Website Quality", icon: <CheckCircle size={20} /> },
    { id: 5, name: "Audience Building", icon: <Filter size={20} /> },
    { id: 6, name: "Revenue Strategy", icon: <BarChart size={20} /> },
    { id: 7, name: "Marketing Strategy", icon: <Target size={20} /> }
  ];

  return (
    <section id="growth-engine" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Solution: The AI-Driven Growth Engine</h2>
        <p className="text-accent text-2xl font-bold mb-8 italic">Stop guessing. Start growing.</p>
        <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-16">
          For businesses ready to scale, we’ve productized our expertise into the Growth Engine. It’s a comprehensive approach that analyzes your entire digital presence and fixes the foundation first.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {areas.map((area, idx) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-background/80 border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3 hover:border-accent/50 transition-all group"
            >
              <div className="bg-accent/10 p-2 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                {area.icon}
              </div>
              <span className="font-bold">{area.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-24 container mx-auto px-4 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-0"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Tactics Without Strategy is the Noise Before Defeat"</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-xl leading-relaxed">
            Most agencies sell you "the latest thing." We believe in the Foundation First philosophy. Whether we are consulting for a global nonprofit or implementing the Growth Engine for a local business, we ensure your infrastructure is solid before you spend a dollar on traffic.
          </p>
        </div>
      </div>
    </section>
  );
};

const WhoWeHelp = () => {
  const segments = [
    { title: "Nonprofits & Complex Orgs", desc: "Modernizing mission-driven work through AI.", icon: <Shield size={24} /> },
    { title: "Professional Services", desc: "Establishing authority and streamlining acquisition.", icon: <Briefcase size={24} /> },
    { title: "E-commerce & Local Business", desc: "Dominating search and automating the sales floor.", icon: <Globe size={24} /> },
    { title: "Coaches, Authors, & Speakers", icon: <Mic size={24} />, desc: "Building platforms that scale your influence." },
  ];

  return (
    <section className="py-24 bg-secondary/10 border-y border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Specialized Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((seg, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all">
              <div className="text-primary mb-6">{seg.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{seg.title}</h3>
              <p className="text-gray-400">{seg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Deep Experience. Local Accountability.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Users size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">MIT-Trained Expertise</h3>
          <p className="text-gray-400">Scott’s background in AI & Digital Transformation from MIT ensures world-class strategy.</p>
        </div>
        <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Clock size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">20+ Years of Leadership</h3>
          <p className="text-gray-400">Former CEO experience means we understand your P&L, not just your "likes."</p>
        </div>
        <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Lightbulb size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Strategy-First</h3>
          <p className="text-gray-400">We don't just sell tools; we solve business problems.</p>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Results That Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-background border border-white/10 text-left">
            <div className="flex gap-1 mb-4 text-accent">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
            </div>
            <p className="text-gray-300 italic mb-6">"South Shore AI transformed our non-profit's operational efficiency. Their high-level advisory helped us navigate complex AI integration without the usual noise."</p>
            <p className="font-bold">Executive Director</p>
            <p className="text-sm text-gray-500">Regional Non-Profit Organization</p>
          </div>
          <div className="p-8 rounded-2xl bg-background border border-white/10 text-left">
            <div className="flex gap-1 mb-4 text-accent">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
            </div>
            <p className="text-gray-300 italic mb-6">"The Growth Engine is a game-changer. We finally have a predictable system for customer acquisition that actually works for a business of our scale."</p>
            <p className="font-bold">Business Owner</p>
            <p className="text-sm text-gray-500">SMB Growth Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Let’s Navigate the Future Together.</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Ready to audit your growth or discuss a high-level AI roadmap for your organization? Choose your path below.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Get a Free Growth Audit
          </a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:-translate-y-1"
          >
            Schedule a Strategy Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div className="col-span-1 md:col-span-1">
          <img src={logo} alt="South Shore AI" className="h-8 mb-6 opacity-80" />
          <p className="text-gray-500 leading-relaxed mb-6">
            Navigating Tomorrow with AI Today. High-level AI strategy and productized growth solutions for mission-driven organizations and businesses.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#strategy" className="hover:text-primary transition-colors">Strategic Advisory</a></li>
            <li><a href="#strategy" className="hover:text-primary transition-colors">Nonprofit AI Strategy</a></li>
            <li><a href="#growth-engine" className="hover:text-primary transition-colors">The Growth Engine</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Digital Transformation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 text-gray-500">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-gray-500">
            <li className="flex items-start gap-3">
              <div className="mt-1 text-accent"><Phone size={14} /></div>
              <a href="tel:6175450717" className="hover:text-primary transition-colors">(617) 545-0717</a>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 text-accent"><Target size={14} /></div>
              <span>Whitman, MA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} South Shore AI. All rights reserved.
      </div>
    </footer>
  );
};

const Chatbot = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer relative group">
        <MessageSquare size={28} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background"></span>
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl rounded-tr-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium pointer-events-none">
          Chat with our AI
        </div>
      </button>
    </div>
  );
};

const SubscriptionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenSubscriptionPopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && (data.event === 'formSubmit' || data.type === 'submit' || data.type === 'form-submit' || data.message === 'formSubmit')) {
          setSubscribed(true);
          setTimeout(() => {
            handleClose();
          }, 3000);
        }
      } catch (e) {
        // ignore JSON parse errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenSubscriptionPopup", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#1d293a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden shadow-primary/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all z-20"
            >
              <X size={20} />
            </button>
            
            <div className="p-2 sm:p-4 pt-10 text-center relative z-10 h-[520px] w-full flex flex-col justify-center items-center overflow-hidden">
              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank you for subscribing to our Newsletter!</h3>
                  <p className="text-gray-300">Welcome to South Shore AI</p>
                </motion.div>
              ) : (
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/q4Cy4rTD09A2MLJQpI4q"
                    style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                    id="inline-q4Cy4rTD09A2MLJQpI4q" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="showAfter"
                    data-trigger-value="3"
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="South Shore AI Newsletter Form"
                    data-height="undefined"
                    data-layout-iframe-id="inline-q4Cy4rTD09A2MLJQpI4q"
                    data-form-id="q4Cy4rTD09A2MLJQpI4q"
                    title="South Shore AI Newsletter Form"
                />
              )}
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-[80px]"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <TwoPillars />
      <GrowthEngine />
      <StrategicAdvisory />
      <Philosophy />
      <WhoWeHelp />
      <CaseStudies />
      <WhyUs />
      <CTA />
      <Footer />
      <SubscriptionPopup />
    </div>
  );
}

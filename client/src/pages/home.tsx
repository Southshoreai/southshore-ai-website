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
  X
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Main_Logo_(1)_(6)_1767385602023.png";
import headshot from "@assets/Scott_AI_Polo_Shirt_Professional_1767385616187.png";
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">How We Work</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="tel:6175450717" className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            <Phone size={18} />
            <span>(617) 545-0717</span>
          </a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20 text-sm"
          >
            Get Growth Audit
          </a>
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
              <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-lg font-medium">How We Work</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</a>
              <a href="tel:6175450717" className="flex items-center gap-2 text-primary font-semibold">
                <Phone size={18} />
                <span>(617) 545-0717</span>
              </a>
              <a 
                href="https://calendly.com/scottpralinsky/30-minute-meeting" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-accent text-center py-3 rounded-full font-bold text-white"
              >
                Get Growth Audit
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
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider mb-6 uppercase">
            Navigating Tomorrow with AI Today
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Help Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Grow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether that means fixing your foundation, building growth systems, or deploying intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://calendly.com/scottpralinsky/30-minute-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(237,137,54,0.3)] hover:shadow-[0_0_30px_rgba(237,137,54,0.5)] flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Get Free Growth Audit
            </a>
            <a 
              href="tel:6175450717"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Bot size={20} />
              Call AI Agent
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowRight className="rotate-90" size={24} />
      </div>
    </section>
  );
};

const PainPoints = () => {
  const pains = [
    { icon: <Target className="text-accent" size={32} />, title: "Poor Visibility", desc: "Your customers can't find you online, and you're invisible in your market." },
    { icon: <Filter className="text-accent" size={32} />, title: "Not Enough Leads", desc: "Your pipeline is unpredictable and you rely too heavily on referrals." },
    { icon: <Clock className="text-accent" size={32} />, title: "Drowning in Work", desc: "Manual tasks are eating up your time, preventing you from strategic growth." },
    { icon: <Users className="text-accent" size={32} />, title: "Low Conversion", desc: "Leads are coming in but falling through the cracks without follow-up." },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Which Sounds Like You?</h2>
          <p className="text-gray-400 text-lg">Identify the bottlenecks holding your business back.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background/50 p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-2 group"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoIntro = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video group cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors z-10">
          <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(79,209,197,0.4)] group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-background border-b-[10px] border-b-transparent ml-1"></div>
          </div>
        </div>
        <img 
          src={headshot} 
          alt="Scott Pralinsky Video Intro" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <span className="bg-black/60 backdrop-blur px-3 py-1 rounded text-sm font-medium">Meet Scott Pralinsky</span>
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const steps = [
    { num: "01", title: "Audit & Analyze", desc: "We deep dive into your current systems, identifying gaps and high-leverage opportunities." },
    { num: "02", title: "Strategy & Plan", desc: "We design a custom roadmap tailored to your specific growth goals and operational needs." },
    { num: "03", title: "Implement & Optimize", desc: "We build, deploy, and refine the systems, ensuring they deliver measurable ROI." },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-card to-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-400 text-lg">A simple, transparent process designed for results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-6xl font-black text-white/5 absolute top-4 right-4">{step.num}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      title: "Growth Engine Package", 
      desc: "Our flagship complete system: website overhaul, SEO, lead capture, automated follow-up, and ongoing support.",
      icon: <BarChart className="text-white" size={24} />,
      highlight: true 
    },
    { 
      title: "AI Integration", 
      desc: "Deploy intelligent chatbots and automation agents to handle customer service and sales 24/7.",
      icon: <Bot className="text-primary" size={24} />,
      highlight: false 
    },
    { 
      title: "SEO & Visibility", 
      desc: "Dominate search results and get found by the customers who are actively looking for you.",
      icon: <Search className="text-primary" size={24} />,
      highlight: false 
    },
    { 
      title: "Workflow Optimization", 
      desc: "Streamline your internal operations to save time, reduce errors, and increase profitability.",
      icon: <Workflow className="text-primary" size={24} />,
      highlight: false 
    },
    { 
      title: "AI Training & Speaking", 
      desc: "Expert-led workshops and keynotes to help your team understand and leverage AI tools.",
      icon: <Mic className="text-primary" size={24} />,
      highlight: false 
    },
    { 
      title: "Strategic Consulting", 
      desc: "High-level guidance on technology adoption, digital transformation, and business growth.",
      icon: <Lightbulb className="text-primary" size={24} />,
      highlight: false 
    },
  ];

  return (
    <section id="services" className="py-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 text-lg">Comprehensive solutions for modern business growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col ${service.highlight ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50 ring-1 ring-primary/30 transform md:-translate-y-4 shadow-xl shadow-primary/10" : "bg-card border-white/5 hover:border-white/20"}`}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.highlight ? "bg-accent text-white" : "bg-white/5 text-primary"}`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{service.desc}</p>
            <a href="#" className={`font-semibold flex items-center gap-2 ${service.highlight ? "text-accent" : "text-primary hover:text-white"} transition-colors`}>
              Learn more <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Quiz = () => {
  const [activeTab, setActiveTab] = useState(0);
  const questions = [
    { q: "What is your biggest challenge right now?", options: ["Getting Leads", "Converting Leads", "Too Much Manual Work", "Technology Confusion"] },
    { q: "How are you currently handling follow-ups?", options: ["Manually", "Basic Email Automation", "No Follow-up", "Inconsistent"] },
    { q: "What is your monthly revenue goal?", options: ["$10k - $50k", "$50k - $100k", "$100k - $500k", "$500k+"] },
  ];

  return (
    <section className="py-24 bg-secondary/20 border-y border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Self Assessment</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Find Your Growth Path</h2>
          
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium mb-6">{questions[activeTab].q}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[activeTab].options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveTab((prev) => (prev + 1) % questions.length)}
                  className="p-4 rounded-xl bg-background border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-left font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2">
            {questions.map((_, idx) => (
              <div key={idx} className={`h-2 rounded-full transition-all ${idx === activeTab ? "w-8 bg-accent" : "w-2 bg-white/20"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-30"></div>
          <img src={headshot} alt="Scott Pralinsky" className="relative rounded-2xl shadow-2xl border border-white/10 w-full max-w-md mx-auto" />
          <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl border border-white/10 shadow-xl hidden md:block">
            <p className="font-bold text-accent text-lg">20+ Years</p>
            <p className="text-sm text-gray-400">CEO Experience</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise You Can Trust</h2>
          <h3 className="text-xl text-primary font-medium mb-6">Scott Pralinsky — Founder & CEO</h3>
          
          <div className="space-y-4 mb-8 text-gray-300 leading-relaxed">
            <p>
              With a diverse background spanning military science, Wall Street engineering, and over two decades leading nonprofits as CEO, Scott brings a unique strategic perspective to business growth.
            </p>
            <p>
              MIT-trained in AI and Digital Transformation, he bridges the gap between complex technology and practical business application. Scott doesn't just talk about the future; he helps you build it.
            </p>
          </div>

          <ul className="space-y-3 mb-10">
            {[
              "MIT-Trained AI Consultant",
              "Instructor of Military Science & Technology",
              "Former Wall Street Software Engineer",
              "20+ Years Nonprofit CEO Experience"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline underline-offset-4">
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Scale?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Book your free Growth Audit today (valued at $497). We'll identify your gaps and map out a plan for growth.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
          >
            Book Free Audit
          </a>
          <a 
            href="tel:6175450717"
            className="w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-primary transition-colors text-lg font-medium"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Phone size={24} />
            </div>
            <span>Call AI Agent: (617) 545-0717</span>
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
            Navigating Tomorrow with AI Today. Helping businesses grow through intelligent automation and strategic marketing.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Growth Engine</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">AI Integration</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">SEO & Visibility</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 text-gray-500">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#process" className="hover:text-primary transition-colors">Our Process</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-gray-500">
            <li className="flex items-start gap-3">
              <div className="mt-1 text-accent"><Phone size={14} /></div>
              <span>(617) 545-0717</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 text-accent"><Calendar size={14} /></div>
              <a href="https://calendly.com/scottpralinsky/30-minute-meeting" className="hover:text-white transition-colors">Book a Meeting</a>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <VideoIntro />
      <HowWeWork />
      <Services />
      <Quiz />
      <About />
      <CTA />
      <Footer />
      <Chatbot />
    </div>
  );
}

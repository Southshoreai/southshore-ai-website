import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Calendar, 
  ArrowRight, 
  Shield, 
  Zap, 
  Star,
  Clock,
  ExternalLink,
  Menu,
  X,
  Target
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";

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
              className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg text-xs shrink-0 whitespace-nowrap"
            >
              Get Growth Audit
            </a>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <div className="p-1"><div className="w-6 h-0.5 bg-white mb-1.5"></div><div className="w-6 h-0.5 bg-white mb-1.5"></div><div className="w-6 h-0.5 bg-white"></div></div>}
        </button>
      </div>
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
        </div>
      )}
    </nav>
  );
};

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest mb-6 uppercase">
            LET'S DO THIS
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            See The AI We Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">For You.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Fill out the form below to claim your free Growth Audit (a $497 value). We'll show you a live demo of how an AI agent can start booking appointments for YOUR business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    challenge: "",
    message: ""
  });

  return (
    <section className="py-20 container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Left Column: Form */}
        <div className="bg-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center text-sm">1</span>
            Step 1: Tell Us About You
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">First Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Last Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email <span className="text-red-500">*</span></label>
                <input required type="email" className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Phone Number <span className="text-red-500">*</span></label>
                <input required type="tel" className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Company Name</label>
                <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Website URL</label>
                <input type="url" className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">What's Your Biggest Challenge? <span className="text-red-500">*</span></label>
              <select required className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none">
                <option value="">Select an option</option>
                <option value="leads">Getting More Leads</option>
                <option value="converting">Converting Leads to Customers</option>
                <option value="manual">Too Much Manual Work</option>
                <option value="tech">Technology Confusion</option>
                <option value="other">Something Else</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Anything else you want us to know? (Optional)</label>
              <textarea rows={4} className="w-full bg-background border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none"></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary/80 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3">
              Get My Free Audit <ArrowRight size={20} />
            </button>
            <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
              <Shield size={12} /> 🔒 Your info is safe. We hate spam as much as you do.
            </p>
          </form>
        </div>

        {/* Right Column: Calendar */}
        <div className="flex flex-col gap-12 hidden">
          <div className="bg-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl flex-grow">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="bg-accent/20 text-accent w-10 h-10 rounded-full flex items-center justify-center text-sm">2</span>
              Step 2: Pick a Time
            </h2>
            <p className="text-gray-400 mb-8">Skip the form? Book directly with Scott.</p>
            <div className="aspect-[4/5] md:aspect-auto md:h-[600px] w-full bg-background/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Embed Placeholder */}
               <div className="text-center p-8">
                 <Calendar size={64} className="text-primary/20 mx-auto mb-6" />
                 <p className="text-gray-500 font-medium">GoHighLevel Calendar Widget Embed</p>
                 <p className="text-xs text-gray-600 mt-2">Available times shown in visitor's timezone</p>
                 <a 
                   href="https://calendly.com/scottpralinsky/30-minute-meeting" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="mt-8 inline-flex items-center gap-2 text-primary font-bold hover:underline"
                 >
                   Open External Scheduler <ExternalLink size={16} />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AlternativeContact = () => {
  const cards = [
    { 
      title: "Call Us", 
      icon: <Phone size={32} />, 
      info: "(617) 545-0717", 
      desc: "Talk to our AI agent or leave a message. We call back fast.",
      link: "tel:+16175450717",
      cta: "Click to Call →"
    },
    { 
      title: "Email Us", 
      icon: <Mail size={32} />, 
      info: "info@southshore.ai", 
      desc: "For questions, partnerships, or just to say hi.",
      link: "mailto:info@southshore.ai",
      cta: "Send Email →"
    }
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Other Ways To Reach Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all flex flex-col items-center">
              <div className="text-primary mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-xl font-bold text-accent mb-4">{card.info}</p>
              <p className="text-gray-500 mb-8">{card.desc}</p>
              <a href={card.link} className="font-bold text-primary hover:text-white transition-colors">
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactFAQ = () => {
  const faqs = [
    { 
      q: "Is the Growth Audit really free?", 
      a: "100% free. No credit card. No obligation. We'll look at your business and show you exactly how AI can help. If it's not a fit, no hard feelings." 
    },
    { 
      q: "How fast will you respond?", 
      a: "Usually within a few hours. If you book a call, you'll get an instant confirmation. If you fill out the form, expect a personal response within 24 hours (usually much faster)." 
    },
    { 
      q: "What happens after I submit?", 
      a: "You'll get an email right away with next steps. Then we'll reach out to schedule your demo. Simple." 
    },
    { 
      q: "Can I just call instead?", 
      a: "Absolutely. Call (617) 545-0717 anytime. Our AI agent can help you 24/7, or leave a message and Scott will call you back personally." 
    }
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Before You Reach Out...</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl bg-background border border-white/5">
              <h4 className="text-xl font-bold mb-4 text-primary">{faq.q}</h4>
              <p className="text-gray-400 leading-relaxed text-lg">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Don't Wait. Your Competitors Aren't.</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Every day without an AI agent is another day of missed leads. Book your free audit now and see what you're leaving on the table.
        </p>
        <a 
          href="https://calendly.com/scottpralinsky/30-minute-meeting" 
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-block bg-accent hover:bg-orange-600 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all shadow-xl hover:-translate-y-1"
        >
          Claim My Spot Now →
        </a>
        <p className="mt-6 text-accent font-bold flex items-center justify-center gap-2">
          <Zap size={16} /> ⚡ Only 3 free audit spots available this week.
        </p>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const elements = [
    { icon: <Star className="text-accent" size={24} />, title: "MIT-Trained AI Expert" },
    { icon: <Clock className="text-primary" size={24} />, title: "20+ Years Business Experience" },
    { icon: <MapPin className="text-white" size={24} />, title: "Local South Shore Business" },
    { icon: <Shield className="text-accent" size={24} />, title: "Your Data Is Always Secure" }
  ];

  return (
    <section className="py-16 container mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-12">You're In Good Hands</h3>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {elements.map((el, i) => (
          <div key={i} className="flex items-center gap-3">
            {el.icon}
            <span className="font-bold text-gray-400">{el.title}</span>
          </div>
        ))}
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <AlternativeContact />
      <ContactFAQ />
      <FinalCTA />
      <TrustSection />
      <Footer />
    </div>
  );
}

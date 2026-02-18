import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Solution</Link>
          <Link href="/packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/team" className="text-sm font-medium hover:text-primary transition-colors">Team</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          <a href="tel:6175450717" className="flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-400 transition-colors">
            <Phone size={14} />
            (617) 545-0717
          </a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg text-sm"
          >
            Schedule a Call
          </a>
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
          <Link href="/team" onClick={() => setIsOpen(false)} className="text-lg font-medium">Team</Link>
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
                  <span>Intelligent triage of stakeholder inquiries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: <MessageSquare size={32} />,
      title: "Intelligent Voice AI",
      value: "The Conversational Interface",
      desc: "Static websites are becoming a thing of the past. Today’s users expect immediate interaction. Our Voice AI provides a sophisticated conversational layer to your digital presence, allowing users to speak naturally to your organization.",
      apps: [
        { type: "Business", use: "Convert browsers into booked appointments through a talking website." },
        { type: "Consulting", use: "Provide immediate answers to complex service questions without human intervention." },
        { type: "Nonprofits", use: "Offer a 24/7 information line for community members or volunteers." }
      ],
      features: ["Natural Language Processing (NLP)", "Trained on your knowledge base", "Direct calendar integration"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Instant Engagement Systems",
      value: "Automated Responsiveness",
      desc: "Responsiveness is the #1 factor in conversion and trust. If you can't answer the phone, our system ensures the conversation doesn't end there. By instantly shifting a missed voice call to a text-based engagement, you preserve the relationship.",
      apps: [
        { type: "Professional Services", use: "Ensure potential clients feel heard the moment they reach out." },
        { type: "Local Businesses", use: "Stop the 'calling the next guy' cycle with a 5-second text back." },
        { type: "Operations", use: "Reduce the 'phone tag' that eats up staff time every week." }
      ],
      features: ["Missed Call Text Back", "Automated SMS Triage", "Instant Lead Notifications"]
    },
    {
      icon: <Bot size={32} />,
      title: "The 24/7 Digital Concierge",
      value: "Nuanced AI Chatbots",
      desc: "A website shouldn't just be a brochure; it should be a functional member of your team. Our AI Chatbots are trained on your unique data, allowing them to provide nuanced, accurate support around the clock.",
      apps: [
        { type: "Complex Orgs", use: "Triage inquiries—answering simple stuff and escalating the complex." },
        { type: "E-Commerce", use: "Handle pricing, shipping, and product questions instantly." },
        { type: "Education", use: "Help users navigate resources or find specific documents within a large site." }
      ],
      features: ["Multi-page Knowledge Base", "Lead capture & qualification", "Seamless human hand-off"]
    }
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="space-y-32">
        {services.map((s, idx) => (
          <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-lg shadow-primary/5">
                {s.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{s.title}</h2>
              <p className="text-accent font-bold mb-6 text-lg uppercase tracking-wider">{s.value}</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">{s.desc}</p>
              
              <div className="space-y-8">
                <h4 className="font-bold text-white text-xl border-l-2 border-primary pl-4">How it Applies</h4>
                {s.apps.map((app, i) => (
                  <div key={i}>
                    <span className="font-bold text-primary">{app.type}: </span>
                    <span className="text-gray-400">{app.use}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`bg-card p-10 rounded-3xl border border-white/10 shadow-xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Zap size={20} className="text-accent" />
                Key Features
              </h4>
              <ul className="space-y-6">
                {s.features.map((f, i) => (
                  <li key={i} className="flex gap-4 text-gray-300">
                    <CheckCircle className="text-accent mt-1 shrink-0" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-sm text-gray-500 italic">Part of our "Foundation First" integration. Designed to scale your responsiveness without increasing headcount.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FoundationIntegration = () => {
  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Part of Your Strategic Foundation</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-xl leading-relaxed mb-12">
            These tools are not just "add-ons." They are core components of the South Shore AI Foundation. Whether we are implementing these as part of our Growth Engine for SMBs or as part of a Digital Transformation for a large nonprofit, the goal remains the same:
          </p>
          <div className="inline-block p-8 rounded-3xl bg-background border border-primary/20 shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold italic text-primary">
              "Build systems that work for you, so you don't have to work for your systems."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoThisIsFor = () => {
  const audiences = [
    { title: "For the Growth-Minded Business", desc: "Focus on ROI, lead conversion, and calendar density.", icon: <Target className="text-accent" size={24} /> },
    { title: "For the Complex Organization", desc: "Focus on operational efficiency, stakeholder satisfaction, and staff productivity.", icon: <Users className="text-primary" size={24} /> },
    { title: "For the Executive Leader", desc: "Focus on data-backed insights and a professionalized digital presence.", icon: <Shield className="text-white" size={24} /> }
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Flexible Solutions for Every Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {audiences.map((a, i) => (
          <div key={i} className="p-10 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all">
            <div className="mb-6">{a.icon}</div>
            <h3 className="text-xl font-bold mb-4">{a.title}</h3>
            <p className="text-gray-400 leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Is this just for marketing?", a: "No. While these tools are excellent for marketing, they are primarily efficiency tools. They are used by nonprofits to manage information, by consultants to triage leads, and by organizations to automate repetitive administrative tasks." },
    { q: "How long does implementation take?", a: "Most of our AI engagement tools can be deployed within 2-4 weeks, depending on the complexity of your knowledge base and the depth of integration required." },
    { q: "Do I need technical skills to manage this?", a: "Not at all. We build, train, and maintain the systems for you. You'll have access to a simple dashboard to see results and transcripts, but we handle the heavy lifting." }
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-2xl bg-background border border-white/5">
              <h4 className="text-xl font-bold mb-4 text-primary">{faq.q}</h4>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
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
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Professionalize Your Responsiveness?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Whether you need a full Growth Audit for your business or a high-level discussion on how AI can streamline your organization's communications, we're ready to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Get Your Free Growth Audit
          </a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:-translate-y-1"
          >
            Schedule a Strategy Call
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
      <ServicesGrid />
      <FoundationIntegration />
      <WhoThisIsFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

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
  Target
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";

// --- Components ---

const Navbar = () => {
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

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="/#strategy" className="text-sm font-medium hover:text-primary transition-colors">Strategy</a>
          <a href="/#growth-engine" className="text-sm font-medium hover:text-primary transition-colors">Growth Engine</a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg text-sm"
          >
            Schedule a Call
          </a>
        </div>
      </div>
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
            Never Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connection.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            Whether it’s a high-value sales lead or a critical stakeholder inquiry, timing is everything. Our AI-driven engagement tools ensure your organization is available 24/7, providing instant, intelligent responses that move the needle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StrategicShift = () => {
  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The High Cost of Silence</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                In today’s digital landscape, "available during business hours" is no longer enough. Every missed call, unread website inquiry, or delayed response represents a missed opportunity for growth or a lapse in service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                  <p className="font-bold text-accent mb-2">For Business</p>
                  <p className="text-sm">It’s a lost customer.</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                  <p className="font-bold text-primary mb-2">For Nonprofits</p>
                  <p className="text-sm">It’s a missed donor connection.</p>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                  <p className="font-bold text-white mb-2">For Complex Orgs</p>
                  <p className="text-sm">It’s an operational bottleneck.</p>
                </div>
              </div>
              <p className="pt-4">
                South Shore AI provides the technical infrastructure to ensure your organization never goes silent. We deploy "Lead Capture & Engagement" systems that act as a digital concierge—responding instantly, answering questions accurately, and triaging inquiries so your team can focus on high-level work.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20"></div>
            <div className="relative bg-background p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Foundation First</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span>24/7 Availability across Voice, SMS, and Web</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span>Instant response to missed calls</span>
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

import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Target, 
  Lightbulb, 
  Map, 
  CheckCircle, 
  Search, 
  Users, 
  Clock,
  ArrowRight
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";
import headshot from "@assets/Scott_AI_Polo_Shirt_Professional_1767385616187.png";

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

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Engagement</Link>
          <Link href="/packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg text-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent z-0 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Navigating Tomorrow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI Today.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            South Shore AI was founded to provide organizations with the strategic clarity and technical foundation they need to thrive in a rapidly evolving digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">We Build Digital Foundations.</h2>
        <p className="text-gray-300 text-xl leading-relaxed text-center">
          We aren't just an AI company; we are an organizational growth and efficiency firm. We help you identify the gaps in your current digital presence and fill them with intelligent systems. From high-level advisory for executive boards to productized growth systems for small businesses, we ensure your technology serves your mission—not the other way around.
        </p>
      </div>
    </section>
  );
};

const WhoWeHelp = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Specialized Support for Unique Goals.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="p-10 rounded-3xl bg-background border border-white/10 hover:border-primary/30 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
            <Shield size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-6">Complex Organizations & Nonprofits</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We assist leaders who need to modernize legacy systems, improve stakeholder engagement, and navigate AI governance without the noise.
          </p>
        </div>
        <div className="p-10 rounded-3xl bg-background border border-white/10 hover:border-accent/30 transition-all">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
            <Target size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-6">Professional Services & SMBs</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            We help business owners who have a solid service but lack the "Growth Engine" needed to capture and convert leads consistently.
          </p>
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const steps = [
    { title: "The Discovery", desc: "We begin by understanding your organizational objectives, pain points, and existing infrastructure." },
    { title: "The Roadmap", desc: "We provide a clear, jargon-free plan. Whether it's a bespoke consulting engagement or the implementation of our Growth Engine, you’ll know exactly what we are building and why." },
    { title: "The Implementation", desc: "We handle the heavy lifting. We integrate the tools, train the AI, and optimize the workflows." },
    { title: "The Optimization", desc: "We don't just 'set it and forget it.' We provide ongoing oversight to ensure your systems continue to perform as technology evolves." }
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">A Partnership Rooted in Clarity.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 rounded-2xl bg-background border border-white/5">
              <div className="text-primary font-black text-4xl mb-4 opacity-20">0{i+1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Why Leaders Choose Us.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
        <div>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Lightbulb size={32} />
          </div>
          <h4 className="text-2xl font-bold mb-4">Strategy Over Tactics</h4>
          <p className="text-gray-500">We don't sell "shiny objects." We sell solutions that improve your P&L or your mission impact.</p>
        </div>
        <div>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Map size={32} />
          </div>
          <h4 className="text-2xl font-bold mb-4">Local Accountability</h4>
          <p className="text-gray-500">We are based in Whitman, MA. Our clients are our neighbors, and we treat their organizations with the same care we give our own.</p>
        </div>
        <div>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-2xl font-bold mb-4">Institutional Quality</h4>
          <p className="text-gray-500">We bring MIT-level rigor and "big-firm" strategic thinking to organizations of all sizes.</p>
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20"></div>
            <img src={headshot} alt="Scott Pralinsky" className="relative rounded-3xl shadow-2xl border border-white/10 w-full" />
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
              <p className="font-bold text-accent text-xl">MIT Trained</p>
              <p className="text-gray-500 text-sm">AI & Digital Transformation</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Meet the Founder</h2>
            <h3 className="text-2xl text-primary font-bold mb-6">Scott Pralinsky — Founder & Principal Strategist</h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Scott brings over 20 years of executive leadership to South Shore AI. As a former CEO of a complex nonprofit, he understands the challenges of leading an organization through periods of rapid change.
              </p>
              <p>
                After completing specialized programs in AI and Digital Transformation at MIT, Scott realized that many organizations were being left behind by the AI shift. He founded South Shore AI to provide the "Executive Layer" of AI implementation—combining deep operational knowledge with cutting-edge technical strategy.
              </p>
              <p>
                Today, Scott works directly with every client, ensuring that every project is grounded in sound business logic and a "Foundation First" philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Align Your Strategy?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Let’s discuss your organization’s future. Choose the path that fits your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Schedule a Strategy Consultation
          </a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Book a Growth Engine Audit
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
          <a href="/services" className="hover:text-primary transition-colors">Services</a>
          <a href="/packages" className="hover:text-primary transition-colors">Packages</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <AboutHero />
      <WhatWeDo />
      <WhoWeHelp />
      <HowWeWork />
      <WhyUs />
      <Leadership />
      <FinalCTA />
      <Footer />
    </div>
  );
}

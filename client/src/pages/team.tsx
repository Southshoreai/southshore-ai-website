import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Menu, 
  X,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";
import team1 from "@assets/WhatsApp_Image_2026-02-12_at_5.33.40_PM_1770978022473.jpeg";
import team2 from "@assets/4_1770978022474.png";
import team3 from "@assets/6_1770978022475.png";

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
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="South Shore AI" className="h-10 md:h-12" />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Engagement</Link>
          <Link href="/packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/team" className="text-sm font-medium hover:text-primary transition-colors">Team</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          <a href="tel:6175450717" className="flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-400 transition-colors">
            <Phone size={14} />
            (617) 545-0717
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

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
        </div>
      )}
    </nav>
  );
};

const TeamHero = () => {
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Expert Team.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Combining deep business leadership with world-class AI technical expertise to build your digital future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const TeamGrid = () => {
  const team = [
    {
      name: "Arvin",
      title: "Technical Lead",
      desc: "Specializing in custom AI integrations and workflow automation systems.",
      image: team2
    },
    {
      name: "Scott Pralinsky",
      title: "Founder & Principal Strategist",
      desc: "MIT-trained AI expert with over 20 years of executive leadership experience.",
      image: team1
    },
    {
      name: "Marcus Chen",
      title: "Growth Architect",
      desc: "Expert in digital visibility, searchability, and revenue optimization systems.",
      image: team3
    }
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-3xl border border-white/10 group-hover:border-primary/50 transition-all">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">{member.title}</p>
            <p className="text-gray-400 leading-relaxed">{member.desc}</p>
          </motion.div>
        ))}
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
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
          <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <TeamHero />
      <TeamGrid />
      <Footer />
    </div>
  );
}

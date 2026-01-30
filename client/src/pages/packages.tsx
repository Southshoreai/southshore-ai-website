import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Target, 
  Shield, 
  Zap, 
  BarChart, 
  Search, 
  Globe, 
  Filter,
  Star,
  MessageSquare,
  Clock,
  Briefcase,
  Bot,
  Workflow
} from "lucide-react";

import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";

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
          <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</a>
          <a 
            href="https://calendly.com/scottpralinsky/30-minute-meeting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg text-sm"
          >
            Discovery Call
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
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
            Solutions Scaled to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Your Ambition.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            We provide the technical foundation and strategic clarity needed to lead in the AI era. Whether you are looking for a productized growth system or a deep-dive organizational transformation, we have an engagement model designed for your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const rows = [
    { feature: "Best For", engine: "SMBs, Local Services, Coaches", advisory: "Nonprofits, Boards, Complex Orgs" },
    { feature: "Primary Goal", engine: "Lead Gen & Customer Acquisition", advisory: "Efficiency, Governance & Transformation" },
    { feature: "Format", engine: "Productized Implementation", advisory: "Bespoke Consulting & Roadmaps" },
    { feature: "Tech Focus", engine: "Foundation, SEO, Lead Capture", advisory: "Custom Integration & Infrastructure" },
    { feature: "Duration", engine: "Ongoing Monthly Partnership", advisory: "Project-based or Retainer" },
    { feature: "Investment", engine: "Fixed Monthly Subscription", advisory: "Custom Quote based on Scope" },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Which Path is Right for You?</h2>
      <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="p-6 md:p-8 text-xl font-bold border-b border-white/10">Feature</th>
                <th className="p-6 md:p-8 text-xl font-bold border-b border-white/10 text-primary">The Growth Engine</th>
                <th className="p-6 md:p-8 text-xl font-bold border-b border-white/10 text-accent">Strategic Advisory</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 md:p-8 font-bold text-gray-400 border-b border-white/5">{row.feature}</td>
                  <td className="p-6 md:p-8 border-b border-white/5">{row.engine}</td>
                  <td className="p-6 md:p-8 border-b border-white/5">{row.advisory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const PackagesGrid = () => {
  return (
    <section id="packages" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 space-y-24">
        {/* Tier 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Tier 1</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Growth Engine</h2>
            <p className="text-2xl text-accent font-bold mb-6 italic">Our "Done-With-You" System for Consistent Growth.</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The Growth Engine is designed for the business owner who is tired of random marketing tactics. This is a streamlined, productized service that focuses on the seven pillars of digital visibility.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { title: "The Foundation Audit", desc: "Deep-dive analysis of your current searchability and SEO." },
                { title: "Active Optimization", desc: "Monthly updates to your website, Google profile, and social strategy." },
                { title: "Lead Capture Suite", desc: "Deployment of Voice AI, Missed Call Text Back, and 24/7 Chatbots." },
                { title: "Performance Reporting", desc: "Monthly data showing exactly how many appointments were booked." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-3xl bg-background border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Investment</p>
                <p className="text-3xl font-bold">Starting at <span className="text-primary">$297</span><span className="text-sm text-gray-500">/mo</span></p>
                <p className="text-xs text-gray-600 mt-1">plus setup fee</p>
              </div>
              <a href="https://calendly.com/scottpralinsky/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap">
                Get Your Free Growth Audit
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative p-10 rounded-3xl border border-white/10 bg-background shadow-2xl">
              <h4 className="text-xl font-bold mb-8">Included Pillars</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Searchability", "Social Presence", "SEO", "Website Quality", "Audience Building", "Revenue Strategy", "Marketing Strategy"].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-primary font-black">{i+1}</span>
                    <span className="text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex-row-reverse">
          <div className="lg:order-2">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Tier 2</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Systems Integration & Custom Automation</h2>
            <p className="text-2xl text-white font-bold mb-6 italic">Bridge the Gap Between Your Tools and Your Talent.</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Ideal for professional service firms and growing teams who need their tech stack to talk to each other. We don't just give you a tool; we build a workflow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {[
                { title: "CRM Migration & Cleanup", desc: "Organizing your data so it’s actually usable.", icon: <Users size={24} /> },
                { title: "Workflow Automation", desc: "Using AI to handle repetitive back-office tasks.", icon: <Zap size={24} /> },
                { title: "Custom GPTs & Training", desc: "Building internal AI tools trained on your company data.", icon: <Bot size={24} /> }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background border border-white/5">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-3xl bg-background border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Investment</p>
                <p className="text-3xl font-bold text-accent">Project-based</p>
              </div>
              <a href="https://calendly.com/scottpralinsky/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap">
                Schedule Discovery Call
              </a>
            </div>
          </div>
          <div className="lg:order-1 relative group">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative p-10 rounded-3xl border border-white/10 bg-background shadow-2xl h-full flex flex-col justify-center">
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Workflow size={24} />
                  </div>
                  <p className="text-gray-300">"We don't just give you a tool; we build a workflow."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-white font-bold uppercase tracking-widest text-sm mb-4 block">Tier 3</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Strategic Advisory & Digital Transformation</h2>
            <p className="text-2xl text-primary font-bold mb-6 italic">High-Level Partnership for Complex Missions.</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              This is our highest level of engagement, led personally by Scott. We work with Executive Teams and Boards of Directors to navigate the structural shifts caused by AI. This isn't about "getting more clicks"—it's about the long-term viability and efficiency of your organization.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { title: "Institutional AI Roadmaps", desc: "A 2-year strategy for organization-wide AI adoption." },
                { title: "Nonprofit Capacity Building", desc: "Automating donor relations and program delivery at scale." },
                { title: "Governance & Ethics Advisory", desc: "Developing internal policies for safe and effective AI use." },
                { title: "Fractional AI Leadership", desc: "Ongoing strategic oversight for your executive team." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-3xl bg-background border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Investment</p>
                <p className="text-3xl font-bold">Bespoke / Retainer</p>
              </div>
              <a href="https://calendly.com/scottpralinsky/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap">
                Request a Private Briefing
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative p-10 rounded-3xl border border-white/10 bg-background shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                 <Shield size={64} className="text-primary opacity-10" />
               </div>
               <h4 className="text-xl font-bold mb-8 italic">Led Personally by Scott</h4>
               <p className="text-gray-400 leading-relaxed">
                 Leverage over 20 years of CEO leadership and MIT-trained AI expertise to guide your organization through the most significant technological shift of our time.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Professionalism First.</h2>
        <p className="text-gray-400 text-xl max-w-4xl mx-auto mb-16">
          We believe in "no surprises" communication. Whether you are on a $297/mo Growth Engine plan or a $10,000 consulting project, you get:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="text-primary mb-6 flex justify-center"><Users size={48} /></div>
            <h4 className="text-2xl font-bold mb-4">Direct Access</h4>
            <p className="text-gray-500">No junior account managers. You work directly with experts who understand your business.</p>
          </div>
          <div>
            <div className="text-primary mb-6 flex justify-center"><Target size={48} /></div>
            <h4 className="text-2xl font-bold mb-4">Local Accountability</h4>
            <p className="text-gray-500">Based in Whitman, MA, we value our reputation in this community above all else.</p>
          </div>
          <div>
            <div className="text-primary mb-6 flex justify-center"><BarChart size={48} /></div>
            <h4 className="text-2xl font-bold mb-4">Clear ROIs</h4>
            <p className="text-gray-500">We define success metrics before we start, ensuring you always know your return on investment.</p>
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
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Not Sure Where to Start?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Let’s have a 15-minute conversation to identify which path makes the most sense for your current stage of growth. No pressure—just professional alignment.
        </p>
        <a 
          href="https://calendly.com/scottpralinsky/30-minute-meeting" 
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-block bg-accent hover:bg-orange-600 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all shadow-xl hover:-translate-y-1"
        >
          Book a Discovery Call
        </a>
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
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <ComparisonTable />
      <PackagesGrid />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </div>
  );
}

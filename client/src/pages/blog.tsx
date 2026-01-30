import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Mail, 
  Star,
  Search,
  Users,
  Globe,
  Zap,
  Phone,
  Target,
  MessageSquare,
  BarChart,
  Shield
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

        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
          <a href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <div className="flex items-center gap-4 ml-4">
            <a href="tel:6175450717" className="text-primary font-bold text-sm">(617) 545-0717</a>
            <a 
              href="https://calendly.com/scottpralinsky/30-minute-meeting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg text-xs"
            >
              Get Growth Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest mb-6 uppercase">
            FREE TIPS. ZERO FLUFF.
          </span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            AI Tips That Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Make You Money.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Quick reads. Real advice. No tech jargon. Just stuff you can use today to grow your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StickySubscribe = () => {
  return (
    <div className="sticky top-[80px] z-40 w-full bg-accent py-3 shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-white font-bold flex items-center gap-2">
          <Mail size={18} /> Want tips sent to your inbox? Subscribe Here →
        </p>
        <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-4 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 w-full md:w-64 text-sm"
          />
          <button className="bg-white text-accent px-6 py-1.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

const FeaturedArticle = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="bg-card rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-2xl">
        <div className="lg:w-1/2 aspect-video lg:aspect-auto relative bg-secondary/20">
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Star size={12} fill="currentColor" /> FEATURED
            </span>
          </div>
          <div className="w-full h-full flex items-center justify-center text-primary/20">
             <MessageSquare size={120} />
          </div>
        </div>
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
            <span className="flex items-center gap-1"><Calendar size={14} /> January 5, 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Is Your Website Leaking Money? Here's How To Plug The Hole.</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            95% of website visitors leave without doing anything. That's a lot of lost cash. Here's exactly how an AI chatbot can turn those ghosts into paying customers...
          </p>
          <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Read Full Article <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ArticleGrid = () => {
  const articles = [
    {
      title: "5 AI Tools That Will Double Your Leads (Without Ads)",
      excerpt: "Stop throwing money at Facebook. These five free AI tools can start generating leads for your small business on autopilot...",
      date: "January 3, 2026",
      readTime: "4 min read",
      icon: <Zap size={40} className="text-primary/40" />
    },
    {
      title: "SEO for Small Businesses in Massachusetts: A 15-Minute Guide",
      excerpt: "Think SEO is complicated? It's not. Follow these three dead-simple steps to get your local business showing up on Google...",
      date: "December 28, 2025",
      readTime: "6 min read",
      icon: <Globe size={40} className="text-primary/40" />
    },
    {
      title: "Why Your Competitors Are Stealing Your Customers (And How To Stop Them)",
      excerpt: "They're not smarter than you. They're just faster at following up. Here's the automation secret they don't want you to know...",
      date: "December 20, 2025",
      readTime: "5 min read",
      icon: <Target size={40} className="text-primary/40" />
    },
    {
      title: "The $500/Month Employee That Never Sleeps",
      excerpt: "What if you could hire someone who works 24/7, never calls in sick, and costs less than your phone bill? You can. Here's how...",
      date: "December 15, 2025",
      readTime: "4 min read",
      icon: <Users size={40} className="text-primary/40" />
    },
    {
      title: "How One Coffee Shop Went From 2 Leads to 10 Per Week",
      excerpt: "A South Shore case study. See exactly what we did and the results they got in just 30 days...",
      date: "December 10, 2025",
      readTime: "7 min read",
      icon: <BarChart size={40} className="text-primary/40" />
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="space-y-12">
            {articles.map((article, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 group"
              >
                <div className="md:w-1/3 aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-white/10">
                  {article.icon}
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{article.excerpt}</p>
                  <a href="#" className="text-primary font-bold flex items-center gap-2 text-sm">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="lg:w-1/3">
          <div className="bg-card p-8 rounded-3xl border border-white/10 sticky top-[160px]">
            <h3 className="text-xl font-bold mb-8">Browse By Topic</h3>
            <div className="space-y-4">
              {[
                { name: "AI for Business", count: 8 },
                { name: "Lead Generation", count: 5 },
                { name: "SEO Tips", count: 4 },
                { name: "Case Studies", count: 3 },
                { name: "Automation", count: 6 }
              ].map((cat, i) => (
                <a key={i} href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group">
                  <span className="font-medium group-hover:text-primary transition-colors">{cat.name}</span>
                  <span className="text-gray-500 text-sm bg-white/5 px-2 py-0.5 rounded-lg">{cat.count}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold mb-4">Want help on autopilot?</h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">Book a free Growth Audit and we'll show you how our AI can do this for YOUR business.</p>
              <a 
                href="https://calendly.com/scottpralinsky/30-minute-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/80 text-white w-full py-3 rounded-xl font-bold text-sm block text-center"
              >
                Book My Free Audit →
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-card border-y border-white/10">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Smarter Every Week</h2>
        <p className="text-gray-400 text-xl mb-10">
          One email. One tip. Every Tuesday. No spam, no fluff—just one actionable idea to grow your business with AI.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-grow bg-background border border-white/10 px-6 py-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20">
            Subscribe
          </button>
        </form>
        <p className="text-gray-600 text-xs flex items-center justify-center gap-2">
          <Shield size={12} /> 🔒 We hate spam too. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div>
          <img src={logo} alt="South Shore AI" className="h-8 mb-6 opacity-80" />
          <p className="text-gray-500 leading-relaxed mb-6">
            Navigating Tomorrow with AI Today. High-level AI strategy and productized growth solutions.
          </p>
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
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Our Process</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-gray-500">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-accent" /> (617) 545-0717
            </li>
            <li className="flex items-center gap-3">
              <Calendar size={14} className="text-accent" /> Whitman, MA
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        &copy; 2026 South Shore AI. All rights reserved.
      </div>
    </footer>
  );
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <BlogHero />
      <StickySubscribe />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

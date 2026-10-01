import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { Menu, X, Shield, Calendar, Users, Eye, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/togetha', label: 'The Platform' },
    { href: '/togetha/member-experience', label: 'Members' },
    { href: '/togetha/supporters', label: 'Supporters' },
    { href: '/providers', label: 'Providers' },
    { href: '/partners/coaches', label: 'Dating Coaches' },
    { href: '/founding-partners', label: 'Founding Partners' },
    { href: '/safety-and-trust', label: 'Safety & Trust' },
    { href: '/views', label: 'System Views' },
    { href: '/about', label: 'About SSAI' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-white/10">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-[#6F47C6]/30 via-[#0D9488]/30 to-[#F97316]/20 border-b border-white/5 py-1.5 px-4 text-xs text-center text-slate-300">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-togetha-purpleLight" />
          <span>Working version preparing for supervised volunteer testing in Massachusetts</span>
          <span className="hidden md:inline text-slate-500">·</span>
          <Link href="/founding-partners" className="hidden md:inline underline hover:text-white transition-colors">
            Founding Partner opportunities open
          </Link>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand lockup */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-togetha-purple flex items-center justify-center p-0.5 shadow-lg group-hover:scale-105 transition-transform">
                <img 
                  src="/assets/togetha_symbol_only_light.png" 
                  alt="Togetha Mark" 
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={(e) => {
                    // Fallback to text icon if image loading fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                  South Shore AI
                  <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-brand-slate text-brand-tealLight border border-brand-teal/30">
                    Flagship
                  </span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Togetha · Supported Connection
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/views"
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-brand-card hover:bg-brand-slate text-slate-200 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-brand-tealLight" />
              <span>Explore Views</span>
            </Link>

            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-brand-orange to-brand-orangeHover hover:brightness-110 text-white shadow-lg glow-orange transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Walkthrough</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-orange text-white"
            >
              Book Demo
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#0A0E1A] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                location === link.href
                  ? 'text-white bg-brand-teal/20 text-brand-tealLight'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/views"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-brand-card text-white font-medium border border-white/10"
            >
              Explore 5 System Views
            </Link>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg bg-brand-orange text-white font-semibold shadow glow-orange"
            >
              Book 30-Min Walkthrough
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

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
    <header className="site-header sticky top-0 z-50 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-brand-teal/25">
      {/* Top micro banner */}
      <div className="site-status-banner bg-gradient-to-r from-togetha-purple/35 via-brand-teal/30 to-brand-orange/25 border-b border-white/10 py-1 px-3 sm:py-1.5 sm:px-4 text-[11px] sm:text-xs leading-snug text-center text-slate-100">
        <span className="inline-flex items-center justify-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-togetha-purpleLight" />
          <span>Working version preparing for supervised volunteer testing in Massachusetts</span>
          <span className="hidden md:inline text-slate-500">·</span>
          <Link href="/founding-partners" className="hidden md:inline underline hover:text-white transition-colors">
            Founding Partner opportunities open
          </Link>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Brand lockup */}
          <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 group">
            <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-br from-brand-teal to-togetha-purple flex items-center justify-center p-0.5 shadow-lg group-hover:scale-105 transition-transform">
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
              <div className="min-w-0 flex flex-col">
                <span className="whitespace-nowrap text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                  <span>South Shore AI</span>
                  <span className="hidden md:inline-flex text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-brand-slate text-brand-tealLight border border-brand-teal/30">
                    Flagship
                  </span>
                </span>
                <span className="hidden sm:block text-xs text-slate-400 font-medium">
                  Togetha · Supported Connection
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden 2xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                    ? 'text-white bg-togetha-purple border border-togetha-purpleLight/50 font-semibold shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/resources/"
              className="px-3 py-1.5 text-sm font-medium rounded-lg text-brand-tealLight hover:text-white hover:bg-brand-teal/10 transition-colors"
            >
              Resources
            </a>
          </nav>

          {/* Primary CTA */}
          <div className="hidden 2xl:flex items-center gap-3">
            <Link
              href="/views"
              className="brand-button-secondary px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-brand-tealLight" />
              <span>Explore Views</span>
            </Link>

            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-connect px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Walkthrough</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="2xl:hidden flex shrink-0 items-center gap-2">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-connect hidden sm:inline-flex px-3 py-1.5 text-xs font-semibold rounded-lg"
            >
              Book Demo
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="brand-icon-button p-2.5 rounded-lg"
              aria-label="Toggle Navigation"
              aria-expanded={isOpen}
              aria-controls="site-navigation-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div id="site-navigation-menu" className="site-nav-menu 2xl:hidden border-t border-white/10 bg-[#0A0E1A] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="pt-1 pb-2">
            <p className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">Explore Togetha</p>
            <div className="space-y-1 mt-1">
              <Link href="/togetha" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/togetha' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>The Platform</Link>
              <Link href="/togetha/member-experience" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/togetha/member-experience' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Members</Link>
              <Link href="/togetha/supporters" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/togetha/supporters' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Supporters</Link>
              <Link href="/providers" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/providers' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Providers</Link>
              <Link href="/partners/coaches" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/partners/coaches' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Dating Coaches</Link>
              <Link href="/founding-partners" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/founding-partners' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Founding Partners</Link>
              <Link href="/safety-and-trust" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/safety-and-trust' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Safety &amp; Trust</Link>
            </div>
          </div>

          <div className="pt-2 pb-2 border-t border-white/10">
            <p className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-brand-tealLight">Knowledge &amp; Tools</p>
            <div className="space-y-1 mt-1">
              <a
                href="/resources/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg text-brand-tealLight hover:bg-brand-teal/10 hover:text-white transition-colors"
              >
                <span>Resources Hub</span>
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-brand-teal/20 text-brand-tealLight border border-brand-teal/30">Free</span>
              </a>
              <a
                href="/resources/muse/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                Everyday Muse Starter Guide
              </a>
              <Link href="/field-notes" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location === '/field-notes' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Founder’s Field Notes</Link>
            </div>
          </div>

          <div className="pt-2 pb-2 border-t border-white/10">
            <p className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">About &amp; Credentials</p>
            <div className="space-y-1 mt-1">
              <Link href="/about" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location === '/about' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>About SSAI</Link>
              <Link href="/coalition" onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location === '/coalition' ? 'text-white bg-togetha-purple border border-togetha-purpleLight/45' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>Coalition Model</Link>
              <Link
                href="/connect"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
              >
                <span>Profile, Projects &amp; Résumé</span>
                <span className="text-xs text-slate-400">Founder profile →</span>
              </Link>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/views"
              onClick={() => setIsOpen(false)}
              className="brand-button-secondary w-full text-center py-2.5 rounded-lg font-medium"
            >
              Explore 5 System Views
            </Link>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-connect w-full text-center py-2.5 rounded-lg font-semibold"
            >
              Book 30-Min Walkthrough
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

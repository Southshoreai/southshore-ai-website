import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/togetha', label: 'Togetha' },
  { href: '/about', label: 'About' },
  { href: '/resources/', label: 'Resources', external: true },
  { href: '/connect', label: 'Contact' },
];

const isProjectLocation = (location: string) => (
  location.startsWith('/togetha') ||
  ['/providers', '/partners/coaches', '/founding-partners', '/safety-and-trust', '/views'].includes(location)
);

export const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) => {
    const active = href === '/togetha' ? isProjectLocation(location) : location === href;
    return `rounded-md px-3 py-2 text-sm font-semibold transition ${
      active
        ? 'bg-[#eaf9fc] text-[#136975]'
        : 'text-[#565f61] hover:bg-[#f2f5f6] hover:text-[#272d2e]'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d0d8db] bg-white/95 backdrop-blur-lg">
      <div aria-hidden="true" className="h-[3px] bg-[linear-gradient(90deg,#d85b18_0%,#ef9f20_25%,#1ca879_53%,#168ba6_100%)]" />
      <div className="mx-auto flex h-[4.875rem] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex min-w-0 items-center" aria-label="South Shore AI home">
          <img
            src="/assets/ssai-brand/ssai-lockup-no-tagline.svg"
            alt="South Shore AI"
            className="hidden h-9 w-[205px] object-contain object-left sm:block"
          />
          <img src="/resources/assets/ssai-mark.svg" alt="" className="h-9 w-9 sm:hidden" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            link.external ? (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>{link.label}</Link>
            )
          ))}
        </nav>

        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <Link href="/max" className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-extrabold text-[#136975] transition hover:bg-[#eaf9fc]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />Talk with Max
            </Link>
            <Link href="/connect" className="ssai-button px-4 py-2.5 text-sm">
              <span>Talk to Scott</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-[#b8c1c4] text-[#136975] transition hover:border-[#136975] hover:bg-[#eaf9fc] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-[#d0d8db] bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              link.external ? (
                <a key={link.href} href={link.href} className={`${linkClass(link.href)} px-4 py-3 text-base`}>{link.label}</a>
              ) : (
                <Link key={link.href} href={link.href} className={`${linkClass(link.href)} px-4 py-3 text-base`} onClick={() => setIsOpen(false)}>{link.label}</Link>
              )
            ))}
            <Link href="/max" className="mt-2 flex items-center gap-2 rounded-md px-4 py-3 text-base font-extrabold text-[#136975] transition hover:bg-[#eaf9fc]" onClick={() => setIsOpen(false)}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />Talk with Max
            </Link>
            <Link href="/connect" className="ssai-button mt-3" onClick={() => setIsOpen(false)}>
              Talk to Scott
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

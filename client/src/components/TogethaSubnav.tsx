import React from 'react';
import { Link, useLocation } from 'wouter';

const projectLinks = [
  { href: '/togetha', label: 'Overview' },
  { href: '/togetha/member-experience', label: 'Members' },
  { href: '/togetha/supporters', label: 'Supporters' },
  { href: '/providers', label: 'Providers' },
  { href: '/partners/coaches', label: 'Coaches' },
  { href: '/safety-and-trust', label: 'Safety & privacy' },
  { href: '/views', label: 'System views' },
];

export const TogethaSubnav: React.FC = () => {
  const [location] = useLocation();

  return (
    <aside className="project-subnav" aria-label="Togetha project navigation">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-10">
        <span className="shrink-0 pr-1 text-xs font-extrabold uppercase tracking-[0.13em] text-[#6946ad]">Togetha</span>
        {projectLinks.map((link) => (
          <Link key={link.href} href={link.href} aria-current={location === link.href ? 'page' : undefined}>
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

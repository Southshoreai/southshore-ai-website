import React from 'react';
import { Link } from 'wouter';
import { MaxConversation } from '@/components/MaxConversation';

export const Max: React.FC = () => (
  <div className="max-page-shell">
    <header className="max-page-header">
      <Link href="/" className="max-page-brand" aria-label="South Shore AI home">
        <img src="/assets/ssai-brand/ssai-lockup-no-tagline.svg" alt="South Shore AI" />
      </Link>
      <Link href="/connect" className="max-page-header-link">Talk to Scott</Link>
    </header>

    <section className="max-page-main" aria-label="Talk with Max">
      <MaxConversation variant="page" />
    </section>

    <footer className="max-page-footer">
      <span>South Shore AI</span>
      <nav aria-label="Max footer navigation">
        <Link href="/max/privacy">Privacy</Link>
        <Link href="/connect">Talk to Scott</Link>
      </nav>
    </footer>
  </div>
);

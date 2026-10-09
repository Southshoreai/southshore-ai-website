import React from 'react';
import { Link } from 'wouter';

export const MaxPrivacy: React.FC = () => (
  <div className="max-page-shell">
    <header className="max-page-header">
      <Link href="/" className="max-page-brand" aria-label="South Shore AI home">
        <img src="/assets/ssai-brand/ssai-lockup-no-tagline.svg" alt="South Shore AI" />
      </Link>
      <Link href="/connect" className="max-page-header-link">Talk to Scott</Link>
    </header>

    <section className="max-privacy-main" aria-label="Max privacy information">
      <p className="max-identity">Max</p>
      <h1>Privacy for Max</h1>
      <p className="max-privacy-lede">Please leave out private or sensitive information when exploring an idea with Max.</p>

      <section>
        <h2>This working preview</h2>
        <p>Messages and idea-summary corrections in this preview stay in this browser’s session storage. They are not sent to South Shore AI through the preview, and you can remove them with <strong>Start over</strong>.</p>
      </section>

      <section>
        <h2>When the idea-brief step is available</h2>
        <p>South Shore AI will ask only for the information needed to create and deliver a requested idea brief. Name and email will be required; company, role, phone number, and permissions for Scott to follow up or send marketing will remain optional and separate.</p>
      </section>

      <section>
        <h2>Do not share</h2>
        <p>Do not enter passwords, financial account information, Social Security numbers, detailed medical information, confidential client records, or anything else that should stay private.</p>
      </section>

      <section>
        <h2>Questions or deletion requests</h2>
        <p>Contact <a href="mailto:info@southshore.ai">info@southshore.ai</a>. The full Max service will publish complete retention and deletion details before public launch.</p>
      </section>
    </section>

    <footer className="max-page-footer">
      <span>South Shore AI</span>
      <nav aria-label="Max footer navigation">
        <Link href="/max">Talk with Max</Link>
        <Link href="/connect">Talk to Scott</Link>
      </nav>
    </footer>
  </div>
);

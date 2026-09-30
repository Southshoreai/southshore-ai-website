import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Check,
  Download,
  Globe2,
  Mail,
  Phone,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logo from "@assets/South_Shore_AI_Inverted_Color_(2)_1767386478873.png";

const profile = {
  name: "Scott Pralinsky",
  title: "Fractional Operations Leader · AI & Automation Builder",
  email: "scott@pralinsky.com",
  phoneDisplay: "520-345-1088",
  phoneHref: "+15203451088",
  quickUrl: "https://www.southshore.ai/connect",
};

export default function ConnectPage() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(profile.quickUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link:", profile.quickUrl);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_50%_-20%,rgba(79,209,197,0.22),transparent_58%)] pointer-events-none" />

      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col px-4 py-5 sm:px-6 sm:py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} /> South Shore AI
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            CAREER FAIR
          </span>
        </header>

        <section className="flex-1 py-9 sm:py-12">
          <div className="text-center">
            <img
              src={logo}
              alt="South Shore AI"
              className="mx-auto mb-8 h-10 w-auto opacity-95"
            />
            <img
              src="/images/scott-pralinsky-speaking.jpg"
              alt="Scott Pralinsky"
              className="mx-auto mb-6 h-48 w-48 rounded-3xl border border-primary/40 object-cover object-[center_20%] shadow-[0_0_55px_rgba(79,209,197,0.18)]"
            />
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Meet Scott Pralinsky
            </p>
            <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Operator who builds.
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-300">
              Five-time CEO, former Wall Street programmer, and AI systems builder helping mission-driven organizations turn complex operations into working systems.
            </p>
          </div>

          <section className="mt-8 rounded-3xl border border-white/10 bg-card/80 p-4 shadow-2xl backdrop-blur sm:p-5">
            <a
              href="/resume/Scott_Pralinsky_Resume.pdf"
              download="Scott_Pralinsky_Resume.pdf"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-accent px-4 py-4 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-600 active:scale-[0.99]"
            >
              <Download size={18} />
              Download Official Resume (PDF)
            </a>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}?subject=Connecting%20from%20the%20Career%20Fair`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-background/70 px-3 py-3 text-xs font-semibold text-white transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail size={16} className="text-primary" />
                Email Scott
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-background/70 px-3 py-3 text-xs font-semibold text-white transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Phone size={16} className="text-primary" />
                Call / Text Scott
              </a>
            </div>
          </section>

          <section className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-2xl font-bold text-primary">5×</p>
              <p className="mt-1 text-xs font-semibold text-white">Chief Executive</p>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">Built, led, and turned around mission-driven organizations.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-2xl font-bold text-primary">20+</p>
              <p className="mt-1 text-xs font-semibold text-white">Years in the Seat</p>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">Executive operations, growth, governance, and accountability.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-2xl font-bold text-primary">AIOS</p>
              <p className="mt-1 text-xs font-semibold text-white">Systems Shipped</p>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">AI operating systems, automations, platforms, and knowledge tools.</p>
            </article>
          </section>

          <section className="mt-5 rounded-3xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-bold text-white">What Scott builds</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-300">
                  <strong className="text-white">Togetha:</strong> a statewide relationship and community platform for adults with I/DD and autism. <strong className="text-white">AIOS:</strong> an AI operating system that unifies agency data, compliance monitoring, reporting, and Monday.com accountability.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-5 rounded-3xl border border-white/10 bg-card/55 p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <QrCode size={16} className="text-primary" />
              Share this permanent career-fair link
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
              This is hosted on South Shore AI’s live domain—no temporary Manus address required.
            </p>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-background/70 p-2 pl-3">
              <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-primary">www.southshore.ai/connect</span>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary/15 px-2.5 py-1.5 text-[11px] font-bold text-primary transition-colors hover:bg-primary/25"
              >
                {copied ? <Check size={14} /> : <Globe2 size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </section>
        </section>

        <footer className="border-t border-white/10 pt-5 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
            <ShieldCheck size={14} className="text-primary" />
            South Shore AI · Boston & South Shore, Massachusetts
          </div>
          <p className="mt-2 text-[10px] text-gray-600">© {new Date().getFullYear()} South Shore AI</p>
        </footer>
      </div>
    </main>
  );
}

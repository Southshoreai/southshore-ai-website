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

const profile = {
  email: "scott@pralinsky.com",
  phoneDisplay: "520-345-1088",
  phoneHref: "+15203451088",
  quickUrl: "https://www.southshore.ai/connect",
};

const resumeUrl = "/resume/Scott_Pralinsky_Resume.pdf";
const speakingPhoto =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/zENAFPFPQRAFZFKG.jpg";
const lightLogo =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/ptCxCBGYacDWyryM.png";

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
    <main className="relative min-h-screen overflow-hidden bg-[#0e1112] text-[#f1f7f9] selection:bg-[#158292] selection:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_50%_-18%,rgba(21,130,146,0.38),transparent_58%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col px-4 py-5 sm:px-6 sm:py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#aeb9bb] transition-colors hover:text-white"
          >
            <ArrowLeft size={15} /> South Shore AI
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#87cdda]/30 bg-[#136975]/20 px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] text-[#87cdda]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1ba653] animate-pulse" />
            CAREER FAIR
          </span>
        </header>

        <section className="flex-1 py-9 sm:py-12">
          <div className="text-center">
            <img
              src={lightLogo}
              alt="South Shore AI"
              className="mx-auto mb-8 h-10 w-auto opacity-95"
            />
            <img
              src={speakingPhoto}
              alt="Scott Pralinsky"
              className="mx-auto mb-6 h-48 w-48 rounded-3xl border border-[#87cdda]/40 object-cover object-[center_20%] shadow-[0_0_55px_rgba(79,209,197,0.18)]"
            />
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#87cdda]">
              Meet Scott Pralinsky
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Operator who builds.
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#d0d8db]">
              Five-time CEO, former Wall Street programmer, and AI systems builder helping mission-driven organizations turn complex operations into working systems.
            </p>
          </div>

          <section className="mt-8 rounded-3xl border border-white/10 bg-[#1b1f21]/85 p-4 shadow-2xl backdrop-blur sm:p-5">
            <a
              href={resumeUrl}
              download="Scott_Pralinsky_Resume.pdf"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#ef7723] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-[#de6700] active:scale-[0.99]"
            >
              <Download size={18} />
              Download Official Resume (PDF)
            </a>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}?subject=Connecting%20from%20the%20Career%20Fair`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0e1112]/70 px-3 py-3 text-xs font-semibold text-white transition-colors hover:border-[#87cdda]/50 hover:text-[#87cdda]"
              >
                <Mail size={16} className="text-[#87cdda]" />
                Email Scott
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0e1112]/70 px-3 py-3 text-xs font-semibold text-white transition-colors hover:border-[#87cdda]/50 hover:text-[#87cdda]"
              >
                <Phone size={16} className="text-[#87cdda]" />
                Call / Text Scott
              </a>
            </div>
          </section>

          <section className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-2xl font-bold text-[#87cdda]">5×</p>
              <p className="mt-1 text-xs font-semibold text-white">Chief Executive</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#879193]">Built, led, and turned around mission-driven organizations.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-2xl font-bold text-[#87cdda]">20+</p>
              <p className="mt-1 text-xs font-semibold text-white">Years in the Seat</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#879193]">Executive operations, growth, governance, and accountability.</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-2xl font-bold text-[#87cdda]">AIOS</p>
              <p className="mt-1 text-xs font-semibold text-white">Systems Shipped</p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#879193]">AI operating systems, automations, platforms, and knowledge tools.</p>
            </article>
          </section>

          <section className="mt-5 rounded-3xl border border-[#87cdda]/20 bg-[#136975]/10 p-5">
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="mt-0.5 shrink-0 text-[#87cdda]" />
              <div>
                <p className="text-sm font-bold text-white">What Scott builds</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#d0d8db]">
                  <strong className="text-white">Togetha:</strong> a statewide relationship and community platform for adults with I/DD and autism. <strong className="text-white">AIOS:</strong> an AI operating system that unifies agency data, compliance monitoring, reporting, and Monday.com accountability.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-5 rounded-3xl border border-white/10 bg-[#1b1f21]/70 p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <QrCode size={16} className="text-[#87cdda]" />
              Share this permanent career-fair link
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-[#aeb9bb]">
              This is hosted on South Shore AI&rsquo;s live domain—no temporary address required.
            </p>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1112]/70 p-2 pl-3">
              <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-[#87cdda]">www.southshore.ai/connect</span>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#136975]/30 px-2.5 py-1.5 text-[11px] font-bold text-[#87cdda] transition-colors hover:bg-[#136975]/50"
              >
                {copied ? <Check size={14} /> : <Globe2 size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </section>
        </section>

        <footer className="border-t border-white/10 pt-5 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] text-[#879193]">
            <ShieldCheck size={14} className="text-[#87cdda]" />
            South Shore AI · Boston &amp; South Shore, Massachusetts
          </div>
          <p className="mt-2 text-[10px] text-[#6f787b]">© {new Date().getFullYear()} South Shore AI</p>
        </footer>
      </div>
    </main>
  );
}

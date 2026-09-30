import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  Landmark,
  Layers3,
  Mail,
  Phone,
  QrCode,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

const profile = {
  email: "scott@pralinsky.com",
  phoneDisplay: "520-345-1088",
  phoneHref: "+15203451088",
  url: "https://www.southshore.ai/connect",
};

const resumeUrl = "/resume/Scott_Pralinsky_Resume.pdf";
const speakingPhoto = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/zENAFPFPQRAFZFKG.jpg";
const lightLogo = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/ptCxCBGYacDWyryM.png";

const experience = [
  ["Founder & Principal · South Shore AI", "2024 — Present", "Designing and delivering AI agents, operating systems, workflow automations, web applications, keynotes, and executive advisory for organizations adopting AI responsibly."],
  ["Chief Operating Officer · House of Possibilities", "2024 — 2026", "Led all agency operations and technology, orchestrated growth from two to five sites, embedded EOS accountability, and built the agency AIOS system."],
  ["Chief Executive Officer · Grow Associates", "2022 — 2023", "Grew net revenue 270% and individual giving 416% in year one; launched revenue streams and implemented EOS, saving more than $200K."],
  ["Earlier executive leadership", "2005 — 2022", "Founder/CEO of Casa Milagro Foundation, CEO of Echoing Hope Ranch, and Interim Executive Director at Teva Community."],
];

export default function ConnectPage() {
  const [copied, setCopied] = useState(false);

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(profile.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this profile link:", profile.url);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#081213] text-[#eef7f7] selection:bg-[#4fd1c5] selection:text-[#081213]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_76%_-4%,rgba(21,130,146,0.35),transparent_47%),radial-gradient(circle_at_10%_12%,rgba(79,209,197,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-[#b6c7c8] transition-colors hover:text-white">
            <ArrowLeft size={15} /> South Shore AI
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#87cdda]/30 bg-[#136975]/20 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#87cdda]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4fd1c5]" /> PROFESSIONAL PROFILE
          </span>
        </header>

        <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#87cdda]/25 bg-[#136975]/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#87cdda]">
              <Sparkles size={14} /> Scott Pralinsky
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Executive operator. <span className="text-[#87cdda]">Systems builder.</span> Practical AI leader.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c7d5d7] sm:text-lg">
              Five-time chief executive, former Wall Street programmer, and hands-on AI systems builder. Scott helps mission-driven organizations turn complex operations, ambitious ideas, and high-stakes growth into working systems.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={resumeUrl} download="Scott_Pralinsky_Resume.pdf" className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#ef7723] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-orange-950/35 transition-colors hover:bg-[#db6515]">
                <Download size={18} /> Download Résumé
              </a>
              <a href={`mailto:${profile.email}?subject=Connecting%20with%20Scott%20Pralinsky`} className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#87cdda]/35 bg-[#136975]/15 px-5 py-4 text-sm font-bold text-[#dffafa] transition-colors hover:border-[#87cdda] hover:bg-[#136975]/30">
                <Mail size={18} /> Email Scott
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#aebfc1]">
              <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-2 transition-colors hover:text-white"><Phone size={16} className="text-[#87cdda]" /> {profile.phoneDisplay}</a>
              <a href="#selected-work" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Layers3 size={16} className="text-[#87cdda]" /> Selected work <ArrowUpRight size={15} /></a>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-[#4fd1c5]/30 via-transparent to-[#ef7723]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#87cdda]/35 bg-[#0d1a1b] p-3 shadow-2xl shadow-black/45">
                <img src={speakingPhoto} alt="Scott Pralinsky speaking at a podium" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[center_20%]" />
                <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-[#091314]/90 p-4 backdrop-blur">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#87cdda]">Founder & Principal</p>
                  <p className="mt-1 text-sm font-bold text-white">South Shore AI</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#b7c6c8]">Boston · South Shore, Massachusetts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
          <Stat value="5×" label="Chief Executive" detail="Built, led, and turned around mission-driven organizations." />
          <Stat value="20+" label="Years of Leadership" detail="Executive operations, growth, governance, and accountability." />
          <Stat value="270%" label="Revenue Growth" detail="Year-one growth achieved as CEO at Grow Associates." />
        </section>

        <section id="selected-work" className="py-14 sm:py-18">
          <SectionHeading eyebrow="Selected work" title="Platforms and operating systems built for real-world outcomes." body="Scott pairs executive judgment with hands-on product, workflow, and AI implementation—moving from the operational problem to a usable solution." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <WorkCard icon={<UsersRound size={21} />} title="Togetha" subtitle="Statewide relationship & community platform" body="Designed and built to help adults with I/DD and autism build safer, supported relationships through accessible member tools, consent-led supporter collaboration, and accountable safety workflows." tags={["Accessible product design", "Safety workflows", "Provider collaboration"]} tone="teal" />
            <WorkCard icon={<Workflow size={21} />} title="AIOS" subtitle="Agency AI operating system" body="A multi-site knowledge and automation backbone that unifies agency activity, compliance monitoring, executive reporting, and accountability work in one practical operating layer." tags={["Multi-agent workflows", "Knowledge systems", "Monday.com"]} tone="blue" />
            <WorkCard icon={<Code2 size={21} />} title="AI & Workflow Engineering" subtitle="Custom systems for operational bottlenecks" body="From strategy through deployment, Scott identifies high-friction handoffs and builds the automations, decision tools, and operating infrastructure that remove them." tags={["Automation", "Process redesign", "AI implementation"]} tone="orange" />
          </div>
        </section>

        <section className="grid gap-8 border-t border-white/10 py-14 lg:grid-cols-[0.95fr_1.05fr] sm:py-18">
          <div>
            <SectionHeading eyebrow="Leadership profile" title="An operator who has carried the accountability." body="Scott’s work is informed by executive seats where strategy, people, budget, growth, and delivery all had to work at the same time." />
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Credential icon={<BriefcaseBusiness size={18} />} title="Five-time CEO" body="Executive leadership across mission-driven organizations, growth stages, and turnaround environments." />
              <Credential icon={<Landmark size={18} />} title="Wall Street engineering" body="Software development and release-management experience in high-volume, precision financial systems." />
              <Credential icon={<GraduationCap size={18} />} title="MIT AI training" body="Advanced certificate study in Artificial Intelligence: Implications for Business Strategy." />
              <Credential icon={<Building2 size={18} />} title="Military technology instruction" body="Years teaching Military Science and Technology with the United States Air Force." />
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#102021]/70 p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#87cdda]">Executive track record</p>
            <div className="mt-6 space-y-6 border-l border-[#4fd1c5]/25 pl-5">
              {experience.map(([title, period, body]) => <TimelineItem key={title} title={title} period={period} body={body} />)}
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-14 lg:grid-cols-[1.1fr_0.9fr] sm:py-18">
          <div className="rounded-[2rem] border border-[#87cdda]/20 bg-[linear-gradient(135deg,rgba(19,105,117,0.28),rgba(8,18,19,0.85))] p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#87cdda]">How Scott can help</p>
            <h2 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">Build the system. Strengthen the operation. Bring people with you.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Focus title="AI strategy" body="Readiness, governance, staff learning, and practical implementation." />
              <Focus title="Build & automate" body="Custom systems, AI workflows, portals, and operational integrations." />
              <Focus title="Lead & scale" body="Operating discipline, accountability, revenue growth, boards, and teams." />
            </div>
            <a href={`mailto:${profile.email}?subject=Exploring%20a%20project%20with%20Scott%20Pralinsky`} className="mt-7 inline-flex items-center gap-2 font-bold text-[#87cdda] transition-colors hover:text-white">Start a conversation <ArrowUpRight size={17} /></a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101819] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-bold text-white"><QrCode size={18} className="text-[#87cdda]" /> Share this profile</div>
            <p className="mt-2 text-sm leading-relaxed text-[#b7c6c8]">This permanent link is the complete professional profile, résumé, selected work, and direct contact page for Scott Pralinsky.</p>
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-[#081213] p-2 pl-3">
              <span className="min-w-0 flex-1 truncate font-mono text-xs text-[#87cdda]">www.southshore.ai/connect</span>
              <button type="button" onClick={copyProfileLink} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#136975]/30 px-3 py-2 text-xs font-bold text-[#87cdda] transition-colors hover:bg-[#136975]/50">{copied ? <Check size={14} /> : <Globe2 size={14} />}{copied ? "Copied" : "Copy link"}</button>
            </div>
            <Link href="/" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#b7c6c8] transition-colors hover:text-white"><ArrowLeft size={16} /> Explore South Shore AI & Togetha</Link>
          </div>
        </section>

        <footer className="border-t border-white/10 py-7 text-center">
          <img src={lightLogo} alt="South Shore AI" className="mx-auto h-8 w-auto opacity-90" />
          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-[#879697]"><ShieldCheck size={14} className="text-[#87cdda]" /> South Shore AI · Boston & South Shore, Massachusetts</div>
          <p className="mt-2 text-[10px] text-[#647273]">© {new Date().getFullYear()} South Shore AI</p>
        </footer>
      </div>
    </main>
  );
}

function Stat({ value, label, detail }: { value: string; label: string; detail: string }) {
  return <article className="px-2 py-2 sm:px-5"><p className="text-3xl font-bold text-[#87cdda]">{value}</p><p className="mt-1 text-sm font-bold text-white">{label}</p><p className="mt-1 text-xs leading-relaxed text-[#9daeb0]">{detail}</p></article>;
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className="max-w-2xl"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#87cdda]">{eyebrow}</p><h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">{title}</h2><p className="mt-3 text-sm leading-relaxed text-[#b7c6c8] sm:text-base">{body}</p></div>;
}

function WorkCard({ icon, title, subtitle, body, tags, tone }: { icon: ReactNode; title: string; subtitle: string; body: string; tags: string[]; tone: "teal" | "blue" | "orange" }) {
  const tones = { teal: "border-[#87cdda]/20 bg-[#136975]/10 text-[#87cdda]", blue: "border-[#7eb7ff]/20 bg-[#1e4a7a]/15 text-[#9bc9ff]", orange: "border-[#ef7723]/20 bg-[#5e2b0d]/20 text-[#ffad76]" };
  return <article className="rounded-[1.6rem] border border-white/10 bg-[#101a1b] p-6 transition-transform duration-200 hover:-translate-y-1"><div className={`inline-flex rounded-xl border p-3 ${tones[tone]}`}>{icon}</div><h3 className="mt-5 text-xl font-bold text-white">{title}</h3><p className="mt-1 text-sm font-semibold text-[#a9c4c6]">{subtitle}</p><p className="mt-4 text-sm leading-relaxed text-[#b7c6c8]">{body}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] font-semibold text-[#b7c6c8]">{tag}</span>)}</div></article>;
}

function Credential({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return <article className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4"><div className="mt-0.5 text-[#87cdda]">{icon}</div><div><h3 className="text-sm font-bold text-white">{title}</h3><p className="mt-1 text-xs leading-relaxed text-[#aebfc1]">{body}</p></div></article>;
}

function TimelineItem({ title, period, body }: { title: string; period: string; body: string }) {
  return <article className="relative"><span className="absolute -left-[1.88rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#4fd1c5] bg-[#102021]" /><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#87cdda]">{period}</p><h3 className="mt-1 text-sm font-bold text-white">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-[#b7c6c8]">{body}</p></article>;
}

function Focus({ title, body }: { title: string; body: string }) {
  return <div className="rounded-2xl border border-white/10 bg-[#081213]/45 p-4"><p className="text-sm font-bold text-white">{title}</p><p className="mt-1.5 text-xs leading-relaxed text-[#b7c6c8]">{body}</p></div>;
}

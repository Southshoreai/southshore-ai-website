import React, { useEffect, useState } from "react";
import {
  Shield,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Calendar,
  ChevronRight,
  Eye,
  Sliders,
  Cpu,
  Lock,
  Award,
  BookOpen,
  MessageSquare,
  Play,
  Pause,
  X,
  ChevronLeft,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const TOGETHA_REEL = [
  {
    eyebrow: "Chapter 01 · A calmer beginning",
    title: "Start in a space that feels safe.",
    description:
      "Togetha replaces frantic discovery with an intentional welcome, clear choices, and a pace each member can own.",
    caption: "Welcome & guided onboarding",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/eNUDCfZXAPNqdRDz.png",
    accent: "#1ba653",
  },
  {
    eyebrow: "Chapter 02 · Choice without pressure",
    title: "Every next step stays understandable.",
    description:
      "Guided Mode turns complex moments into calm, single-decision steps—with readable labels and no rushed interactions.",
    caption: "Guided member experience",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/VGiXerrePSQwdxqQ.png",
    accent: "#87cdda",
  },
  {
    eyebrow: "Chapter 03 · Support by invitation",
    title: "Help is present only when a member wants it.",
    description:
      "Supporters can co-pilot conversations or monitor high-level signals, but consent remains visible, specific, and revocable.",
    caption: "Consent-led supporter co-pilot",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/dfxEvwZjtIqUvBak.png",
    accent: "#a6d8e1",
  },
  {
    eyebrow: "Chapter 04 · Safety with accountability",
    title: "When something needs care, people stay in the loop.",
    description:
      "Togetha combines clear member controls with a human-reviewed safety layer built for responsible provider oversight.",
    caption: "Provider & safety tier",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/ILoalnIDAcdSJOTg.png",
    accent: "#ef7723",
  },
] as const;

export default function Home() {
  const [demoRole, setDemoRole] = useState<"member" | "supporter" | "agency">("member");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [requestType, setRequestType] = useState<"demo" | "keynote" | "consulting">("demo");
  const [reelOpen, setReelOpen] = useState(false);
  const [reelPlaying, setReelPlaying] = useState(true);
  const [reelIndex, setReelIndex] = useState(0);
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [walkthroughIndex, setWalkthroughIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    note: "",
  });

  useEffect(() => {
    if (!reelOpen || !reelPlaying) return;

    const rotation = window.setInterval(() => {
      setReelIndex((current) => (current + 1) % TOGETHA_REEL.length);
    }, 5200);

    return () => window.clearInterval(rotation);
  }, [reelOpen, reelPlaying]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setReelOpen(false);
        setWalkthroughOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0e1112] text-[#f1f7f9] selection:bg-[#158292] selection:text-white">
      {/* 1. Global Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#d0d8db] bg-white">
        <div className="ssai-container flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/JdQEjixOMgOctwHs.png"
              alt="South Shore AI"
              className="h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#565f61]">
            <a href="#togetha" className="hover:text-[#136975] transition-colors">
              The Togetha Platform
            </a>
            <a href="#workflow" className="hover:text-[#136975] transition-colors">
              Workflow Solutions
            </a>
            <a href="#speaking" className="hover:text-[#136975] transition-colors">
              Keynotes & Speaking
            </a>
            <a href="#consulting" className="hover:text-[#136975] transition-colors">
              Advisory
            </a>
            <a href="#founder" className="hover:text-[#136975] transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => setRequestType("demo")}
              className="inline-flex items-center justify-center rounded-[5px] bg-[#ef7723] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#de6700] transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section: Primary Focus on Togetha */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#282e30]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(21,130,146,0.18),transparent_50%)] pointer-events-none" />
        
        <div className="ssai-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#333a3c] bg-[#1b1f21] px-3.5 py-1 text-xs font-semibold text-[#87cdda]">
                <span className="h-2 w-2 rounded-full bg-[#1ba653] animate-pulse" />
                Featured Platform &middot; Approval-Gated Access
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f1f7f9] leading-[1.12]">
                A statewide framework for safe, supported relationships.
              </h1>

              <p className="text-lg md:text-xl text-[#b8c1c4] font-normal leading-relaxed max-w-2xl font-serif">
                Togetha helps autistic adults and adults with intellectual and developmental disabilities (I/DD) find friendship, love, and community at their own pace—backed by consent-based supporter tools and rigorous safety infrastructure.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  onClick={() => setRequestType("demo")}
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#ef7723] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#de6700] transition-all"
                >
                  Request a Private Demo
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#togetha-architecture"
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#454d50] bg-[#1b1f21] px-6 py-3.5 text-base font-medium text-[#f1f7f9] hover:bg-[#232829] transition-colors"
                >
                  Explore Product Architecture
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setReelIndex(0);
                    setReelPlaying(true);
                    setReelOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] px-2 py-3 text-sm font-semibold text-[#87cdda] hover:text-white transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#87cdda]/50 bg-[#136975]/20">
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                  Watch the Togetha reel
                </button>
              </div>

              {/* Trust & Proof Callout */}
              <div className="pt-6 border-t border-[#282e30] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                <div>
                  <div className="font-mono text-2xl font-bold text-[#87cdda]">90%</div>
                  <div className="text-xs text-[#9fa8ab] mt-1">Pilot matches made</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-[#87cdda]">0%</div>
                  <div className="text-xs text-[#9fa8ab] mt-1">Event anxiety reported at close</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-[#87cdda]">100%</div>
                  <div className="text-xs text-[#9fa8ab] mt-1">Member consent &amp; privacy control</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Mockup: Live App Screen */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[340px] sm:max-w-[360px] rounded-[24px] border-[6px] border-[#2b3133] bg-[#161a1b] p-2 shadow-2xl shadow-black/80">
                <div className="relative overflow-hidden rounded-[18px] bg-[#121617] border border-[#333a3c]">
                  {/* Phone Header Mockup */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[#282e30] bg-[#1b1f21] text-xs text-[#b8c1c4]">
                    <span className="font-mono text-[10px] text-[#87cdda]">TOGETHA &middot; GUIDED MODE</span>
                    <span className="inline-block px-1.5 py-0.5 rounded bg-[#136975] text-[10px] text-white">Active</span>
                  </div>

                  {/* App Screen Capture */}
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/eNUDCfZXAPNqdRDz.png"
                    alt="Togetha Welcome Screen"
                    className="w-full h-auto object-cover"
                  />

                  {/* Intercept Overlay Mockup */}
                  <div className="p-3 bg-[#1b1f21]/95 border-t border-[#333a3c] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#87cdda]">
                      <Shield className="h-3.5 w-3.5 text-[#1ba653]" />
                      <span>Calm Pacing &amp; Real Safety Checks</span>
                    </div>
                    <p className="text-[11px] text-[#b8c1c4] leading-tight">
                      Members navigate at their own pace with optional supporter co-pilot guidance and inline safety alerts.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Badge underneath */}
              <div className="mt-4 text-center">
                <span className="text-xs text-[#879193] font-mono">
                  Built &amp; Operated by South Shore AI &middot; Massachusetts 18+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Problem & Proof: Why Togetha Exists */}
      <section id="togetha" className="py-20 md:py-28 bg-[#161a1b] border-b border-[#282e30]">
        <div className="ssai-container">
          <div className="max-w-3xl mb-16">
            <span className="ssai-eyebrow text-[#87cdda]">01 &mdash; THE RELATIONSHIP GAP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1f7f9] mt-2">
              Most adults want someone to share life with. Conventional tools make it unsafe.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#b8c1c4] font-serif leading-relaxed">
              Mainstream apps are optimized for rapid swiping, engagement loops, and unsolicited encounters. Autistic adults and adults with I/DD encounter scammers, bad actors, and overwhelming friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-6 space-y-3">
              <div className="font-mono text-3xl font-bold text-[#ef7723]">42%</div>
              <h3 className="text-base font-semibold text-[#f1f7f9]">Severe Chronic Isolation</h3>
              <p className="text-sm text-[#b8c1c4] leading-relaxed">
                42% of Massachusetts adults with I/DD report persistent loneliness, despite 85% expressing an active desire for a romantic relationship or genuine friendships.
              </p>
              <div className="text-[11px] text-[#879193] font-mono pt-2">Source: National Core Indicators</div>
            </div>

            <div className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-6 space-y-3">
              <div className="font-mono text-3xl font-bold text-[#87cdda]">49%</div>
              <h3 className="text-base font-semibold text-[#f1f7f9]">Harm on Mainstream Apps</h3>
              <p className="text-sm text-[#b8c1c4] leading-relaxed">
                Nearly half of adults surveyed have attempted standard dating apps, frequently reporting predatory behavior, scammers, or pressure to conceal their neurodiversity.
              </p>
              <div className="text-[11px] text-[#879193] font-mono pt-2">Source: Hopeful Hearts Survey (Aug 2026)</div>
            </div>

            <div className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-6 space-y-3">
              <div className="font-mono text-3xl font-bold text-[#1ba653]">45% vs 12%</div>
              <h3 className="text-base font-semibold text-[#f1f7f9]">Confidence, Not Tech Barrier</h3>
              <p className="text-sm text-[#b8c1c4] leading-relaxed">
                45% report that anxiety and lack of trusted support hold them back; only 12% struggle with interface mechanics. They do not need a simpler app—they need a supportive infrastructure.
              </p>
              <div className="text-[11px] text-[#879193] font-mono pt-2">Source: Hopeful Hearts Survey (Aug 2026)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Product Architecture: How Togetha Solves It */}
      <section id="togetha-architecture" className="py-20 md:py-28 bg-[#0e1112] border-b border-[#282e30]">
        <div className="ssai-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="ssai-eyebrow text-[#87cdda]">02 &mdash; ARCHITECTURE &amp; GOVERNANCE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f1f7f9] mt-2">
                Designed for dignity, autonomy, and provider trust.
              </h2>
            </div>

            {/* Role switchers for interactive preview */}
            <div className="flex p-1 bg-[#1b1f21] rounded-[6px] border border-[#333a3c]">
              <button
                onClick={() => setDemoRole("member")}
                className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  demoRole === "member" ? "bg-[#136975] text-white shadow-sm" : "text-[#9fa8ab] hover:text-white"
                }`}
              >
                Member Experience
              </button>
              <button
                onClick={() => setDemoRole("supporter")}
                className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  demoRole === "supporter" ? "bg-[#136975] text-white shadow-sm" : "text-[#9fa8ab] hover:text-white"
                }`}
              >
                Supporter Co-Pilot
              </button>
              <button
                onClick={() => setDemoRole("agency")}
                className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  demoRole === "agency" ? "bg-[#136975] text-white shadow-sm" : "text-[#9fa8ab] hover:text-white"
                }`}
              >
                Provider &amp; Safety Tier
              </button>
            </div>
          </div>

          {/* Dynamic Content Pane Based on Selected Role */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-6 lg:p-10">
            {demoRole === "member" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#1ba653] uppercase tracking-wider">
                      Patient &middot; Autonomous &middot; Predictable
                    </span>
                    <h3 className="text-2xl font-bold text-white">Three Distinct UI Modes</h3>
                    <p className="text-sm md:text-base text-[#b8c1c4] font-serif leading-relaxed">
                      Members can select between <strong>Standard</strong>, <strong>Simplified</strong>, and <strong>Guided</strong> modes. Guided mode breaks every interaction into calm, single-decision steps with clear audio prompts, session pausing, and plain-language toggles at a 6th-grade reading level.
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm text-[#d0d8db]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#1ba653] mt-0.5 shrink-0" />
                      <span><strong>Paced Discover Feed:</strong> Limits daily profiles viewed to prevent sensory overload and fatigue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#1ba653] mt-0.5 shrink-0" />
                      <span><strong>Explicit Text Labels:</strong> Every single button contains readable text alongside symbols—zero ambiguous icons.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#1ba653] mt-0.5 shrink-0" />
                      <span><strong>Inline Conversation Coach:</strong> Non-punitive suggestions appear right in the member’s private thread.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="max-w-[320px] rounded-[16px] overflow-hidden border border-[#454d50] shadow-xl">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/VGiXerrePSQwdxqQ.png"
                      alt="Togetha Guided Mode"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </>
            )}

            {demoRole === "supporter" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#87cdda] uppercase tracking-wider">
                      Consent-Based Support &middot; Privacy First
                    </span>
                    <h3 className="text-2xl font-bold text-white">Co-Pilot &amp; Shadow Visibility</h3>
                    <p className="text-sm md:text-base text-[#b8c1c4] font-serif leading-relaxed">
                      Family members, case managers, or life coaches can assist—but <strong>only with explicit member consent</strong>. Supporters can never snoop without permission, and access can be revoked by the member at any second.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-[6px] bg-[#232829] border border-[#333a3c]">
                      <div className="text-xs font-bold text-[#87cdda]">Level 1: Co-Pilot Role</div>
                      <div className="text-xs text-[#b8c1c4] mt-1">
                        Supporter can draft message suggestions. The member must explicitly review and tap approve before anything is sent.
                      </div>
                    </div>
                    <div className="p-3.5 rounded-[6px] bg-[#232829] border border-[#333a3c]">
                      <div className="text-xs font-bold text-[#87cdda]">Level 2: Shadow Role</div>
                      <div className="text-xs text-[#b8c1c4] mt-1">
                        Read-only safety overview. Provides high-level health indicators (counts of active chats, alerts) rather than invasive surveillance.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="max-w-[360px] rounded-[16px] overflow-hidden border border-[#454d50] shadow-xl">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/dfxEvwZjtIqUvBak.png"
                      alt="Supporter Dashboard"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </>
            )}

            {demoRole === "agency" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#ef7723] uppercase tracking-wider">
                      Institutional Multi-Tenancy &middot; Compliance
                    </span>
                    <h3 className="text-2xl font-bold text-white">Enterprise Safety &amp; Provider Oversight</h3>
                    <p className="text-sm md:text-base text-[#b8c1c4] font-serif leading-relaxed">
                      Provider agencies receive a secure, multi-tenant portal to sponsor member slots, track coach authorizations, and monitor safety logs across their organization without cross-contaminating other agencies’ private records.
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm text-[#d0d8db]">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#ef7723] mt-0.5 shrink-0" />
                      <span><strong>Statewide Inter-Agency Matching:</strong> Members match across agency boundaries within one secure Massachusetts ecosystem.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#ef7723] mt-0.5 shrink-0" />
                      <span><strong>Real-Time AI Moderation Queue:</strong> Flagged risks trigger human staff review before safety incidents escalate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#ef7723] mt-0.5 shrink-0" />
                      <span><strong>Full Audit Logging:</strong> Complete traceability on every supporter authorization, flag intervention, and status change.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="max-w-[320px] rounded-[16px] overflow-hidden border border-[#454d50] shadow-xl">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/ILoalnIDAcdSJOTg.png"
                      alt="Safety Queue & Interception"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 5. Product Reel & Guided Walkthrough */}
      <section id="guided-walkthrough" className="relative overflow-hidden py-20 md:py-28 bg-[#121718] border-b border-[#282e30]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_78%_40%,rgba(239,119,35,0.11),transparent_36%),radial-gradient(circle_at_16%_70%,rgba(21,130,146,0.16),transparent_38%)]" />
        <div className="ssai-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="ssai-eyebrow text-[#ef7723]">03 &mdash; SEE THE EXPERIENCE</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                A guided walkthrough, built from the member&rsquo;s point of view.
              </h2>
              <p className="mt-5 max-w-xl text-base md:text-lg text-[#b8c1c4] font-serif leading-relaxed">
                Follow the four decisions that define Togetha: a calm welcome, clear choices, invited support, and safety with accountable human judgment.
              </p>

              <div className="mt-8 space-y-2">
                {TOGETHA_REEL.map((chapter, index) => {
                  const selected = walkthroughIndex === index;
                  return (
                    <button
                      key={chapter.title}
                      type="button"
                      onClick={() => setWalkthroughIndex(index)}
                      className={`group flex w-full items-center gap-4 rounded-[7px] border px-4 py-3.5 text-left transition-all ${
                        selected
                          ? "border-[#87cdda]/70 bg-[#1b2527] shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                          : "border-[#2c3638] bg-[#171d1e]/70 hover:border-[#587377] hover:bg-[#1b2223]"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-mono font-bold ${
                          selected ? "bg-[#136975] text-white" : "border border-[#465154] text-[#9fa8ab]"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-sm font-semibold ${selected ? "text-white" : "text-[#d0d8db]"}`}>{chapter.caption}</span>
                        <span className="mt-0.5 block text-xs text-[#879193] truncate">{chapter.title}</span>
                      </span>
                      <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${selected ? "translate-x-0.5 text-[#87cdda]" : "text-[#687174] group-hover:translate-x-0.5"}`} />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setWalkthroughOpen(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-[5px] bg-[#ef7723] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#ef7723]/15 transition-all hover:bg-[#de6700] active:scale-[0.97]"
              >
                <Play className="h-4 w-4 fill-current" />
                Start the guided walkthrough
              </button>
            </div>

            <div className="lg:col-span-6 relative flex justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-[#136975]/20 blur-3xl" />
              <div className="w-full max-w-[380px] space-y-4">
                <div className="relative overflow-hidden rounded-[22px] border-[5px] border-[#2c3638] bg-[#0e1213] p-2 shadow-2xl shadow-black/60">
                  <div className="flex items-center justify-between border-b border-[#242e30] px-3 py-2 text-[10px] font-mono text-[#9fa8ab]">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1ba653]" />
                      TOGETHA · EXPERIENCE MAP
                    </span>
                    <span className="text-[#87cdda]">{String(walkthroughIndex + 1).padStart(2, "0")} / 04</span>
                  </div>
                  <div className="overflow-hidden rounded-[14px] bg-[#0b0e0f]">
                    <img
                      src={TOGETHA_REEL[walkthroughIndex].image}
                      alt={TOGETHA_REEL[walkthroughIndex].caption}
                      className="block w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="rounded-[10px] border border-[#324144] bg-[#151c1e] p-4 shadow-lg">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em]" style={{ color: TOGETHA_REEL[walkthroughIndex].accent }}>
                    {TOGETHA_REEL[walkthroughIndex].eyebrow}
                  </div>
                  <div className="mt-1 text-base font-bold text-white">{TOGETHA_REEL[walkthroughIndex].title}</div>
                  <p className="mt-1.5 font-serif text-xs leading-relaxed text-[#b8c1c4]">
                    {TOGETHA_REEL[walkthroughIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Advisory, Workflows & Speaking Section */}
      <section id="workflow" className="py-20 md:py-28 bg-[#161a1b] border-b border-[#282e30]">
        <div className="ssai-container">
          <div className="max-w-3xl mb-16">
            <span className="ssai-eyebrow text-[#87cdda]">04 &mdash; CAPABILITIES &amp; SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1f7f9] mt-2">
              Beyond Togetha: Pragmatic AI that solves real operational bottlenecks.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#b8c1c4] font-serif leading-relaxed">
              South Shore AI doesn’t pitch speculative AI hype. We find the one high-friction workflow draining your team’s hours, design an automated solution, and hand it to your team to operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1: Workflow Solutions */}
            <div className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-7 flex flex-col justify-between hover:border-[#87cdda]/40 transition-all">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-[5px] bg-[#136975]/30 border border-[#136975] flex items-center justify-center text-[#87cdda]">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Workflow Engineering</h3>
                <p className="text-sm text-[#b8c1c4] leading-relaxed">
                  Turn messy multi-app handoffs into streamlined internal tools. We audit repetitive manual tasks, automate data routing, and deploy private AI assistants that save real payroll hours.
                </p>
              </div>
              <div className="pt-6 border-t border-[#282e30] mt-6">
                <a
                  href="#contact"
                  onClick={() => setRequestType("consulting")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#87cdda] hover:text-white"
                >
                  Discuss Your Workflow <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Capability 2: Keynotes & Speaking */}
            <div id="speaking" className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-7 flex flex-col justify-between hover:border-[#87cdda]/40 transition-all">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-[5px] bg-[#136975]/30 border border-[#136975] flex items-center justify-center text-[#87cdda]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Keynotes &amp; Briefings</h3>
                <p className="text-sm text-[#b8c1c4] leading-relaxed">
                  Engaging, hype-free keynotes for business owners, human service conferences, leadership retreats, and government forums. Grounded in 20+ years of tech and executive leadership.
                </p>
              </div>
              <div className="pt-6 border-t border-[#282e30] mt-6">
                <a
                  href="#contact"
                  onClick={() => setRequestType("keynote")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#87cdda] hover:text-white"
                >
                  Book for an Event <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Capability 3: Executive AI Advisory */}
            <div id="consulting" className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-7 flex flex-col justify-between hover:border-[#87cdda]/40 transition-all">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-[5px] bg-[#136975]/30 border border-[#136975] flex items-center justify-center text-[#87cdda]">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Executive Advisory</h3>
                <p className="text-sm text-[#b8c1c4] leading-relaxed">
                  Confidential advisory for CEOs and boards evaluating AI investments, vendor promises, or proprietary product builds. Clear operator-to-operator judgment without jargon.
                </p>
              </div>
              <div className="pt-6 border-t border-[#282e30] mt-6">
                <a
                  href="#contact"
                  onClick={() => setRequestType("consulting")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#87cdda] hover:text-white"
                >
                  Request Advisory Call <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Founder Credentials: Scott Pralinsky */}
      <section id="founder" className="py-20 md:py-28 bg-[#0e1112] border-b border-[#282e30]">
        <div className="ssai-container">
          <div className="rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative rounded-[8px] overflow-hidden border-2 border-[#333a3c] shadow-lg max-w-[280px]">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/zENAFPFPQRAFZFKG.jpg"
                    alt="Scott Pralinsky speaking at podium"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left">
                    <div className="text-xs font-bold text-white">Scott Pralinsky</div>
                    <div className="text-[11px] text-[#b8c1c4]">Founder &amp; Principal, South Shore AI</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-[#879193] font-mono">
                  Boston &middot; South Shore, Massachusetts
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <span className="ssai-eyebrow text-[#87cdda]">05 &mdash; PRACTICE LEADERSHIP</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Operator credibility. Twenty years in the seat.
                </h2>
                <p className="text-base text-[#b8c1c4] font-serif leading-relaxed">
                  South Shore AI is led by Scott Pralinsky, an executive with two decades of CEO leadership, institutional tech development, and operational problem-solving.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border border-[#282e30] rounded-[6px] p-3.5 bg-[#161a1b]">
                    <div className="text-xs font-mono font-bold text-[#87cdda]">20+ Years Executive Leadership</div>
                    <div className="text-xs text-[#9fa8ab] mt-1">Former CEO with proven P&amp;L governance across mission-critical organizations.</div>
                  </div>
                  <div className="border border-[#282e30] rounded-[6px] p-3.5 bg-[#161a1b]">
                    <div className="text-xs font-mono font-bold text-[#87cdda]">Wall Street Engineering</div>
                    <div className="text-xs text-[#9fa8ab] mt-1">Software development experience in high-volume, precision Wall Street financial computing.</div>
                  </div>
                  <div className="border border-[#282e30] rounded-[6px] p-3.5 bg-[#161a1b]">
                    <div className="text-xs font-mono font-bold text-[#87cdda]">Military Technology Instructor</div>
                    <div className="text-xs text-[#9fa8ab] mt-1">Years serving as an Instructor of Military Science and Technology with the United States Air Force.</div>
                  </div>
                  <div className="border border-[#282e30] rounded-[6px] p-3.5 bg-[#161a1b]">
                    <div className="text-xs font-mono font-bold text-[#87cdda]">MIT AI Credentials</div>
                    <div className="text-xs text-[#9fa8ab] mt-1">Completed advanced certificate training in Artificial Intelligence from the Massachusetts Institute of Technology.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact / Demo Request Form (Approval-gated CTA) */}
      <section id="contact" className="py-20 md:py-28 bg-[#161a1b]">
        <div className="ssai-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="ssai-eyebrow text-[#ef7723]">06 &mdash; GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f1f7f9] mt-2">
              Request a Togetha Walkthrough or Start a Conversation
            </h2>
            <p className="mt-3 text-base text-[#b8c1c4] font-serif">
              Togetha access is granted on an approval basis to provider agencies, sponsors, and partners. For keynote bookings or workflow consulting, reach out directly.
            </p>
          </div>

          <div className="max-w-xl mx-auto rounded-[8px] border border-[#333a3c] bg-[#1b1f21] p-6 sm:p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#1ba653]/20 border border-[#1ba653] flex items-center justify-center text-[#1ba653]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-[#b8c1c4] max-w-md mx-auto">
                  Thank you. We review all Togetha demonstration requests and consulting inquiries promptly. Scott will follow up with you directly.
                </p>
                <div className="pt-4 text-xs font-mono text-[#879193]">
                  Direct: info@southshore.ai &middot; +1 218-506-8426
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-2 p-1 bg-[#161a1b] rounded-[6px] border border-[#282e30]">
                  <button
                    type="button"
                    onClick={() => setRequestType("demo")}
                    className={`py-2 text-xs font-semibold rounded-[4px] transition-colors ${
                      requestType === "demo" ? "bg-[#136975] text-white" : "text-[#879193] hover:text-white"
                    }`}
                  >
                    Togetha Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestType("keynote")}
                    className={`py-2 text-xs font-semibold rounded-[4px] transition-colors ${
                      requestType === "keynote" ? "bg-[#136975] text-white" : "text-[#879193] hover:text-white"
                    }`}
                  >
                    Keynote / Speaking
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestType("consulting")}
                    className={`py-2 text-xs font-semibold rounded-[4px] transition-colors ${
                      requestType === "consulting" ? "bg-[#136975] text-white" : "text-[#879193] hover:text-white"
                    }`}
                  >
                    Workflow Advisory
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d0d8db] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-[5px] border border-[#333a3c] bg-[#161a1b] px-3.5 py-2.5 text-sm text-white placeholder-[#6f787b] focus:border-[#87cdda] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#d0d8db] mb-1">Organization / Agency</label>
                    <input
                      type="text"
                      placeholder="e.g. DDS Provider, Enterprise"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full rounded-[5px] border border-[#333a3c] bg-[#161a1b] px-3.5 py-2.5 text-sm text-white placeholder-[#6f787b] focus:border-[#87cdda] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#d0d8db] mb-1">Direct Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (xxx) xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-[5px] border border-[#333a3c] bg-[#161a1b] px-3.5 py-2.5 text-sm text-white placeholder-[#6f787b] focus:border-[#87cdda] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d0d8db] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-[5px] border border-[#333a3c] bg-[#161a1b] px-3.5 py-2.5 text-sm text-white placeholder-[#6f787b] focus:border-[#87cdda] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d0d8db] mb-1">Brief Context or Objective</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your members, timeline, or workflow bottleneck..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full rounded-[5px] border border-[#333a3c] bg-[#161a1b] px-3.5 py-2.5 text-sm text-white placeholder-[#6f787b] focus:border-[#87cdda] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[5px] bg-[#ef7723] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#de6700] transition-colors mt-2"
                >
                  Submit Request
                </button>
              </form>
            )}

            {/* Direct contact alternatives */}
            <div className="mt-8 pt-6 border-t border-[#282e30] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#879193]">
              <a href="mailto:info@southshore.ai" className="flex items-center gap-2 hover:text-[#f1f7f9]">
                <Mail className="h-4 w-4 text-[#87cdda]" />
                info@southshore.ai
              </a>
              <a href="tel:+12185068426" className="flex items-center gap-2 hover:text-[#f1f7f9]">
                <Phone className="h-4 w-4 text-[#87cdda]" />
                +1 218-506-8426
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-[#282e30] bg-[#0e1112] py-12 text-sm text-[#879193]">
        <div className="ssai-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029772909/ptCxCBGYacDWyryM.png"
              alt="SSAI Mark"
              className="h-6 w-auto"
            />
            <span className="font-semibold text-[#f1f7f9]">South Shore AI</span>
            <span>&middot;</span>
            <span className="font-serif italic">Navigating Tomorrow with AI Today</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <span>southshore.ai</span>
            <span>Railway Deploy Ready</span>
            <span>&copy; {new Date().getFullYear()} South Shore AI</span>
          </div>
        </div>
      </footer>

      {reelOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060909]/90 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Togetha product reel"
          onMouseDown={() => setReelOpen(false)}
        >
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-[16px] border border-[#476064] bg-[#111718] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2d383a] bg-[#171f20] px-5 py-4 sm:px-7">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#87cdda]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1ba653] animate-pulse" /> Product reel
                </div>
                <div className="mt-1 text-base font-bold text-white">Togetha, in four intentional moments</div>
              </div>
              <button
                type="button"
                onClick={() => setReelOpen(false)}
                aria-label="Close product reel"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3a484a] text-[#b8c1c4] transition-colors hover:border-[#87cdda] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(21,130,146,0.23),transparent_55%)] p-6 sm:p-10">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(135,205,218,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(135,205,218,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />
                <div className="relative max-h-[57vh] overflow-hidden rounded-[18px] border-[5px] border-[#283133] bg-[#0c1011] p-1.5 shadow-2xl shadow-black/70">
                  <img
                    src={TOGETHA_REEL[reelIndex].image}
                    alt={TOGETHA_REEL[reelIndex].caption}
                    className="block max-h-[52vh] w-auto max-w-full rounded-[11px] object-contain"
                  />
                </div>
                <div className="absolute bottom-5 left-5 rounded-full border border-[#456064] bg-[#101617]/90 px-3 py-1.5 text-[10px] font-mono text-[#87cdda]">
                  Authentic Togetha interface
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-10">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em]" style={{ color: TOGETHA_REEL[reelIndex].accent }}>
                    {TOGETHA_REEL[reelIndex].eyebrow}
                  </div>
                  <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{TOGETHA_REEL[reelIndex].title}</h2>
                  <p className="mt-5 max-w-md font-serif text-base leading-relaxed text-[#b8c1c4]">
                    {TOGETHA_REEL[reelIndex].description}
                  </p>

                  <div className="mt-8 grid grid-cols-4 gap-2">
                    {TOGETHA_REEL.map((frame, index) => (
                      <button
                        key={frame.title}
                        type="button"
                        aria-label={`Play ${frame.caption}`}
                        onClick={() => setReelIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${index === reelIndex ? "bg-[#ef7723]" : "bg-[#334043] hover:bg-[#617477]"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] font-mono text-[#879193]">
                    <span>{TOGETHA_REEL[reelIndex].caption}</span>
                    <span>{String(reelIndex + 1).padStart(2, "0")} / 04</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setReelIndex((current) => (current - 1 + TOGETHA_REEL.length) % TOGETHA_REEL.length)}
                    aria-label="Previous reel frame"
                    className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#3b494b] text-[#d0d8db] transition-colors hover:border-[#87cdda] hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setReelPlaying((playing) => !playing)}
                    className="inline-flex h-10 items-center gap-2 rounded-[5px] border border-[#3b494b] px-4 text-xs font-bold text-[#d0d8db] transition-colors hover:border-[#87cdda] hover:text-white"
                  >
                    {reelPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                    {reelPlaying ? "Pause reel" : "Play reel"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setReelIndex((current) => (current + 1) % TOGETHA_REEL.length)}
                    aria-label="Next reel frame"
                    className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#3b494b] text-[#d0d8db] transition-colors hover:border-[#87cdda] hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setRequestType("demo");
                      setReelOpen(false);
                    }}
                    className="ml-auto inline-flex h-10 items-center gap-2 rounded-[5px] bg-[#ef7723] px-4 text-xs font-bold text-white transition-colors hover:bg-[#de6700]"
                  >
                    Request a demo <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {walkthroughOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#070a0b]/90 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Togetha guided walkthrough"
          onMouseDown={() => setWalkthroughOpen(false)}
        >
          <div
            className="relative mx-auto my-4 w-full max-w-4xl overflow-hidden rounded-[16px] border border-[#476064] bg-[#111718] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#2d383a] bg-[#171f20] px-5 py-4 sm:px-7">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#ef7723]">
                  <Sparkles className="h-3 w-3" /> Guided walkthrough
                </div>
                <div className="mt-1 text-base font-bold text-white">A member-first tour of Togetha&rsquo;s core choices</div>
              </div>
              <button
                type="button"
                onClick={() => setWalkthroughOpen(false)}
                aria-label="Close guided walkthrough"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#3a484a] text-[#b8c1c4] transition-colors hover:border-[#87cdda] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr]">
              <aside className="border-b border-[#2d383a] bg-[#141b1c] p-3 lg:border-b-0 lg:border-r lg:p-5">
                <div className="flex gap-2 overflow-x-auto lg:block lg:space-y-2">
                  {TOGETHA_REEL.map((chapter, index) => (
                    <button
                      key={chapter.caption}
                      type="button"
                      onClick={() => setWalkthroughIndex(index)}
                      className={`min-w-[135px] rounded-[6px] border p-3 text-left transition-all lg:min-w-0 lg:w-full ${
                        walkthroughIndex === index ? "border-[#87cdda]/70 bg-[#1b2527]" : "border-transparent hover:border-[#344548]"
                      }`}
                    >
                      <div className={`text-[10px] font-mono ${walkthroughIndex === index ? "text-[#87cdda]" : "text-[#7f8b8e]"}`}>0{index + 1}</div>
                      <div className="mt-1 text-xs font-semibold text-[#d0d8db]">{chapter.caption}</div>
                    </button>
                  ))}
                </div>
              </aside>

              <div className="p-6 sm:p-9">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                  <div className="order-2 sm:order-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.16em]" style={{ color: TOGETHA_REEL[walkthroughIndex].accent }}>
                      {TOGETHA_REEL[walkthroughIndex].eyebrow}
                    </div>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-white">{TOGETHA_REEL[walkthroughIndex].title}</h2>
                    <p className="mt-4 font-serif text-sm leading-relaxed text-[#b8c1c4]">{TOGETHA_REEL[walkthroughIndex].description}</p>
                    <div className="mt-5 flex items-start gap-2 rounded-[6px] border border-[#2c4c4f] bg-[#102023] p-3 text-xs leading-relaxed text-[#b9dce2]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1ba653]" />
                      <span>Every interaction is designed to make consent, pace, and support visible—not hidden behind a settings menu.</span>
                    </div>
                  </div>
                  <div className="order-1 flex justify-center sm:order-2">
                    <div className="max-h-[52vh] overflow-hidden rounded-[16px] border-[5px] border-[#293335] bg-[#0b0f10] p-1.5 shadow-2xl shadow-black/60">
                      <img
                        src={TOGETHA_REEL[walkthroughIndex].image}
                        alt={TOGETHA_REEL[walkthroughIndex].caption}
                        className="block max-h-[47vh] w-auto max-w-full rounded-[10px] object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#2d383a] pt-5">
                  <button
                    type="button"
                    onClick={() => setWalkthroughIndex((current) => Math.max(0, current - 1))}
                    disabled={walkthroughIndex === 0}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b8c1c4] transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </button>
                  {walkthroughIndex === TOGETHA_REEL.length - 1 ? (
                    <a
                      href="#contact"
                      onClick={() => {
                        setRequestType("demo");
                        setWalkthroughOpen(false);
                      }}
                      className="inline-flex items-center gap-2 rounded-[5px] bg-[#ef7723] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#de6700]"
                    >
                      Request a private demo <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setWalkthroughIndex((current) => Math.min(TOGETHA_REEL.length - 1, current + 1))}
                      className="inline-flex items-center gap-2 rounded-[5px] bg-[#136975] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0f5b65]"
                    >
                      Next moment <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

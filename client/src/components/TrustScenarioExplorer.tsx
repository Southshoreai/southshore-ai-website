import { useState, type ElementType } from "react";
import { AlertTriangle, HeartHandshake, MessageSquareWarning, Phone, ShieldCheck } from "lucide-react";

type Scenario = {
  label: string;
  title: string;
  body: string;
  memberControl: string;
  systemResponse: string;
  image: string;
  imageAlt: string;
  icon: ElementType;
  tone: "warning" | "coral" | "green" | "purple";
};

const scenarios: Scenario[] = [
  {
    label: "I want to share something personal",
    title: "A helpful pause before sharing a phone number or address.",
    body: "When a member types a phone number, email, or address in chat, Togetha can show a clear safety tip about taking more time before sharing personal details.",
    memberControl: "The member chooses: edit the message or send it anyway.",
    systemResponse: "The tool offers guidance. It does not turn adult choice into a hidden block.",
    image: "08-safety-tip-in-chat.png",
    imageAlt: "Togetha chat screen showing an inline safety tip about sharing personal information.",
    icon: AlertTriangle,
    tone: "warning",
  },
  {
    label: "Someone asks me for money",
    title: "Money and gift-card requests are held for human review.",
    body: "Pattern-based safety rules can hold a message asking for money or gift cards before the member sees it, so a trained person can review the concern.",
    memberControl: "The safety process protects the member from a risky request before it reaches their conversation.",
    systemResponse: "The review is human-accountable and safety actions are recorded in a permanent audit trail.",
    image: "09-message-held-for-review.png",
    imageAlt: "Togetha message screen showing a money request held for moderator review.",
    icon: ShieldCheck,
    tone: "coral",
  },
  {
    label: "I need help now",
    title: "Help is easy to find on every member screen.",
    body: "A persistent Help action gives clear choices when a member feels unsafe: call 911 first, reach personal safety contacts, use 988, or find the Massachusetts DPPC hotline.",
    memberControl: "The member can reach the help they need without searching through menus.",
    systemResponse: "Clear emergency options are always visible; the site never treats a digital feature as a replacement for emergency services.",
    image: "10-help.png",
    imageAlt: "Togetha help screen with emergency and personal support options.",
    icon: Phone,
    tone: "warning",
  },
  {
    label: "I want supporter help",
    title: "Support can be invited, scoped, and removed by the member.",
    body: "A member can invite a trusted supporter, choose Co-Pilot, Shadow, or Full Delegate support, and remove that access at any time.",
    memberControl: "The member chooses the person, the level of help, and which conversations remain private.",
    systemResponse: "Supporter access is a consent-based tool—not a default supervision layer.",
    image: "12-my-supporters.png",
    imageAlt: "Togetha supporter permissions screen with member-controlled support roles.",
    icon: HeartHandshake,
    tone: "purple",
  },
  {
    label: "I need to report something",
    title: "Report, block, mute, or end a conversation.",
    body: "Members can walk away without anyone’s permission. When an item is reported, moderators see the reported item and reason—not an entire private conversation.",
    memberControl: "The member can decide to report, block, mute, or end a conversation at any time.",
    systemResponse: "The safety team works from scoped information and records the action for accountability.",
    image: "20-moderator-safety-queue.png",
    imageAlt: "Togetha moderator queue showing scoped safety-review items.",
    icon: MessageSquareWarning,
    tone: "green",
  },
];

const toneClasses = {
  warning: "border-togetha-warning/40 bg-togetha-warning/15 text-[#F08A83]",
  coral: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
  green: "border-togetha-greenLight/40 bg-togetha-green/15 text-togetha-greenLight",
  purple: "border-togetha-purpleLight/40 bg-togetha-purple/15 text-togetha-purpleLight",
};

export function TrustScenarioExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScenario = scenarios[activeIndex];
  const ActiveIcon = activeScenario.icon;

  return (
    <section className="glass-panel rounded-3xl border border-white/10 p-5 sm:p-8 lg:p-10" aria-labelledby="trust-scenarios-title">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-mono uppercase tracking-wider text-brand-tealLight">The Trust Center</p>
        <h2 id="trust-scenarios-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What happens if…?</h2>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">Safety should be easy to understand before anyone needs it. Choose a moment to see the member’s options and the system response.</p>
      </div>

      <div className="brand-control-group mt-7 flex gap-2 overflow-x-auto rounded-2xl p-1.5" aria-label="Trust Center scenarios">
        {scenarios.map((scenario, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={scenario.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`brand-control min-w-max rounded-xl px-3 py-2.5 text-left text-xs font-semibold ${isActive ? "brand-control-active" : ""}`}
            >
              {scenario.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]" aria-live="polite">
        <div className="space-y-5">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono ${toneClasses[activeScenario.tone]}`}>
            <ActiveIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Scenario {activeIndex + 1} of {scenarios.length}
          </div>
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{activeScenario.title}</h3>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{activeScenario.body}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-togetha-purpleLight/25 bg-togetha-purple/10 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-togetha-purpleLight">What stays with the member</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100">{activeScenario.memberControl}</p>
            </div>
            <div className="rounded-2xl border border-brand-tealLight/25 bg-brand-teal/10 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-brand-tealLight">How the system responds</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100">{activeScenario.systemResponse}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-white/15 bg-black/40 p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#F4F0FF] p-2">
            <img src={`/screenshots/${activeScenario.image}`} alt={activeScenario.imageAlt} className="mx-auto max-h-[33rem] w-auto rounded-xl object-contain" />
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">Captured from the working build; names and interactions are demo data.</p>
        </div>
      </div>
    </section>
  );
}

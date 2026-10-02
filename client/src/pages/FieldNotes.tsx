import { useState } from "react";
import { BookOpenText, CalendarDays, ChevronRight, Quote, ShieldCheck } from "lucide-react";

const notes = [
  {
    title: "What 69 adults told us about connection",
    deck: "Need is not the question. Access is.",
    summary: "The Hopeful Hearts survey asked autistic adults and adults with intellectual and developmental disabilities about friendship, dating, relationships, and the barriers that make connection harder.",
    body: ["Of the 69 adults surveyed in August 2026, 95% said they want friendship, dating, or a romantic relationship. That is the clearest starting point: the desire for connection is already there.", "The work is therefore not about persuading people to want relationships. It is about building calmer, safer, more supported ways to pursue them—at a member’s own pace."],
    sources: ["Hopeful Hearts Dating, Friendship & Relationships Survey · 69 adults · August 2026"],
  },
  {
    title: "Why pacing is a safety feature",
    deck: "Less pressure can create more choice.",
    summary: "Survey results point toward confidence and anxiety as bigger barriers than technology itself, informing a product choice to pace discovery rather than endlessly accelerate it.",
    body: ["In the survey, 45% of respondents said confidence or anxiety gets in the way of forming relationships, while 12% said technology is difficult. That gap matters.", "Togetha’s working build caps profile discovery at ten per day by default and presents options one at a time. This is not about limiting adult choice. It is about creating the conditions in which choice can feel manageable."],
    sources: ["Hopeful Hearts Dating, Friendship & Relationships Survey · August 2026", "Verified working build · paced profile discovery"],
  },
  {
    title: "What a supporter can—and cannot—do",
    deck: "Help is chosen, scoped, and revocable.",
    summary: "Supporter-assisted access should make a member’s choices easier to act on, not turn a supporter into the default decision-maker.",
    body: ["Togetha lets a member invite a trusted supporter and choose a Co-Pilot, Shadow, or Full Delegate role. The member can remove access at any time and can keep any conversation private from a supporter.", "Supporters may receive alerts about what happened, not the content of a private message. The important design question is not whether a person has help; it is whether they retain meaningful control over that help."],
    sources: ["Approved Togetha marketing brief · Supporters section", "Verified working build · supporter permissions"],
  },
  {
    title: "Why an app and a trained coach need each other",
    deck: "The platform is a beginning, not the whole program.",
    summary: "Technology can make connection more approachable between events, but it does not replace the human practice of coaching, learning, and meeting people in person.",
    body: ["The human program includes trained, paid dating coaches, relationship skills workshops, and in-person matching events. The working platform gives members a calmer way to meet people between those opportunities.", "Pilot evidence is encouraging but must be understood in context: 90% of pilot attendees made at least one friendship match and four couples were dating. Those were small events, not a claim about platform-wide outcomes."],
    sources: ["DDS presentation · September 2026", "Pilot event context: small events"],
  },
  {
    title: "How privacy works when safety matters",
    deck: "Useful safety should not become quiet surveillance.",
    summary: "Togetha distinguishes a safety tip, a held money request, an emergency help route, a report, and supporter access because each situation calls for a different response.",
    body: ["When a member starts to share a phone number or address, the working build can offer a safety tip and clear choices to edit the message or send it anyway. Messages asking for money or gift cards are held for a trained person to review before the recipient sees them.", "Members can report, block, mute, or end a conversation. Moderators see the reported item and reason, not a whole private conversation. Safety actions are recorded to support accountability."],
    sources: ["Approved Togetha marketing brief · Safety section", "Verified working build · Safety and moderation screens"],
  },
];

export const FieldNotes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = notes[activeIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <section className="max-w-4xl space-y-4"><span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">Founder’s field notes</span><h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Short notes from building a better way in.</h1><p className="text-lg text-slate-300 font-serif leading-relaxed">A small editorial library about the evidence, choices, and operating principles behind Togetha. Each note names its author, sources, date, and public status.</p></section>

      <section className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]" aria-label="Togetha field notes">
        <div className="space-y-2">{notes.map((note, index) => <button key={note.title} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} className={`w-full rounded-2xl border p-4 text-left transition-colors ${activeIndex === index ? "border-togetha-purpleLight/65 bg-brand-slate shadow-lg" : "border-white/10 bg-white/[0.035] hover:border-brand-tealLight/45 hover:bg-white/[0.07]"}`}><p className="text-sm font-bold text-white">{note.title}</p><p className="mt-1 text-xs text-slate-400">{note.deck}</p></button>)}</div>
        <article className="rounded-3xl border border-white/10 bg-[#111B36] p-6 sm:p-8" aria-live="polite">
          <div className="flex items-center gap-2 text-togetha-purpleLight"><BookOpenText className="h-5 w-5" /><span className="text-xs font-mono uppercase tracking-wider">Field note {activeIndex + 1} of {notes.length}</span></div>
          <h2 className="mt-5 text-3xl font-bold text-white">{active.title}</h2><p className="mt-2 text-lg font-serif text-slate-200">{active.deck}</p>
          <p className="mt-6 text-sm leading-relaxed text-slate-300">{active.summary}</p>
          <div className="mt-6 space-y-4 border-t border-white/10 pt-6">{active.body.map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-slate-100 font-serif">{paragraph}</p>)}</div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-brand-tealLight/20 bg-brand-teal/10 p-4"><p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-brand-tealLight"><CalendarDays className="h-3.5 w-3.5" /> Published</p><p className="mt-2 text-sm text-white">October 1, 2026</p><p className="mt-1 text-xs text-slate-300">By South Shore AI &amp; Togetha team</p></div><div className="rounded-2xl border border-brand-orange/25 bg-brand-orange/10 p-4"><p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-brand-orange"><ShieldCheck className="h-3.5 w-3.5" /> Public status</p><p className="mt-2 text-sm leading-relaxed text-white">Working version preparing for supervised volunteer testing; not open for public account creation.</p></div></div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4"><p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400"><Quote className="h-3.5 w-3.5 text-togetha-purpleLight" /> Sources and scope</p><ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-300">{active.sources.map((source) => <li key={source}>• {source}</li>)}</ul></div>
        </article>
      </section>
      <p className="flex items-center gap-2 text-xs text-slate-400"><ChevronRight className="h-3.5 w-3.5 text-brand-tealLight" /> New notes will be added only when their facts, citations, and public wording are reviewed.</p>
    </div>
  );
};

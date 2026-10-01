import { MessageCircleHeart, Quote, Sparkles } from "lucide-react";

const voices = [
  {
    quote: "I loved how Demi came on the 1st date and helped initiate the first date and helped with what to say and it was nice meeting new people but I wish the dating pilot continued cause a lot of these kids need help and extra support.",
    attribution: "Natalie",
    role: "Participant in Pilot 2",
    context: "Hopeful Hearts · Massachusetts DDS · September 2026",
    tone: "purple",
  },
  {
    quote: "I believe this project is a worthwhile and potentially life-changing action and I am confident that, with continuing support from funders and committed partners, it will flourish.",
    attribution: "Pat Carney",
    role: "DDS Central West Region Director of Learning & Development, retired",
    context: "Excerpt from a broader statement in the DDS Commissioner presentation · September 2026",
    tone: "teal",
  },
];

export function VoicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="voices-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111B36] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-togetha-purple/20 blur-[96px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-teal/20 blur-[96px]" />

        <div className="relative">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-togetha-purpleLight">
              <MessageCircleHeart className="h-3.5 w-3.5" aria-hidden="true" />
              Voices from the work
            </p>
            <h2 id="voices-title" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">
              Connection is not a feature request. It is a human need.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              These reflections are published with permission. They help explain why the framework joins a working platform with human support and real-world opportunities to meet.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {voices.map((voice) => (
              <figure
                key={voice.attribution}
                className={`relative flex min-h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  voice.tone === "purple"
                    ? "border-togetha-purpleLight/30 bg-togetha-purple/10"
                    : "border-brand-tealLight/30 bg-brand-teal/10"
                }`}
              >
                <Quote className={`h-8 w-8 ${voice.tone === "purple" ? "text-togetha-purpleLight" : "text-brand-tealLight"}`} aria-hidden="true" />
                <blockquote className="mt-4 text-lg font-semibold leading-relaxed text-white sm:text-xl">
                  “{voice.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{voice.attribution}</p>
                  <p className="mt-1 text-sm text-slate-200">{voice.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{voice.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
            <Sparkles className="h-3.5 w-3.5 text-brand-tealLight" aria-hidden="true" />
            Direct quotes are shown exactly as spoken or written, with permission.
          </p>
        </div>
      </div>
    </section>
  );
}

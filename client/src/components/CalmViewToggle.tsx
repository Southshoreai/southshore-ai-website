import { Accessibility, Sparkles } from "lucide-react";
import { useCalmView } from "@/contexts/CalmViewContext";

export function CalmViewToggle() {
  const { isCalmView, toggleCalmView } = useCalmView();

  return (
    <button
      type="button"
      onClick={toggleCalmView}
      aria-pressed={isCalmView}
      aria-label={`${isCalmView ? "Turn off" : "Turn on"} Calm View`}
      className={`calm-view-toggle inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-bold transition-colors sm:gap-2 sm:px-3 sm:text-sm ${
        isCalmView
          ? "border-togetha-greenLight/70 bg-togetha-green text-white"
          : "border-brand-tealLight/45 bg-brand-navy/90 text-slate-100 hover:border-togetha-purpleLight hover:bg-brand-slate"
      }`}
    >
      {isCalmView ? <Accessibility className="h-4 w-4" aria-hidden="true" /> : <Sparkles className="h-4 w-4" aria-hidden="true" />}
      <span className="hidden sm:inline">Calm View</span>
      <span className="sm:hidden">Calm</span>
      <span className="hidden rounded-full border border-current/25 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide md:inline">
        {isCalmView ? "On" : "Off"}
      </span>
    </button>
  );
}

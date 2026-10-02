import { CheckCircle2, VolumeX } from "lucide-react";
import { useCalmView } from "@/contexts/CalmViewContext";

export function CalmViewNotice() {
  const { isCalmView } = useCalmView();

  if (!isCalmView) return null;

  return (
    <div className="calm-view-notice" role="status" aria-live="polite">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <span className="calm-view-notice__icon" aria-hidden="true">
          <VolumeX className="h-4 w-4" />
        </span>
        <div className="min-w-0 text-sm leading-relaxed">
          <p className="font-bold">Calm View is on</p>
          <p className="text-xs sm:text-sm">Less motion, fewer visual effects, and quieter reading surfaces are active across the site.</p>
        </div>
        <CheckCircle2 className="ml-auto mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
}

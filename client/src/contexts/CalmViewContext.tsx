import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "ssai-calm-view";

type CalmViewContextValue = {
  isCalmView: boolean;
  toggleCalmView: () => void;
};

const CalmViewContext = createContext<CalmViewContextValue | undefined>(undefined);

function readStoredPreference() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function CalmViewProvider({ children }: { children: ReactNode }) {
  const [isCalmView, setIsCalmView] = useState(readStoredPreference);

  useEffect(() => {
    const root = document.documentElement;

    if (isCalmView) {
      root.dataset.calmView = "true";
    } else {
      delete root.dataset.calmView;
    }

    window.localStorage.setItem(STORAGE_KEY, String(isCalmView));
  }, [isCalmView]);

  const value = useMemo(
    () => ({
      isCalmView,
      toggleCalmView: () => setIsCalmView((current) => !current),
    }),
    [isCalmView],
  );

  return <CalmViewContext.Provider value={value}>{children}</CalmViewContext.Provider>;
}

export function useCalmView() {
  const context = useContext(CalmViewContext);

  if (!context) {
    throw new Error("useCalmView must be used within CalmViewProvider");
  }

  return context;
}

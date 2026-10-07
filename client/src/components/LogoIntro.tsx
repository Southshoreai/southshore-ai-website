import React, { useEffect, useState } from 'react';

const INTRO_KEY = 'ssai-logo-intro-seen';

export const LogoIntro: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = window.sessionStorage.getItem(INTRO_KEY) === 'true';

    if (reducedMotion || hasSeenIntro) return;

    setVisible(true);
    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem(INTRO_KEY, 'true');
      setVisible(false);
    }, 2200);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="ssai-logo-intro" aria-hidden="true">
      <div className="ssai-logo-intro__lockup">
        <img src="/resources/assets/ssai-lockup-inverted.svg" alt="" />
        <span>Practical AI for real work</span>
      </div>
    </div>
  );
};

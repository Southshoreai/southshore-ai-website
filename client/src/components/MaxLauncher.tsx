import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { MaxConversation } from '@/components/MaxConversation';

export const MaxLauncher: React.FC = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const closePanel = () => {
    setIsOpen(false);
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) closePanel();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  if (location === '/max') return null;

  return (
    <div className="max-launcher">
      {isOpen && (
        <div id="max-launcher-panel" className="max-launcher__panel" role="dialog" aria-modal="false" aria-label="Talk with Max">
          <MaxConversation variant="panel" onClose={closePanel} />
        </div>
      )}
      <button ref={launcherRef} type="button" className="max-launcher__button" onClick={() => (isOpen ? closePanel() : setIsOpen(true))} aria-expanded={isOpen} aria-controls="max-launcher-panel" aria-haspopup="dialog">
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <MessageCircle className="h-5 w-5" aria-hidden="true" />}
        <span>{isOpen ? 'Close Max' : 'Talk with Max'}</span>
      </button>
    </div>
  );
};

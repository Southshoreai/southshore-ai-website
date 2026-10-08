import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { MaxConversation } from '@/components/MaxConversation';

export const MaxLauncher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="max-launcher">
      {isOpen && (
        <div className="max-launcher__panel" role="dialog" aria-modal="false" aria-label="Talk with Max">
          <MaxConversation variant="panel" onClose={() => setIsOpen(false)} />
        </div>
      )}
      <button type="button" className="max-launcher__button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-haspopup="dialog">
        {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <MessageCircle className="h-5 w-5" aria-hidden="true" />}
        <span>{isOpen ? 'Close Max' : 'Talk with Max'}</span>
      </button>
    </div>
  );
};

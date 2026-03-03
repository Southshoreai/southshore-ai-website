import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check session storage on mount
    const hasSeen = sessionStorage.getItem("hasSeenNewsletter");
    
    if (!hasSeen) {
      // Add a slight delay before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark as seen as soon as it's opened, so if the iframe redirects the top level page upon submission,
        // it won't show up again when it reloads.
        sessionStorage.setItem("hasSeenNewsletter", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Embed the required script for the form when the popup is open
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Extra safety, ensure it's set
    sessionStorage.setItem("hasSeenNewsletter", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Darkened background overlay with blur effect */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-xl bg-background rounded-xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-300 border border-white/10">
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 bg-black/20 hover:bg-black/40 text-gray-400 hover:text-white rounded-full transition-all z-20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="w-full pt-10 px-4 pb-4 bg-white">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/q4Cy4rTD09A2MLJQpI4q"
            style={{ width: "100%", height: "348px", border: "none", borderRadius: "4px" }}
            id="popup-q4Cy4rTD09A2MLJQpI4q" 
            data-form-name="South Shore AI Newsletter Form"
            data-height="348"
            data-layout-iframe-id="popup-q4Cy4rTD09A2MLJQpI4q"
            data-form-id="q4Cy4rTD09A2MLJQpI4q"
            title="South Shore AI Newsletter Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

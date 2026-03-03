import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. The "Stop" Trigger via URL parameter
    // If the form redirects back with ?status=success, we mark as signed up
    const params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") {
      localStorage.setItem("hasSignedUp", "true");
    }

    // 2. Suppression: Check if user has already signed up
    const hasSignedUp = localStorage.getItem("hasSignedUp");
    
    // 3. Visibility: Show if they haven't signed up
    if (!hasSignedUp) {
      // Add a slight delay before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // 1. The "Stop" Trigger via form interaction
    const handleMessage = (event: MessageEvent) => {
      // Try to detect form submission events from the LeadConnector iframe
      if (event.data) {
        let isSuccess = false;
        
        if (typeof event.data === 'string' && 
           (event.data.includes('form-submit') || event.data.includes('form_submitted'))) {
          isSuccess = true;
        } else if (typeof event.data === 'object') {
          const type = event.data.type || event.data.event || event.data.message;
          if (type && typeof type === 'string' && 
             (type.includes('submit') || type.includes('success'))) {
            isSuccess = true;
          }
        }

        if (isSuccess) {
          localStorage.setItem("hasSignedUp", "true");
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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
    // Note: We DO NOT set 'hasSignedUp' here. This ensures the popup will 
    // appear again on the next visit/reload if they haven't submitted it.
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
      <div className="relative w-full max-w-xl bg-background rounded-xl shadow-2xl overflow-hidden z-[101] animate-in fade-in zoom-in-95 duration-300 border border-white/10">
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 bg-black/5 hover:bg-black/10 text-gray-500 hover:text-black rounded-full transition-all z-20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="w-full pt-10 px-4 pb-4 bg-white">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/q4Cy4rTD09A2MLJQpI4q"
            style={{ width: "100%", height: "450px", border: "none", borderRadius: "4px" }}
            id="popup-q4Cy4rTD09A2MLJQpI4q" 
            data-form-id="q4Cy4rTD09A2MLJQpI4q"
            title="South Shore AI Newsletter Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

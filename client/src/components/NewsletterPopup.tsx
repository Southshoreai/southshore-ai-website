import { useState, useEffect } from "react";

export function NewsletterPopup() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // 1. The "Stop" Trigger via URL parameter
    // If the form redirects back with ?status=success, we mark as signed up
    const params = new URLSearchParams(window.location.search);
    if (params.get("status") === "success") {
      localStorage.setItem("hasSignedUp", "true");
    }

    // 2. Suppression: Check if user has already signed up
    const hasSignedUp = localStorage.getItem("hasSignedUp");
    
    // 3. Visibility: Render if they haven't signed up
    if (!hasSignedUp) {
      setShouldShow(true);
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
          setShouldShow(false);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (shouldShow) {
      // Embed the required script for the form when the popup should be shown
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
  }, [shouldShow]);

  if (!shouldShow) return null;

  // Render the exact embed code provided. LeadConnector's JS will handle the popup rendering
  // based on the data attributes below (like data-trigger-type="showAfter").
  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/q4Cy4rTD09A2MLJQpI4q"
      style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
      id="popup-q4Cy4rTD09A2MLJQpI4q" 
      data-layout='{"id":"POPUP"}'
      data-trigger-type="showAfter"
      data-trigger-value="3"
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="South Shore AI Newsletter Form"
      data-height="348"
      data-layout-iframe-id="popup-q4Cy4rTD09A2MLJQpI4q"
      data-form-id="q4Cy4rTD09A2MLJQpI4q"
      title="South Shore AI Newsletter Form"
    ></iframe>
  );
}

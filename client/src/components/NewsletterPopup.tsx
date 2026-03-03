import { useEffect } from "react";

export function NewsletterPopup() {
  useEffect(() => {
    // Only add the script if it doesn't already exist
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/q4Cy4rTD09A2MLJQpI4q"
      style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
      id="popup-q4Cy4rTD09A2MLJQpI4q" 
      data-layout="{'id':'POPUP'}"
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
    />
  );
}

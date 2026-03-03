const fs = require('fs');
let code = fs.readFileSync('client/src/pages/contact.tsx', 'utf8');

const regex = /const ContactFormSection = \(\) => \{[\s\S]*?^\};\n/m;
const match = code.match(regex);
if (match) {
  const newComponent = `const ContactFormSection = () => {
  return (
    <section className="py-20 container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-card p-4 md:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3 text-center">
            Book Your Free Growth Audit
          </h2>
          <div className="h-[700px] w-full" style={{minWidth: '320px'}}>
            <iframe
              src="https://calendly.com/scottpralinsky/30-minute-meeting?embed_domain=&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
`;
  code = code.replace(regex, newComponent);
  fs.writeFileSync('client/src/pages/contact.tsx', code);
  console.log("Replacement successful");
} else {
  console.log("Component not found");
}

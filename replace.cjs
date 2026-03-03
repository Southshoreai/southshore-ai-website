const fs = require('fs');
let code = fs.readFileSync('client/src/pages/contact.tsx', 'utf8');

const regex = /const ContactFormSection = \(\) => \{[\s\S]*?^\};\n/m;
const match = code.match(regex);
if (match) {
  const newComponent = `const ContactFormSection = () => {
  return (
    <section className="py-20 container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Grow Your Business?
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Book your free growth audit with Scott and discover how AI can transform your operations.
        </p>
        <a 
          href="https://calendly.com/scottpralinsky/30-minute-meeting" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/80 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          Book Your Free Growth Audit Now
        </a>
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

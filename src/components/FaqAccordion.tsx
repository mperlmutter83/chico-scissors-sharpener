"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How often should I have my scissors sharpened?",
    a: "For optimal performance, we recommend having your scissors sharpened every 3-6 months, depending on usage frequency.",
  },
  {
    q: "What types of scissors do you sharpen?",
    a: "We specialize in sharpening all types of salon and barber scissors, including shears and thinning scissors.",
  },
  {
    q: "How long does the sharpening process take?",
    a: "Typically, the sharpening process takes about 24 to 48 hours from the time we receive your scissors.",
  },
  {
    q: "Do you offer a guarantee on your sharpening services?",
    a: "Yes, we offer a satisfaction guarantee. If you're not happy with the sharpening, we'll re-sharpen your scissors at no additional cost.",
  },
  {
    q: "Can I mail my scissors to you for sharpening?",
    a: "Absolutely! We offer a convenient mail-in service. Simply send us your scissors, and we'll return them sharpened and ready to use.",
  },
  {
    q: "What is the cost of your sharpening services?",
    a: "Our sharpening services start at $25 per pair of scissors. Prices may vary based on the type and condition of the scissors.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {faqs.map((f, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-ink">{f.q}</span>
            <span className="text-teal-brand text-xl ml-4">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="pb-5 text-neutral-600 leading-relaxed">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

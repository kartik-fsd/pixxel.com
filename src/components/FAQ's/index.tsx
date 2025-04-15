import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { FAQ } from "../../types/overview";

interface VenueFAQProps {
  faqs: FAQ[];
}

export default function VenueFAQ({ faqs }: VenueFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-semibold">{faq.question}</span>
            {activeIndex === index ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {activeIndex === index && (
            <div className="px-6 py-4 bg-secondary">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

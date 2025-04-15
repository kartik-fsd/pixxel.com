import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

// This would normally come from your constants file
// or would be provided via props from the service
const defaultFAQs: FAQItem[] = [
  {
    question: "How far in advance should I book my photoshoot?",
    answer:
      "We recommend booking at least 2-4 weeks in advance to ensure availability, especially during weekends and peak seasons. For special dates or holidays, booking 1-2 months ahead is advisable.",
  },
  {
    question: "How many photos will I receive?",
    answer:
      "Our standard packages include 50+ professionally edited photos. The exact number varies depending on the package chosen, but we always ensure you receive a comprehensive collection that tells your story beautifully.",
  },
  {
    question: "How long until I receive my photos?",
    answer:
      "You'll receive a sneak peek of 5-10 photos within 48 hours after your shoot. The complete set of edited images will be delivered within 7-10 business days via a private online gallery.",
  },
  {
    question: "Can I bring outfit changes?",
    answer:
      "Absolutely! We encourage 2-3 outfit changes to add variety to your photos. Our studio has private changing areas, and our team can provide styling advice to help you select outfits that complement our setups.",
  },
  {
    question: "Do you offer makeup and styling services?",
    answer:
      "While we don't have in-house makeup artists, we can recommend trusted professionals in Nagpur who work well with our photography style. This service can be added to your package for an additional fee.",
  },
  {
    question: "What if I need to reschedule my shoot?",
    answer:
      "We understand plans can change. You can reschedule your shoot with at least 48 hours notice at no additional cost. Last-minute reschedules (less than 48 hours) may incur a small fee to cover operational costs.",
  },
  {
    question: "Do you travel to locations outside your studio?",
    answer:
      "Yes, we offer location shoots throughout Nagpur and surrounding areas. Travel fees may apply depending on the distance. We're also available for destination shoots with appropriate travel arrangements.",
  },
  {
    question:
      "Can I purchase additional edited photos beyond what's included in my package?",
    answer:
      "Yes, additional edited photos can be purchased individually or in bundles. We'll present all the best images from your shoot in a private gallery where you can select any extras you'd like.",
  },
];

interface ServiceFAQProps {
  service: {
    slug: string;
    title: string;
    faqs?: FAQItem[];
  };
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Use service-specific FAQs if available, otherwise use default FAQs
  const faqs = service.faqs || defaultFAQs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={`faq-${index}`}
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Have more questions? We're here to help!
        </p>
        <a
          href="/contact"
          className="inline-flex items-center mt-2 text-primary hover:text-primary/80 font-medium"
        >
          Contact us for more information
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

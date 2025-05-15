import { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string | { morning: string; evening: string };
  duration: string;
  features: string[];
  popular?: boolean;
}

// Pricing plans from your packages page
const actualPricingPlans: PricingPlan[] = [
  {
    name: "Silver",
    price: "₹7,999",
    duration: "4 Hour Shoot",
    features: [
      "Basic Studio Access",
      "Changing Room Access",
      "Standard Lighting",
      "Location Access",
    ],
  },
  {
    name: "Gold",
    price: "₹9,999*",
    duration: "6 Hour Shoot",
    features: [
      "Full Studio Access",
      "Props Included",
      "Special Effects",
      "Premium Lighting",
      "All Location Access",
    ],
    popular: true,
  },
  {
    name: "Diamond",
    price: "₹11,999*",
    duration: "8 Hour Shoot",
    features: [
      "Premium Studio Access",
      "All Props & Equipment",
      "Special Effects",
      "Premium Lighting",
      "VIP Treatment",
    ],
  },
  {
    name: "Premium",
    price: "₹15,999*",
    duration: "12 Hour Shoot",
    features: [
      "Professional Props & Equipment",
      "Dedicated Changing/Make-Up Room",
      "Smoke Machine & Effects",
      "Premium Lighting Setup",
      "Access to All Sets & Locations",
    ],
  },
];

// Important notes from the packages page
const importantNotes = [
  "Extra Room: ₹1,000 per room",
  "24 Water bottles (300ml) included",
  "Maximum 8 people per booking",
  "₹1,000 per additional person",
  "Photographer not included",
  "₹2,000 refundable security deposit",
];

interface ServicePricingProps {
  service: {
    slug: string;
    title: string;
    pricingPlans?: PricingPlan[];
  };
}

export function ServicePricing({ service }: ServicePricingProps) {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  // Show only 3 most relevant packages for regular service pages
  // Unless service-specific pricing is provided
  const pricingPlans = service.pricingPlans || actualPricingPlans.slice(0, 3);

  const tooltips = [
    "Our packages include studio access with professional lighting and setups.",
    "All packages include access to your chosen themed setups for photography.",
    "Special effects include smoke machines, specialized lighting, and more.",
    "Water bottles, changing room access, and basic amenities included in all packages.",
    "Note: Photographer services are not included in these studio rental packages.",
  ];

  const showTooltip = (index: number) => {
    setActiveTooltip(index);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={`plan-${index}`}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? "border-2 border-primary shadow-lg"
                : "border border-gray-200"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {plan.duration} - Perfect for {service.title} shoots
                </p>
              </div>

              <div>
                {typeof plan.price === "string" ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      per session
                    </span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold text-gray-900">
                        Morning: {plan.price.morning}
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold text-gray-900">
                        Evening: {plan.price.evening}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      *Prices vary by time slot
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={`feature-${index}-${featureIndex}`}
                    className="flex items-start"
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-600">{feature}</span>

                    {featureIndex % 2 === 0 &&
                      featureIndex < tooltips.length && (
                        <div className="relative ml-1">
                          <button
                            className="text-gray-400 hover:text-gray-600"
                            onMouseEnter={() => showTooltip(featureIndex)}
                            onMouseLeave={hideTooltip}
                            onFocus={() => showTooltip(featureIndex)}
                            onBlur={hideTooltip}
                            aria-label="More information"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </button>

                          {activeTooltip === featureIndex && (
                            <div className="absolute z-10 w-64 p-3 bg-white shadow-lg rounded-lg border border-gray-200 text-sm text-gray-700 -left-[280px] top-0">
                              {tooltips[featureIndex]}
                            </div>
                          )}
                        </div>
                      )}
                  </li>
                ))}
              </ul>

              <a
                href="/contact#booking"
                className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Book {plan.name} Package
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Important Notes Section */}
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Important Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {importantNotes.map((note, index) => (
            <div key={`note-${index}`} className="flex items-start">
              <span className="text-primary text-xl mr-2">✦</span>
              <p className="text-gray-600 text-sm">{note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Custom Packages Available
        </h3>
        <p className="text-gray-600">
          Need something specific for your {service.title.toLowerCase()} shoot?
          We offer custom packages tailored to your unique requirements. Contact
          us to discuss your vision and we'll create a personalized package just
          for you.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center mt-4 text-primary hover:text-primary/80 font-medium"
        >
          Contact for custom quote
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

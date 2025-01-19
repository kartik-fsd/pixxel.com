import { motion } from "framer-motion";
import React from "react";

interface PackageCardProps {
  title: string;
  price: string | { morning: string; evening: string };
  duration: string;
  features: string[];
  highlight?: boolean;
  className?: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  duration,
  features,
  highlight = false,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`relative ${className}`}
    >
      <div
        className={`
        bg-[#FFFFFF] rounded-2xl p-8 
        ${highlight ? "shadow-[0_0_40px_rgba(0,0,0,0.1)]" : "shadow-lg"}
        ${highlight ? "border-2 border-primary" : "border border-muted"}
      `}
      >
        {highlight && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#2D3047]">{title}</h3>
          <p className="text-gray-500 mt-2">{duration}</p>
        </div>

        <div className="text-center mb-8">
          {typeof price === "string" ? (
            <p className="text-3xl font-bold text-primary">{price}</p>
          ) : (
            <>
              <p className="text-xl font-bold text-primary">
                Morning: {price.morning}
              </p>
              <p className="text-xl font-bold text-primary mt-1">
                Evening: {price.evening}
              </p>
            </>
          )}
        </div>

        <motion.ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full mt-8 py-3 rounded-xl font-medium transition-colors
            ${
              highlight
                ? "bg-primary text-primary-foreground hover:bg-primary/80"
                : "bg-[#2D3047] text-primary-foreground hover:bg-[#424867]"
            }
          `}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

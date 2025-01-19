import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  venueImage: string;
  setName: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Featured Image */}
          <motion.div
            className="lg:col-span-7 relative rounded-3xl overflow-hidden group h-[500px]"
            layoutId="featured-image"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={testimonials[activeIndex].venueImage}
                  alt={testimonials[activeIndex].setName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Set Name Overlay */}
                <motion.div
                  className="absolute bottom-8 left-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold mb-2">
                    {testimonials[activeIndex].setName}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-white/20 hover:bg-primary transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-white/20 hover:bg-primary transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Testimonial Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-gray-50 rounded-3xl p-8 relative">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gold-dark opacity-20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="border-l-4 border-primary/70 pl-4">
                    <h4 className="font-bold text-xl">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-primary">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary/80" : "bg-gray-200"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;

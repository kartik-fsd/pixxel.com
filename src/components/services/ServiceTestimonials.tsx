import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  avatar?: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

// Default testimonials that would be replaced with actual data
const defaultTestimonials: Testimonial[] = [
  {
    name: "Priya & Rahul",
    location: "Nagpur",
    rating: 5,
    text: "Our pre-wedding shoot at Pixxel City was truly memorable! The team was professional and made us comfortable throughout the session. The themed setups were stunning and unique. We absolutely love our photos and have received countless compliments from friends and family.",
    service: "pre-wedding",
  },
  {
    name: "Neha & Vikram",
    location: "Nagpur",
    rating: 5,
    text: "We celebrated our anniversary at Pixxel City and couldn't be happier with the experience. The French Cafe setup was exactly what we wanted, and the team went above and beyond to capture our special moments. The photos truly reflect our journey together.",
    service: "anniversary-shoot",
  },
  {
    name: "Amit & Ritu",
    location: "Nagpur",
    rating: 5,
    text: "The Retro Kitchen setup was perfect for our pre-wedding shoot! The attention to detail was impressive, and the photographers knew exactly how to make us look our best. The entire process from booking to receiving our photos was smooth and professional.",
    service: "pre-wedding",
  },
  {
    name: "Sanjay & Meera",
    location: "Nagpur",
    rating: 4,
    text: "We had our 10th anniversary photoshoot at Pixxel City and were impressed with the quality and creativity. The team was accommodating with our requests and helped us create beautiful memories. The only reason for 4 stars instead of 5 is that we wished the session could have been longer!",
    service: "anniversary-shoot",
  },
  {
    name: "Rohit & Ananya",
    location: "Nagpur",
    rating: 5,
    text: "The Mexican Street setup exceeded our expectations! The photographers captured not just posed shots but also candid moments that truly showcase our relationship. The props and lighting were perfect, and we received our photos faster than expected.",
    service: "pre-wedding",
  },
];

interface ServiceTestimonialsProps {
  service: {
    slug: string;
    title: string;
    testimonials?: Testimonial[];
  };
}

export function ServiceTestimonials({ service }: ServiceTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Filter testimonials for this service, or use all if none specific found
  const serviceTestimonials =
    service.testimonials ||
    defaultTestimonials.filter((t) => t.service === service.slug);

  const testimonials =
    serviceTestimonials.length > 0 ? serviceTestimonials : defaultTestimonials;

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Controls */}
      <div className="absolute z-10 left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <button
          onClick={prevTestimonial}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 pointer-events-auto"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextTestimonial}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 pointer-events-auto"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Testimonial Carousel */}
      <div className="overflow-hidden" ref={testimonialRef}>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="w-full flex-shrink-0 px-4"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`star-${i}`}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-gray-700 italic mb-8">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <span className="font-medium text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useTransition, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Lazy-load the GalleryGrid component
const GalleryGrid = lazy(() => import("./galleryGrid"));

// Animation Variants
export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const Gallery: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  const categories = ["all", "pre-wedding", "fashion", "nature", "traditional"];

  const handleFilterChange = (filter: string) => {
    startTransition(() => {
      setCurrentFilter(filter); // Render this in the background
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            Elite Photography Venues
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-center max-w-3xl mb-8 text-gray-200"
          >
            Discover Nagpur's Most Exclusive Locations for Premium Photography &
            Videography
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <ChevronLeft className="w-5 h-5" />
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  disabled={isPending}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                    currentFilter === category
                      ? "bg-primary text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <Suspense fallback={<div>Loading gallery...</div>}>
        <GalleryGrid filter={currentFilter} />
      </Suspense>
    </div>
  );
};

export default Gallery;

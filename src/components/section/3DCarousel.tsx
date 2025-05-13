import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Set {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface SimpleCarouselProps {
  sets: Set[];
}

export function SimpleCarousel({ sets }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate through slides
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sets.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sets.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (sets.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-lg">
      {/* Slide */}
      <div className="h-full w-full relative">
        <img
          src={sets[currentIndex].imageUrl}
          alt={sets[currentIndex].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{sets[currentIndex].title}</h3>
          <p className="text-sm text-white/90 max-w-lg mb-4">
            {sets[currentIndex].description}
          </p>

          <a
            href={`/sets/${sets[currentIndex].id}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            View Set
          </a>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-3 right-6 flex space-x-2">
          {sets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

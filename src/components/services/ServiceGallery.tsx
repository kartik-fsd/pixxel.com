import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Sample gallery images that would be provided per service
const sampleGalleryImages = [
  {
    src: "https://pixxelcity.com/wp-content/uploads/2024/05/Vipin-Photography-2-Retro-Kitchen-scaled.jpg",
    alt: "Couple in Retro Kitchen",
    category: "pre-wedding",
  },
  {
    src: "https://pixxelcity.com/wp-content/uploads/2024/11/IMG_20241108_181458_617.webp",
    alt: "Elegant Couple Photography",
    category: "pre-wedding",
  },
  {
    src: "https://pixxelcity.com/wp-content/uploads/2024/05/0C9A6819-scaled.jpg",
    alt: "Artistic Couple Portrait",
    category: "anniversary",
  },
  {
    src: "https://pixxelcity.com/wp-content/uploads/2024/11/Snapinsta.app_409177592_911120947024505_1519823328981384121_n_1080.jpg",
    alt: "Stylish Indoor Photography",
    category: "pre-wedding",
  },
  {
    src: "https://ik.imagekit.io/c54qkthzl/French-Cafe.jpeg",
    alt: "French Cafe Setup",
    category: "anniversary",
  },
  {
    src: "https://ik.imagekit.io/c54qkthzl/Melody-Piano.JPG",
    alt: "Melody Piano Setup",
    category: "pre-wedding",
  },
];

interface ServiceGalleryProps {
  service: {
    slug: string;
    title: string;
    gallery?: {
      src: string;
      alt: string;
      category?: string;
    }[];
  };
}

export function ServiceGallery({ service }: ServiceGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use provided gallery images or fallback to sample ones
  const galleryImages =
    service.gallery ||
    sampleGalleryImages.filter((img) => img.category === service.slug);

  // If no images found for this service, use all sample images
  const images = galleryImages.length > 0 ? galleryImages : sampleGalleryImages;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={`gallery-${index}`}
            className="cursor-pointer relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white z-10"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              className="absolute right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image display */}
            <motion.div
              key={`lightbox-${currentImageIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-[80vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white text-center">
                <p>{images[currentImageIndex].alt}</p>
                <p className="text-white/70 text-sm">
                  {currentImageIndex + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

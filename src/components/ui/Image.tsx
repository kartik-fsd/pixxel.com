import { useState } from "react";
import { cn } from "../../lib/utils";

interface Image {
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "overflow-hidden rounded-lg border-2 transition-all duration-200",
              selectedImage === index
                ? "border-primary"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

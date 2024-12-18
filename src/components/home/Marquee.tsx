import { motion } from "framer-motion";
import type { FC } from "react";

interface MarqueeImage {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

interface MarqueeProps {
  images: MarqueeImage[];
}

const ImageMarquee: FC<MarqueeProps> = ({ images }) => {
  // Create a duplicated array for seamless loop
  const marqueeImages = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden rounded-lg h-[300px]">
      <motion.div
        className="flex gap-4 absolute"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
      >
        {/* First set of images */}
        {marqueeImages.map((img, index) => (
          <motion.div
            key={`${img.category}-${index}`}
            className="relative flex-shrink-0 w-[300px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-foreground">
                {img.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageMarquee;

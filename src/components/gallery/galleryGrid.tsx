import React, { useState } from "react";
import { motion } from "framer-motion";
import galleryData from "../../data/galleryData.json";
import { fadeInUp } from "../animation/galleryAnimation";

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  location?: string;
  photographer?: string;
}

const GalleryGrid: React.FC<{ filter: string }> = ({ filter }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryData.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredItems.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeInUp}
          onClick={() => setSelectedImage(item as GalleryItem)}
          className="relative group cursor-pointer rounded-xl overflow-hidden bg-card aspect-[4/5]"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryGrid;

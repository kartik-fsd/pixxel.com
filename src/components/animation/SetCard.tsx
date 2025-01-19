import { motion } from "framer-motion";

interface Props {
  title: string;
  imageUrl: string;
  category?: string;
}

export default function SetCard({ title, imageUrl, category }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-6">
          {category && (
            <p className="text-sm font-medium text-primary mb-2">{category}</p>
          )}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

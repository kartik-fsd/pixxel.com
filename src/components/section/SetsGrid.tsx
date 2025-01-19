import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

interface Set {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: string;
}

interface SetsGridProps {
  sets: Set[];
}

export function SetsGrid({ sets }: SetsGridProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <img
                  src={set.imageUrl}
                  alt={set.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-block bg-primary/90 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                    {set.price}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {set.title}
                  </h3>
                  <span className="text-sm text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {set.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{set.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Available 24/7</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

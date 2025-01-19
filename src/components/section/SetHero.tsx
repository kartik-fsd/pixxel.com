import { motion } from "framer-motion";

interface SetHeroProps {
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
}

export function SetHero({ title, subtitle, category, imageUrl }: SetHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
            {category}
          </span>
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white/80">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

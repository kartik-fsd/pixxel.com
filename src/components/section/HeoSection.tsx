import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/373824810.sd.mp4?s=57fac7d5f5e1bd7e92093d1c83e0fb9f0a1e9fc9&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">
              Premium Photography Sets
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Where Vision Meets <span className="text-primary">Perfection</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover our curated collection of premium photography sets, each
            crafted to bring your creative vision to life.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Explore Sets
            </button>
            <button className="border border-primary/20 bg-primary/5 text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

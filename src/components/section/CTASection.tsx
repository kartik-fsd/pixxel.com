import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Book your session now and bring your creative vision to life in
                our premium photography sets.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2 group">
                Book Your Session
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

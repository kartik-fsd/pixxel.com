import { motion } from "framer-motion";
import { Calendar, ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 relative overflow-hidden bg-black">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#FF1F78]/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-black/90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center">
          {/* Special Offer Tag */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#FF1F78]/10 text-[#FF1F78] px-6 py-2 rounded-full mb-8 inline-flex items-center gap-2"
          >
            <Star className="w-4 h-4 fill-[#FF1F78]" />
            <span className="text-sm font-medium">Limited Time Offer</span>
            <Star className="w-4 h-4 fill-[#FF1F78]" />
          </motion.div>

          {/* Main CTA Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Begin Your Photography Journey Today
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book your session now and get 20% off on weekday shoots.
              Experience our premium sets and create unforgettable memories.
            </p>

            {/* Pricing and Booking Button */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl font-bold">Starting at ₹4,999</span>
                <span className="text-gray-400 line-through">₹6,999</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 bg-[#FF1F78] text-white px-8 py-4 rounded-full font-medium"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Session</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12"
          >
            {[
              { label: "Happy Clients", value: "500+" },
              { label: "Premium Sets", value: "15+" },
              { label: "Years Experience", value: "8+" },
              { label: "Perfect Shots", value: "10K+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-72 h-72 rounded-full bg-[#FF1F78]/5"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default CTASection;

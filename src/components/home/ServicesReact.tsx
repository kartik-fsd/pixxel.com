import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { SERVICES } from "../../utils/constants";

const PhotographyServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Simple but effective animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Simple fade for image transitions
  const imageFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full">
      {/* Page content with stylish background */}
      <div className="min-h-screen w-full relative bg-gradient-to-br from-secondary/40 via-background to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylish header with simple animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl font-display font-bold text-foreground/80 relative inline-block">
              <span className="relative">
                Premium Photo Services
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  className="absolute h-1 bg-primary bottom-0 left-0 rounded-full"
                />
              </span>
            </h1>
          </motion.div>

          {/* Clean main content layout */}
          <div className="w-full relative">
            {/* Top navigation - thumbnail gallery */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex space-x-4 justify-center my-5">
                  {SERVICES.map((service, idx) => (
                    <motion.div
                      key={service.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative cursor-pointer rounded-xl overflow-hidden ${
                        activeIndex === idx ? "ring-4 ring-primary" : ""
                      }`}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div
                            className={`p-2 rounded-full ${
                              activeIndex === idx ? "bg-primary" : "bg-white/20"
                            }`}
                          >
                            {React.createElement(service.icon, {
                              size: 16,
                              className: "text-white",
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main showcase with simple, premium transitions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
              {/* Left column - beautiful image display */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[5/3]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      variants={imageFade}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      <img
                        src={SERVICES[activeIndex].image}
                        alt={SERVICES[activeIndex].title}
                        className="w-full h-full object-cover"
                      />

                      {/* Clean, premium overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />

                      {/* Service badge */}
                      <div className="absolute top-6 left-6 flex items-center space-x-3">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.3,
                            duration: 0.4,
                            type: "spring",
                          }}
                          className="p-3 bg-primary rounded-xl shadow-lg"
                        >
                          {React.createElement(SERVICES[activeIndex].icon, {
                            size: 24,
                            className: "text-primary-foreground",
                          })}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg"
                        >
                          <h2 className="text-white font-medium">
                            {SERVICES[activeIndex].title}
                          </h2>
                        </motion.div>
                      </div>

                      {/* View More button - links to service slug */}
                      <motion.a
                        href={`/services/${SERVICES[activeIndex].slug}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View More</span>
                        <ArrowRight size={18} />
                      </motion.a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right column - service details with clean animations */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-card rounded-3xl p-8 shadow-xl border border-border h-full"
                  >
                    <div className="mb-6">
                      <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                        {SERVICES[activeIndex].title}
                      </h2>

                      <p className="text-muted-foreground">
                        {SERVICES[activeIndex].description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-display font-semibold text-foreground flex items-center">
                        <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
                        Package Features
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SERVICES[activeIndex].features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.2 + idx * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-center space-x-3 bg-secondary/50 p-4 rounded-xl"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhotographyServices;

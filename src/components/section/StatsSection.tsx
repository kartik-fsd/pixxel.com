import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Users, Camera, Star, Award } from "lucide-react";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes("+")) {
      return `${Math.round(latest)}+`;
    }
    return Number(latest).toFixed(value.includes(".") ? 1 : 0);
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const finalValue = parseFloat(value.replace("+", ""));
      animate(count, finalValue, { duration });
    }
  }, [count, value, duration, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export function StatsSection() {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Camera, value: "40+", label: "Unique Sets" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ] as const;

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-secondary">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4"
                >
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                </motion.div>
                <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  <AnimatedCounter value={stat.value} />
                </div>
                <motion.div
                  className="text-muted-foreground relative"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {stat.label}
                  <motion.div
                    className="absolute -inset-1 rounded-lg bg-primary/5 -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

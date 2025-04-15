import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedValue = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes("+")) {
      return `${Math.round(latest)}+`;
    }
    return Number(latest).toFixed(value.includes(".") ? 1 : 0);
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const finalValue = parseFloat(value.replace("+", ""));
      animate(count, finalValue, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export function HomeStatsSection() {
  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Unique Sets", value: "40+" },
    { label: "Years Experience", value: "5+" },
    { label: "Photo Sessions", value: "1000+" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-neutral-200">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-display font-bold text-primary mb-2">
            <AnimatedValue value={stat.value} />
          </div>
          <div className="text-sm text-muted-foreground font-light">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// animations.tsx
import { motion } from "framer-motion";

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const AnimatedPriceCard = motion.div;
export const AnimatedFeature = motion.div;
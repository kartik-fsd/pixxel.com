import { motion } from "framer-motion";
import { Users, Camera, Star, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Camera, value: "40+", label: "Unique Sets" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

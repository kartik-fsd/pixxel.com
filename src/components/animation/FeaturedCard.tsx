import { motion } from "framer-motion";
import { Camera, Clock, Palette, Users } from "lucide-react";

interface Props {
  iconType: "palette" | "camera" | "clock" | "users"; // Instead of passing JSX
  title: string;
  description: string;
}

export default function FeatureCard({ iconType, title, description }: Props) {
  const getIcon = () => {
    switch (iconType) {
      case "palette":
        return <Palette />;
      case "camera":
        return <Camera />;
      case "clock":
        return <Clock />;
      case "users":
        return <Users />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl p-6 shadow-sm border border-border"
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <div className="w-6 h-6 text-primary">{getIcon()}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

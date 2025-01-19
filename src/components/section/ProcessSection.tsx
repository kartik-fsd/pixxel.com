import { motion } from "framer-motion";
import { Search, Calendar, Camera, Heart } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Browse Sets",
      description: "Explore our diverse collection of premium photography sets",
    },
    {
      icon: Calendar,
      title: "Book Your Slot",
      description: "Choose your preferred date and time",
    },
    {
      icon: Camera,
      title: "Photo Session",
      description: "Experience a professional photography session",
    },
    {
      icon: Heart,
      title: "Create Memories",
      description: "Take home beautiful memories that last forever",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Simple steps to create your perfect photoshoot
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

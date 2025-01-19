import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The Light Room exceeded all our expectations. The attention to detail and professional support made our shoot absolutely perfect.",
    author: "Sarah Johnson",
    role: "Fashion Photographer",
  },
  {
    text: "Best studio I've worked with in years. The equipment quality and lighting options are unmatched.",
    author: "Michael Chen",
    role: "Commercial Photographer",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold text-center mb-12">
        Client Experiences
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-8 rounded-xl bg-card border border-border"
          >
            <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
            <p className="text-lg mb-6">{testimonial.text}</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

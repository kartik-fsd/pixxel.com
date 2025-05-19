import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "I love love love the place.. best for all kinda shoots..especially pre-wedding.. i have done modelling shoots there .. the host is really nice.. the services are great.. most of all the the sets are just amazing .. 10 out of 10",
    author: "Saurabh Vidyadhar",
    role: "Modelling shoot",
  },
  {
    text: "Lovely Sets, Perfect locations, responsible and cooperative staff.",
    author: "Kartik Talpekar ",
    role: "Pre-Wedding client",
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

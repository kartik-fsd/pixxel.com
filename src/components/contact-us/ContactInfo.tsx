import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Our Location",
      content:
        "Back Side Of Advani Dhaba, Pixxel City, Umred Rd, Wadegaon (kale), Maharashtra 441204",
      action: {
        text: "Get Directions",
        href: "https://maps.google.com/?q=Back+Side+Of+Advani+Dhaba+Pixxel+City+Umred+Rd+Wadegaon+kale+Maharashtra+441204",
      },
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Number",
      content: "6261180073",
      action: {
        text: "Call Us",
        href: "tel:6261180073",
      },
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Address",
      content: "d.aakruti@yahoo.com",
      action: {
        text: "Email Us",
        href: "mailto:d.aakruti@yahoo.com",
      },
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      content:
        "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed",
      action: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-100 mb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl font-serif font-bold mb-8 text-gray-900"
        variants={itemVariants}
      >
        Contact Information
      </motion.h2>

      <motion.div className="space-y-8" variants={containerVariants}>
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex gap-5"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {item.content}
              </p>
              {item.action && (
                <a
                  href={item.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium mt-2"
                >
                  {item.action.text}
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

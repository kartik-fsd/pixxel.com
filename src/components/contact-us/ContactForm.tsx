import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Create form data for Web3Forms
    const apiFormData = new FormData();

    // Add your Web3Forms access key - you'll need to get this from web3forms.com
    apiFormData.append("access_key", "bc113fb2-f3e6-4694-b772-88ca36872cb7");

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      apiFormData.append(key, value);
    });

    // Add additional fields for customization
    apiFormData.append("from_name", "Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: apiFormData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState("success");

        // Reset form after success (after 3 seconds)
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setFormState("idle");
        }, 3000);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-200";

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
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
      className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={formVariants}
    >
      <motion.h2
        className="text-2xl font-serif font-bold mb-6 text-gray-900"
        variants={itemVariants}
      >
        Send us a Message
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field to prevent spam */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={itemVariants}
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+91 XXXXXXXXXX"
          />
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="booking">Booking Inquiry</option>
            <option value="availability">Check Availability</option>
            <option value="pricing">Pricing Information</option>
            <option value="support">Support</option>
            <option value="other">Other</option>
          </select>
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={inputClasses}
            placeholder="Tell us about your requirements..."
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formState === "idle" && (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
            {formState === "submitting" && (
              <>
                <span>Sending...</span>
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </>
            )}
            {formState === "success" && (
              <>
                <span>Message Sent!</span>
                <CheckCircle className="w-4 h-4 ml-2" />
              </>
            )}
            {formState === "error" && (
              <>
                <span>Error Sending</span>
                <XCircle className="w-4 h-4 ml-2" />
              </>
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}

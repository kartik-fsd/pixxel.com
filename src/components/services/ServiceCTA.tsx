import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";

interface ServiceCTAProps {
  service: {
    slug: string;
    title: string;
  };
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Create formData object
    const apiFormData = new FormData();

    // Add your Web3Forms access key - you'll need to get this from web3forms.com
    apiFormData.append("access_key", "bc113fb2-f3e6-4694-b772-88ca36872cb7");

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      apiFormData.append(key, value);
    });

    // Add additional fields for customization
    apiFormData.append(
      "subject",
      `New Booking Request: ${service.title} Session`
    );
    apiFormData.append("from_name", "Photography Booking System");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: apiFormData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");

        // Reset form after success (after 3 seconds)
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            message: "",
          });
          setFormStatus("idle");
        }, 3000);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left side with text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-3xl md:text-4xl font-display font-bold">
          Ready to Book Your {service.title} Session?
        </h3>

        <p className="text-white/80 text-lg">
          Fill out the form to schedule your photography session with us. Our
          team will contact you within 24 hours to confirm your booking and
          discuss the details.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1.5 mr-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Calendar className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white">Flexible Scheduling</h4>
              <p className="text-white/70">
                Available 7 days a week, including evenings and weekends
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1.5 mr-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white">Personal Consultation</h4>
              <p className="text-white/70">
                Discuss your vision and preferences before the shoot
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1.5 mr-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white">Quick Response</h4>
              <p className="text-white/70">
                We aim to respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side with form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Book Your Session
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field to prevent spam */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Special Requests or Questions
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="Tell us about any special requests or questions you have..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full py-3 px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              {formStatus === "idle" && (
                <>
                  Book Your Session <Send className="ml-2 h-4 w-4" />
                </>
              )}

              {formStatus === "submitting" && (
                <>
                  Submitting...
                  <svg
                    className="ml-2 h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                </>
              )}

              {formStatus === "success" && (
                <>
                  Booking Received! <span className="ml-2">✓</span>
                </>
              )}

              {formStatus === "error" && (
                <>
                  Error, Please Try Again <span className="ml-2">×</span>
                </>
              )}
            </button>

            {formStatus === "success" && (
              <p className="text-green-600 text-sm text-center mt-2">
                Thank you! We'll contact you within 24 hours to confirm your
                booking.
              </p>
            )}

            {formStatus === "error" && (
              <p className="text-red-600 text-sm text-center mt-2">
                There was an error submitting your form. Please try again or
                contact us directly.
              </p>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

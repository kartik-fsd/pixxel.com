import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Camera, Calendar, Star, CheckCircle2 } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const controls = useAnimation();

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the background position based on scroll
      document
        .querySelector(".parallax-bg")
        ?.setAttribute("style", `transform: translateY(${scrollY * 0.1}px)`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Validate email
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setIsEmailValid(false);
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 },
      });
      return;
    }

    setIsEmailValid(true);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  // Background animations
  const backgroundAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 z-0"></div>
      <div className="absolute inset-0 opacity-30 parallax-bg z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-40 -right-32 w-64 h-64 rounded-full bg-primary"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-primary"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-10 relative overflow-hidden h-full flex flex-col">
              {/* Abstract background pattern */}
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(255,255,255,0.1),transparent_70%)]"
                {...backgroundAnimation}
              />
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-bl-[100px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                    Limited Time Offer
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Ready to Create Your{" "}
                    <span className="relative">
                      Masterpiece
                      <motion.span
                        className="absolute -bottom-2 left-0 w-full h-1 bg-white/50 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                      />
                    </span>
                    ?
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Book your session now and bring your creative vision to life
                    in our premium photography sets. Limited slots available!
                  </p>

                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">
                          Professional Equipment
                        </h4>
                        <p className="text-white/70 text-sm">
                          Access to high-end gear and lighting setups
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">
                          Expert Assistance
                        </h4>
                        <p className="text-white/70 text-sm">
                          Dedicated staff to help perfect your shots
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-white">
                          Exclusive Access
                        </h4>
                        <p className="text-white/70 text-sm">
                          Private usage of the entire studio space
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.a
                    href="/booking"
                    className="mt-auto bg-white text-primary px-8 py-3.5 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2 group shadow-lg shadow-black/10 font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Your Session
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right form column */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-10 shadow-xl shadow-primary/5 border border-gray-100 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full flex flex-col"
              >
                <div className="mb-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4"
                  >
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">
                      Quick Inquiry
                    </span>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Get in Touch With Us
                  </h3>
                  <p className="text-muted-foreground">
                    Leave your details and we'll get back to you within 24 hours
                    to schedule your perfect session.
                  </p>
                </div>

                {/* Animated form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 flex-1 flex flex-col"
                >
                  <motion.div
                    animate={controls}
                    className={`relative ${!isEmailValid ? "shake" : ""}`}
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsEmailValid(true);
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl border ${
                        !isEmailValid
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 focus:border-primary"
                      } focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    />
                    {!isEmailValid && (
                      <p className="text-red-500 text-sm mt-1 absolute">
                        Please enter a valid email address
                      </p>
                    )}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <select
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select photography set
                      </option>
                      <option value="light-room">Light Room</option>
                      <option value="crimson-grace">Crimson Grace</option>
                      <option value="date-night">Date Night</option>
                      <option value="blue-jodhpur">Blue Jodhpur</option>
                      <option value="mexican-street">Mexican Street</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Tell us more about your project..."
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  ></textarea>

                  <div className="mt-auto">
                    <motion.button
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors font-medium flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitted ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          Request Sent Successfully
                        </motion.span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Inquiry
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </motion.button>
                  </div>
                </form>

                {/* Testimonials */}
                <motion.div
                  className="pt-8 mt-8 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium ml-1">5.0</span>
                    <span className="text-sm text-muted-foreground">
                      (200+ Reviews)
                    </span>
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "The studio spaces are absolutely gorgeous and the staff was
                    so helpful. Our photoshoot turned out better than we could
                    have imagined!"
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Add a style tag for the shake animation
export const CTAStyles = () => (
  <style>
    {`
    .shake {
      animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }
    
    @keyframes shake {
      10%, 90% { transform: translateX(-1px); }
      20%, 80% { transform: translateX(2px); }
      30%, 50%, 70% { transform: translateX(-4px); }
      40%, 60% { transform: translateX(4px); }
    }
  `}
  </style>
);

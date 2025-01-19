import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";

const packages = [
  {
    name: "Essential",
    highlight: "Perfect for Quick Professional Shoots",
    timeSlot: "4 Hour",
    prices: {
      morning: 5999,
      evening: 7999,
    },
    features: {
      props: false,
      changingRoom: true,
      effects: false,
      allAccess: true,
    },
    savings: "Save ₹2,000 on morning slots",
    ideal: "Perfect for Product Photography",
  },
  {
    name: "Professional",
    highlight: "Most Popular for Commercial Shoots",
    timeSlot: "6 Hour",
    price: 9999,
    features: {
      props: true,
      changingRoom: true,
      effects: true,
      allAccess: true,
    },
    popular: true,
    savings: "Most value for time",
    ideal: "Ideal for Fashion & Portfolio",
  },
  {
    name: "Elite",
    highlight: "Premium Creative Experience",
    timeSlot: "8 Hour",
    price: 11999,
    features: {
      props: true,
      changingRoom: true,
      effects: true,
      allAccess: true,
    },
    savings: "Save ₹4,000 compared to hourly rate",
    ideal: "Perfect for Commercial Shoots",
  },
  {
    name: "Signature",
    highlight: "Unlimited Creative Freedom",
    timeSlot: "12 Hour",
    price: 15999,
    features: {
      props: true,
      changingRoom: true,
      effects: true,
      allAccess: true,
    },
    savings: "Best value per hour",
    ideal: "For Film & Large Productions",
  },
];

const additionalInfo = [
  {
    text: "Luxury Preparation Room Available",
    detail: "₹1,000 per additional room",
  },
  {
    text: "Premium Refreshments Included",
    detail: "24 premium water bottles provided",
  },
  {
    text: "Professional Team Support",
    detail: "Up to 8 people (₹1,000 per additional)",
  },
  {
    text: "Equipment Flexibility",
    detail: "Bring your own photographer or rent our equipment",
  },
];

export default function PackagesSection() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("morning");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen pt-24 pb-32 overflow-hidden"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] 
          bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.03),transparent_50%)]"
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Enhanced Header */}
        <div className="max-w-[720px] mx-auto mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[72px] font-display font-normal tracking-tight mb-6"
          >
            Premium Studio Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Select your perfect package and transform your creative vision into
            reality
          </motion.p>

          {/* Elegant Time Slot Selector */}
          <div className="inline-flex bg-secondary/20 backdrop-blur-sm rounded-full p-1">
            {["morning", "evening"].map((slot) => (
              <motion.button
                key={slot}
                onClick={() => setSelectedTimeSlot(slot)}
                className={`
                  relative px-12 py-3 rounded-full text-sm font-medium
                  transition-all duration-500 ease-out
                  ${
                    selectedTimeSlot === slot
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {selectedTimeSlot === slot && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {slot.charAt(0).toUpperCase() + slot.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Premium Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto mb-32">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-[32px] blur-2xl" />
              </div>

              <div
                className="relative bg-card/5 backdrop-blur-sm border border-border/5 rounded-[32px] p-10
                transition-all duration-500 hover:border-border/20 hover:shadow-lg"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-10">
                    <div
                      className="bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full 
                      text-sm font-medium flex items-center gap-1.5 shadow-lg"
                    >
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Package Content */}
                <div className="mb-8">
                  <h3 className="text-2xl font-display tracking-tight mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground">{pkg.highlight}</p>
                </div>

                {/* Dynamic Pricing */}
                {pkg.prices ? (
                  <div className="mb-8">
                    <div className="text-4xl font-light mb-2">
                      ₹{pkg.prices[selectedTimeSlot].toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">
                      {selectedTimeSlot.charAt(0).toUpperCase() +
                        selectedTimeSlot.slice(1)}{" "}
                      Session
                    </div>
                    <div className="text-primary mt-2 text-sm">
                      {pkg.savings}
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                    <div className="text-4xl font-light mb-2">
                      ₹{pkg.price?.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">
                      {pkg.timeSlot} Session
                    </div>
                    <div className="text-primary mt-2 text-sm">
                      {pkg.savings}
                    </div>
                  </div>
                )}

                <div className="text-muted-foreground mb-8">{pkg.ideal}</div>

                {/* Enhanced Features List */}
                <ul className="space-y-4 mb-10">
                  {Object.entries(pkg.features).map(([key, value], i) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      {value ? (
                        <div className="bg-primary/10 rounded-full p-1">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                      ) : (
                        <div className="bg-destructive/10 rounded-full p-1">
                          <X className="w-4 h-4 text-destructive" />
                        </div>
                      )}
                      <span className="text-muted-foreground">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .toLowerCase()
                          .trim()}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Premium CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-primary text-primary-foreground 
                    font-medium transition-all duration-300 relative overflow-hidden
                    hover:bg-primary/90"
                >
                  Book {pkg.name}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent 
                    via-white/10 to-transparent opacity-0 group-hover:opacity-100 
                    transition-opacity duration-700 -skew-x-12"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Luxury Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[1000px] mx-auto relative"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-display text-center mb-16">
              Premium Amenities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
              {additionalInfo.map(({ text, detail }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-lg mb-2">{text}</p>
                  <p className="text-primary">{detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Luxury Background Accent */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 
            to-primary/5 rounded-[48px] blur-2xl -z-10"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

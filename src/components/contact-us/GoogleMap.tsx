import { motion } from "framer-motion";

export function GoogleMap() {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900">
        Our Location
      </h2>

      <div className="relative rounded-xl overflow-hidden shadow-lg">
        {/* Google Maps iFrame with updated embed URL */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.038007369801!2d79.18772077467992!3d21.031165180618828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bb5b377424fd%3A0xdd5b59af03806e1f!2sPixxel%20City!5e0!3m2!1sen!2sin!4v1743579601807!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
          className="rounded-lg"
        />

        {/* Map overlay with animated pin */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <div>
              <h3 className="font-medium">Find us at</h3>
              <p className="text-sm text-white/80">
                Pixxel City, Umred Rd, Wadegaon (kale)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

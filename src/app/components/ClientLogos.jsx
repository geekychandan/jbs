'use client'
import { motion } from "framer-motion";

const logos = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    width: "120px",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    width: "100px",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    width: "110px",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    width: "80px",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    width: "120px",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Intel_logo_%282020%2C_dark_blue%29.svg",
    width: "90px",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-300/40 via-transparent to-transparent opacity-20 blur-lg" />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3 tracking-wide">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join top companies that have transformed their workspaces with us.
          </p>
        </motion.div>

        <div className="relative">
          {/* Left & Right Gradient Overlays for Smooth Edge Fade */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-100 via-transparent to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-100 via-transparent to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-10 items-center whitespace-nowrap"
            >
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="flex-shrink-0 px-6 py-4 bg-white/90 backdrop-blur-xl shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={logo.url}
                    alt={`Client Logo ${index + 1}`}
                    style={{ width: logo.width }}
                    className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

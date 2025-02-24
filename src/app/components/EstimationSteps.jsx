"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { User, ClipboardCheck, Wrench, Package, Key } from "lucide-react";



export default function EstimationSteps() {
  const controls = useAnimation()

  const steps = [
    {
      icon: <User className="w-12 h-12" />,
      title: "Meet a Designer",
      description: "Discuss your vision with our experts and get personalized design solutions.",
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "(5% Payment) Book a Renovation",
      description: "Secure your project slot by making an initial deposit.",
    },
    {
      icon: < Wrench className="w-12 h-12" />,
      title: "(50% Payment) Execution Begins",
      description: "Our team starts bringing your design to life with high-quality craftsmanship.",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "(100% Payment) Final Installations",
      description: "Final checks, furniture placement, and finishing touches are completed.",
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: "Move In and Enjoy!",
      description: "Receive your keys and step into your beautifully designed home!",
    },
  ]

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-white relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent opacity-20 blur-lg"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Your Renovation in 5 Easy Steps
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            We make the process seamless, stress-free, and enjoyable.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center group max-w-xs mx-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.06 }}
            >
              {/* Step Icon */}
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-6 border border-gray-300 transition-all group-hover:bg-blue-100">
                <motion.div className="text-blue-600">{step.icon}</motion.div>
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>

              {/* Step Description */}
              <p className="text-gray-700 text-md leading-relaxed">{step.description}</p>

              {/* Animated Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%_-_50px)] w-[calc(100%_-_40px)] z-0">
                  <motion.div
                    className="border-t-2 border-dashed border-blue-400"
                    variants={lineVariants}
                    style={{ originX: 0 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Custom CTA Button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        >
          <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Get Your Free Estimate
          </button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

// Custom button component
function CustomButton({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full ${className}`}
    >
      {children}
    </button>
  )
}

export default function EstimateLanding() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-6 text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Get Your Interior Design Estimate</h1>
        <p className="text-gray-600 mb-8">
          Follow our simple steps to get a personalized estimate for your home interiors.
        </p>
        <CustomButton
          onClick={() => router.push("/estimate/bhk-type")}
          className=""
        >
          Start Estimation
        </CustomButton>
      </motion.div>
    </div>
  )
}

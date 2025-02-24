"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

const steps = [
  { id: "bhk-type", label: "BHK TYPE" },
  { id: "rooms", label: "ROOMS TO DESIGN" },
  { id: "package", label: "PACKAGE" },
  { id: "quote", label: "GET QUOTE" },
]

export default function ProgressHeader() {
  const pathname = usePathname()
  const currentStep = steps.findIndex((step) => pathname.includes(step.id)) + 1

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link href="/" className="flex-shrink-0">
            <Image src="/placeholder.svg" alt="HomeLane Logo" width={120} height={32} className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-4 flex-grow justify-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center relative">
                  <motion.div
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-1",
                      index + 1 < currentStep
                        ? "bg-green-500 text-white"
                        : index + 1 === currentStep
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-500"
                    )}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index + 1 === currentStep ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1 < currentStep ? "✓" : index + 1}
                  </motion.div>
                  <motion.span
                    className="text-xs font-medium text-gray-600 absolute -bottom-5 whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {step.label}
                  </motion.span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-24 h-px bg-gray-200 mx-2 relative">
                    {index < currentStep - 1 && (
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden text-sm font-medium text-gray-600">
            Step {currentStep} of {steps.length}
          </div>
        </div>
      </div>
    </header>
  )
}

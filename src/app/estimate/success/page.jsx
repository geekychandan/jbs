"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Download, Phone } from "lucide-react";

// Custom Button component
const Button = ({ children, onClick, variant, disabled, className, size }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${variant === "outline" ? "border border-gray-500 text-gray-500" : "bg-purple-600 text-white"} ${
      size === "lg" ? "text-lg" : ""
    } ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

// Custom Card component
const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-lg ${className}`}>{children}</div>
);

// Custom CardContent component
const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export default function EstimationSuccessPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-3xl font-bold mb-2">Here's your estimation towards the start of a lovely home.</h1>
          <p className="text-gray-600">We've crafted this estimate based on your preferences.</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Your Selected Package</h2>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-800">₹25L - 26L*</div>
                    <p className="text-sm text-gray-600 mt-2">*Estimated cost for your selections</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      <span>Premium Modular Kitchen</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      <span>Designer Wardrobes</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-5 w-5" />
                      <span>Living Room Storage</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                    alt="Interior Preview"
                    width={400}
                    height={300}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Compare with other packages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold">Essential</div>
                    <div className="text-sm text-gray-600">Basic interiors package</div>
                  </div>
                  <div className="text-lg font-semibold">₹20L - 22L</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-semibold">Premium</div>
                    <div className="text-sm text-gray-600">Luxury interiors package</div>
                  </div>
                  <div className="text-lg font-semibold">₹28L - 30L</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Why choose us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-sm text-gray-600">Days Delivery</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">10</div>
                  <div className="text-sm text-gray-600">Year Warranty</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Designers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">1500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">
            <Phone className="w-4 h-4 mr-2" />
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download Estimate
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import ThankYou from "./ThankYou";

export default function Step3({ formData, prevStep }) {
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = () => {
    setSubmitted(true);
  };

  return submitted ? (
    <ThankYou />
  ) : (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* 📌 Smaller Reference Interior Image */}
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3" 
          alt="Property Interior"
          className="w-full max-w-md h-auto rounded-lg shadow-md mb-4"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 text-center">
        Review Your Estimate
      </h2>

      {/* Property Details */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Property Type:</h3>
        <p className="text-gray-700 capitalize">{formData.propertyType}</p>
      </div>

      {/* Selected Components */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Rooms Included:</h3>
        {Object.entries(formData.components).map(
          ([key, value]) =>
            value > 0 && (
              <p key={key} className="text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1")}: {value}
              </p>
            )
        )}
      </div>

      {/* Service Level */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Service Type:</h3>
        <p className="text-gray-700 capitalize">{formData.serviceType}</p>
      </div>

      {/* Estimated Cost */}
      <div className="text-center py-6">
        <p className="text-xl font-semibold text-gray-900">Estimated Cost:</p>
        <p className="text-4xl font-bold text-blue-600">
          ₹{formData.estimatedCost.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">
          *This is an approximate estimate. Final costs may vary.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <motion.button
          onClick={prevStep}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-200 transition"
        >
          <ArrowLeft className="w-5 h-5 inline-block mr-2" /> Back
        </motion.button>

        <motion.button
          onClick={handleConfirm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Submit</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

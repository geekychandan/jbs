"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Phone validation (10 digits)
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  // Function to calculate the estimate
  const calculateEstimate = () => {
    if (!formData.propertyType || !formData.serviceType) return 0;

    const componentPrices = {
      bedroom: 80000,
      kitchen: 100000,
      bathroom: 50000,
      livingRoom: 120000,
      studyRoom: 40000,
      Wardrobe: 30000,
      "Entertainment unit": 50000,
    };

    const serviceMultipliers = { normal: 1, medium: 1.5, premium: 2 };

    let componentsTotal = Object.entries(formData.components).reduce(
      (total, [key, value]) => total + (componentPrices[key] || 0) * value,
      0
    );

    let serviceMultiplier = serviceMultipliers[formData.serviceType] || 1;
    return componentsTotal * serviceMultiplier;
  };

  // Function to handle input changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  // Function to handle Next button click
  const handleNext = async () => {
    const { name, email, phone, location } = formData.personalInfo;
    if (!name || !email || !phone || !location) {
      setError("Please fill in all the fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setError(""); // Clear previous errors
    setLoading(true); // Start loading

    // Calculate the estimated cost
    const estimatedCost = calculateEstimate();
    setFormData((prev) => ({
      ...prev,
      estimatedCost, // Store calculated estimate in formData
    }));

    try {
      // Send email to Admin & User
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, estimatedCost }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Proceed to Step 3
      nextStep();
    } catch (error) {
      setError("Error sending email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Personal Information
      </h2>

      <form className="space-y-6">
        {["name", "email", "phone", "location"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
              {field}
            </label>
            <input
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              value={formData.personalInfo[field]}
              onChange={handlePersonalInfoChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
              required
            />
          </div>
        ))}
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex justify-between pt-6">
        <motion.button
          onClick={prevStep}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-colors"
        >
          <ArrowLeft size={20} className="inline-block mr-2" />
          Back
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          disabled={loading}
          className={`px-8 py-4 rounded-xl flex items-center space-x-2 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white transition-colors`}
        >
          {loading ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Next</span>
              <ArrowRight size={20} />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Step2;

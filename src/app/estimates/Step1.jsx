"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const propertyRoomLimits = {
  "1bhk": { bedroom: 1, kitchen: 1, Wardrobe: 1, "Entertainment unit": 1 },
  "2bhk": { bedroom: 2, kitchen: 1, Wardrobe: 2, "Entertainment unit": 2 },
  "3bhk": { bedroom: 3, kitchen: 1, Wardrobe: 3, "Entertainment unit": 3 },
};

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (formData.propertyType) {
      setFormData((prev) => ({
        ...prev,
        components: { ...propertyRoomLimits[formData.propertyType] },
      }));
    }
  }, [formData.propertyType, setFormData]);

  const propertyTypes = [
    { value: "1bhk", label: "1 BHK", basePrice: 150000 },
    { value: "2bhk", label: "2 BHK", basePrice: 250000 },
    { value: "3bhk", label: "3 BHK", basePrice: 350000 },
  ];

  const serviceTypes = [
    { value: "normal", label: "Normal", multiplier: 1 },
    { value: "medium", label: "Premium", multiplier: 1.5 },
    { value: "premium", label: "Luxury", multiplier: 2 },
  ];

  const handleIncrement = (component) => {
    if (formData.components[component] < propertyRoomLimits[formData.propertyType]?.[component]) {
      setFormData((prev) => ({
        ...prev,
        components: { ...prev.components, [component]: prev.components[component] + 1 },
      }));
    }
  };

  const handleDecrement = (component) => {
    if (formData.components[component] > 0) {
      setFormData((prev) => ({
        ...prev,
        components: { ...prev.components, [component]: prev.components[component] - 1 },
      }));
    }
  };

  const handleNext = () => {
    if (!formData.propertyType || !formData.serviceType) {
      setError("Please select a property type and service type.");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <motion.div className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Property Type Selection */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Select Property Type</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {propertyTypes.map((type) => (
            <motion.button
              key={type.value}
              onClick={() => setFormData((prev) => ({ ...prev, propertyType: type.value }))}
              className={`flex-1 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
                formData.propertyType === type.value
                  ? "border-blue-600 bg-blue-100"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              {type.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Number of Rooms Selection */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Number of Rooms</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(formData.components).map(([component, quantity]) => (
            <div key={component} className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="text-sm font-medium text-gray-700 capitalize">{component}</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <motion.button
                  onClick={() => handleDecrement(component)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300"
                >
                  <Minus size={16} />
                </motion.button>
                <span className="text-lg font-semibold">{quantity}</span>
                <motion.button
                  onClick={() => handleIncrement(component)}
                  className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-300"
                >
                  <Plus size={16} />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Type Selection */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Service Type</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {serviceTypes.map((service) => (
            <motion.button
              key={service.value}
              onClick={() => setFormData((prev) => ({ ...prev, serviceType: service.value }))}
              className={`flex-1 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
                formData.serviceType === service.value
                  ? "border-blue-600 bg-blue-100"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              {service.label}
            </motion.button>
          ))}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Next Button */}
      <div className="flex justify-end">
        <motion.button
          onClick={handleNext}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 text-sm"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Step1;

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { CheckCircle } from "lucide-react";

export default function EstimatePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    components: { bedroom: 0, kitchen: 0, Wardrobe: 0, "Entertainment unit": 0 },
    serviceType: "",
    personalInfo: { name: "", email: "", phone: "", location: "" },
  });

  useEffect(() => {
    if (!formData.propertyType) return;
    const roomPresets = {
      "1bhk": { bedroom: 1, kitchen: 1, Wardrobe: 1, "Entertainment unit": 1 },
      "2bhk": { bedroom: 2, kitchen: 1, Wardrobe: 2, "Entertainment unit": 1 },
      "3bhk": { bedroom: 3, kitchen: 1, Wardrobe: 3, "Entertainment unit": 1 },
    };
    setFormData((prev) => ({
      ...prev,
      components: roomPresets[formData.propertyType] || prev.components,
    }));
  }, [formData.propertyType]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] flex flex-col items-center justify-center py-12 px-6">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center relative">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: step === stepNumber ? 1.2 : 1,
                  backgroundColor: step >= stepNumber ? "#007bff" : "#dee2e6",
                }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 flex items-center justify-center text-white font-medium rounded-full shadow-md"
              >
                {step >= stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
              </motion.div>
              <span
                className={`text-xs mt-2 ${
                  step >= stepNumber ? "text-blue-600 font-semibold" : "text-gray-500"
                }`}
              >
                {stepNumber === 1 ? "Select Type" : stepNumber === 2 ? "Personal Info" : "Estimate"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}>
              <Step3 formData={formData} prevStep={prevStep} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

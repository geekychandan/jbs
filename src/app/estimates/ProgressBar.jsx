"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ step }) {
  return (
    <div className="flex justify-center mb-10">
      {[1, 2, 3].map((num) => (
        <motion.div
          key={num}
          animate={{ backgroundColor: step >= num ? "#2563eb" : "#e5e7eb" }}
          className="w-10 h-10 flex items-center justify-center text-white font-medium rounded-full mx-2 transition-all"
        >
          {num}
        </motion.div>
      ))}
    </div>
  );
}

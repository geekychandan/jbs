"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <motion.div className="text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
          <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
        </motion.div>

        <motion.h1 className="text-4xl font-bold text-gray-900">Thank You for Your Request!</motion.h1>
        <p className="text-gray-600 mt-2">We've received your estimation request and will get back to you soon.</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="mt-6 flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}

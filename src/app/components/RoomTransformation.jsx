"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomTransformation({ beforeImage, afterImage, title }) {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPosition(pos);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updateSlider(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative py-10 from-gray-200 via-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">{title}</h2>
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-lg select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <Image src={beforeImage || "/placeholder.svg"} alt="Before" fill className="object-cover" />
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            transition={{ ease: "easeOut", duration: isDragging ? 0 : 0.3 }}
          >
            <Image src={afterImage || "/placeholder.svg"} alt="After" fill className="object-cover" />
          </motion.div>
          <div className="absolute top-0 bottom-0 bg-gray-700 w-1" style={{ left: `${sliderPosition}%` }} />
          <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${sliderPosition}%` }}>
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8L22 12L18 16M6 8L2 12L6 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {!isDragging && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-[55%] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm pointer-events-none"
              >
                Drag to compare
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-6 text-center text-gray-600">Slide to see the transformation</div>
      </div>
    </div>
  );
}

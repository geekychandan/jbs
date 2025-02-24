"use client";

import { motion } from "framer-motion";
import {
  Sofa,
  Warehouse,
  Tv,
  LampCeiling,
  Wallpaper,
  PaintBucket,
  Bath,
  HomeIcon,
  BedDouble,
  Table,
  Boxes,
  Lightbulb,
  ChefHat,
  HandIcon as PrayingHands,
} from "lucide-react";

const solutions = [
  { icon: <ChefHat className="w-8 h-8" />, title: "Modular Kitchen" },
  { icon: <Warehouse className="w-8 h-8" />, title: "Storage & Wardrobe" },
  { icon: <Boxes className="w-8 h-8" />, title: "Crockery Units" },
  { icon: <Sofa className="w-8 h-8" />, title: "Space-Saving Furniture" },
  { icon: <Tv className="w-8 h-8" />, title: "TV Units" },
  { icon: <Table className="w-8 h-8" />, title: "Study Tables" },
  { icon: <LampCeiling className="w-8 h-8" />, title: "False Ceiling" },
  { icon: <Lightbulb className="w-8 h-8" />, title: "Lighting Solutions" },
  { icon: <Wallpaper className="w-8 h-8" />, title: "Wallpaper Designs" },
  { icon: <PaintBucket className="w-8 h-8" />, title: "Wall Paint & Texture" },
  { icon: <Bath className="w-8 h-8" />, title: "Bathroom Interiors" },
  { icon: <PrayingHands className="w-8 h-8" />, title: "Pooja Unit" },
  { icon: <HomeIcon className="w-8 h-8" />, title: "Foyer Designs" },
  { icon: <Sofa className="w-8 h-8" />, title: "Movable Furniture" },
  { icon: <BedDouble className="w-8 h-8" />, title: "Kids Bedroom" },
];

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-300/20 via-transparent to-transparent opacity-30 blur-xl"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Our Interior Solutions
        </motion.h2>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="group relative flex flex-col items-center text-center cursor-pointer bg-gradient-to-b from-white to-gray-50 shadow-lg border border-gray-200 rounded-lg p-5 transition-all hover:scale-105 hover:shadow-xl hover:bg-red-50"
            >
              {/* Icon Wrapper */}
              <div className="w-14 h-14 flex items-center justify-center mb-3 text-gray-700 group-hover:text-red-500 transition-all duration-300">
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-300 bg-gradient-to-r from-red-100 via-transparent to-red-200 rounded-lg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

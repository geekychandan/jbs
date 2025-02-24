"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdCircle } from "react-icons/md";

const designElements = [
  { elements: ["Elegant", "Luxury", "Classic"], element_color: "#f3f8f6" },
  { elements: ["Modern", "Traditional", "Artistic"], element_color: "#3B82F6" },
  { elements: ["Vibrant", "Warm", "Neutral"], element_color: "#f3f8f6" },
];

const DesignList = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="wrapper relative overflow-hidden bg-slate-900 pt-7 md:pt-0"
    >
      {designElements.map(({ elements, element_color }, index) => {
        const xMove = useTransform(
          scrollYProgress,
          [0, 1],
          index % 2 === 0 ? [300, -300] : [-300, 300]
        );

        return (
          <motion.div
            key={index}
            className="design-row mb-8 flex items-center justify-center gap-4 text-gray-800"
            aria-label={elements.join(", ")}
            style={{ x: xMove }}
          >
            {Array.from({ length: 7 }, (_, i) => (
              <React.Fragment key={i}>
                {elements.map((element, j) => (
                  <span
                    key={j}
                    className="design-item text-6xl font-extrabold uppercase tracking-tight mx-2"
                    style={{ color: i === 3 ? element_color : "inherit" }}
                  >
                    {element}
                  </span>
                ))}
                <span className="text-3xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        );
      })}
      <div
        width={100}
        height={100}
        className='absolute top-0 w-full h-full bg-[url("/noise.png")] opacity-20'
      ></div>
    </section>
  );
};

export default DesignList;

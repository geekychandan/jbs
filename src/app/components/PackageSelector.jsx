"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";

// Custom Button component
const Button = ({ children, onClick, variant, disabled, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === "outline" ? "border border-gray-500" : "bg-red-500 text-white"
    } ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

// Custom RadioGroup component
const RadioGroup = ({ value, onValueChange, children, className }) => (
  <div className={className} role="radiogroup">
    {children.map((child) =>
      React.cloneElement(child, {
        checked: value === child.props.value,
        onChange: () => onValueChange(child.props.value),
      })
    )}
  </div>
);

// Custom RadioGroupItem component
const RadioGroupItem = ({ id, value, checked, onChange, className }) => (
  <input
    type="radio"
    id={id}
    value={value}
    checked={checked}
    onChange={onChange}
    className={`radio-item ${className}`}
  />
);

// Custom Label component
const Label = ({ children, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

const packages = [
  {
    id: "essentials",
    title: "Essentials (₹)",
    description: "A range of essential home interior solutions that's perfect for all your needs.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    features: ["Affordable pricing", "Convenient designs", "Basic accessories"],
  },
  {
    id: "premium",
    title: "Premium (₹₹₹)",
    description: "Superior home interior solutions that will take your interiors to the next level.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    features: ["Mid-range pricing", "Premium designs", "Wide range of accessories"],
  },
];

export default function PackageSelector() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleNext = () => {
    if (selectedPackage) {
      localStorage.setItem("package", selectedPackage);
      router.push("/estimate/quote");
    }
  };

  return (
    <div className="space-y-6">
      <RadioGroup
        value={selectedPackage}
        onValueChange={setSelectedPackage}
        className="space-y-6"
      >
        {packages.map((pkg) => (
          <Label key={pkg.id} className="relative block cursor-pointer">
            <RadioGroupItem value={pkg.id} className="sr-only" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`border-2 rounded-lg p-6 transition-colors ${
                selectedPackage === pkg.id
                  ? "border-red-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={300}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </Label>
        ))}
      </RadioGroup>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={() => router.back()}>
          BACK
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedPackage}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}

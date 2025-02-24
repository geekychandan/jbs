"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Next.js 14 uses next/navigation
import { ChevronDown, ChevronUp } from "lucide-react";

const Button = ({ children, onClick, variant, disabled, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${variant === "outline" ? "border border-gray-500" : "bg-red-500 text-white"} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

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

const RadioGroupItem = ({ id, value, checked, onChange }) => (
  <input
    type="radio"
    id={id}
    value={value}
    checked={checked}
    onChange={onChange}
    className="radio-item"
  />
);

const Label = ({ children, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

export default function BhkSelector() {
  const router = useRouter(); // ✅ Correct for Next.js 14
  const [bhkType, setBhkType] = useState("");
  const [expandedBhk, setExpandedBhk] = useState(null);
  const [size, setSize] = useState({});

  const handleNext = () => {
    if (bhkType) {
      console.log("✅ Navigating to /estimate/rooms with bhkType:", bhkType);
      
      localStorage.setItem("bhkType", bhkType);
      localStorage.setItem("bhkSize", size[bhkType] || "small");

      router.push("/estimate/rooms"); // ✅ Next.js 14 routing
    } else {
      console.error("❌ BHK Type not selected!");
    }
  };

  return (
    <div className="space-y-6">
      <RadioGroup value={bhkType} onValueChange={setBhkType} className="space-y-4">
        {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"].map((type) => (
          <div key={type} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor={type} className="flex items-center space-x-2 cursor-pointer">
                <RadioGroupItem value={type} id={type} />
                <span>{type}</span>
              </Label>
              {type !== "1 BHK" && type !== "5 BHK+" && (
                <button
                  onClick={() => setExpandedBhk(expandedBhk === type ? null : type)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {expandedBhk === type ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              )}
            </div>

            {expandedBhk === type && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 space-y-4"
              >
                <Label className="flex items-center space-x-2 cursor-pointer">
                  <RadioGroupItem
                    name={`size-${type}`}
                    value="small"
                    checked={size[type] === "small"}
                    onChange={() => setSize({ ...size, [type]: "small" })}
                  />
                  <div>
                    <div>Small</div>
                    <div className="text-sm text-gray-500">Below 800 sq ft</div>
                  </div>
                </Label>
                <Label className="flex items-center space-x-2 cursor-pointer">
                  <RadioGroupItem
                    name={`size-${type}`}
                    value="large"
                    checked={size[type] === "large"}
                    onChange={() => setSize({ ...size, [type]: "large" })}
                  />
                  <div>
                    <div>Large</div>
                    <div className="text-sm text-gray-500">Above 800 sq ft</div>
                  </div>
                </Label>
              </motion.div>
            )}
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={() => router.back()}>
          BACK
        </Button>
        <Button onClick={handleNext} disabled={!bhkType} className="bg-red-500 hover:bg-red-600 text-white">
          NEXT
        </Button>
      </div>
    </div>
  );
}

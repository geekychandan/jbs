"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Custom Button component
const Button = ({ children, onClick, type, variant, disabled, className }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === "outline" ? "border border-gray-500" : "bg-purple-600 text-white"
    } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    disabled={disabled}
  >
    {children}
  </button>
);

// Custom Input component
const Input = ({ id, type = "text", value, onChange, className, required }) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    className={`px-4 py-2 border rounded ${className}`}
  />
);

// Custom Label component
const Label = ({ children, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

// Custom Switch component
const Switch = ({ id, checked, onChange }) => (
  <input
    id={id}
    type="checkbox"
    checked={checked}
    onChange={(e) => onChange(e.target.checked)}
    className="toggle-switch"
  />
);

export default function QuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsappConsent: true,
    propertyName: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", {
      ...formData,
      bhkType: localStorage.getItem("bhkType"),
      bhkSize: localStorage.getItem("bhkSize"),
      rooms: JSON.parse(localStorage.getItem("rooms") || "{}"),
      package: localStorage.getItem("package"),
    });
    // Navigate to success page with estimation
    router.push("/estimate/success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Enter your name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Enter your email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Enter your mobile number</Label>
        <div className="flex">
          <div className="flex items-center px-3 border rounded-l bg-muted">
            <Image src="/placeholder.svg" alt="IN flag" width={20} height={15} className="mr-2" />
            +91
          </div>
          <Input
            id="phone"
            className="rounded-l-none"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="whatsapp" className="text-sm text-gray-600">
          Send me updates on WhatsApp
        </Label>
        <Switch
          id="whatsapp"
          checked={formData.whatsappConsent}
          onChange={(checked) => setFormData({ ...formData, whatsappConsent: checked })}
        />
      </div>

      <div>
        <Label htmlFor="propertyName">Property Name</Label>
        <Input
          id="propertyName"
          value={formData.propertyName}
          onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="pincode">Enter pincode</Label>
        <Input
          id="pincode"
          value={formData.pincode}
          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
          required
        />
      </div>

      <div className="text-sm text-gray-600">
        <p>
          By submitting this form, you agree to the{" "}
          <a href="#" className="text-purple-600 hover:underline">
            privacy policy
          </a>
          {" & "}
          <a href="#" className="text-purple-600 hover:underline">
            terms and conditions
          </a>
        </p>
        <p className="mt-2">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Privacy Policy
          </a>
          {" and "}
          <a href="#" className="text-purple-600 hover:underline">
            Terms of Service
          </a>
          {" apply."}
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          BACK
        </Button>
        <Button type="submit" variant="solid">
          GET MY ESTIMATE
        </Button>
      </div>
    </form>
  );
}

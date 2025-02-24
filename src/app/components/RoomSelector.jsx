"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MinusCircle, PlusCircle } from "lucide-react"

// Custom Button component
const CustomButton = ({ children, onClick, variant, size, disabled, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${variant === "outline" ? "border border-gray-500" : "bg-red-500 text-white"} ${size === "icon" ? "h-8 w-8 rounded-full" : ""} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
)

const rooms = [
  { id: "living", label: "Living Room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedroom" },
  { id: "bathroom", label: "Bathroom" },
  { id: "dining", label: "Dining" },
]

export default function RoomSelector() {
  const router = useRouter()
  const [quantities, setQuantities] = useState({
    living: 1,
    kitchen: 1,
    bedroom: 2,
    bathroom: 2,
    dining: 1,
  })

  const handleQuantityChange = (roomId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [roomId]: Math.max(0, (prev[roomId] || 0) + change),
    }))
  }

  const handleNext = () => {
    localStorage.setItem("rooms", JSON.stringify(quantities))
    router.push("/estimate/package")
  }

  return (
    <div className="space-y-6">
      {rooms.map((room) => (
        <div key={room.id} className="flex items-center justify-between py-4 border-b last:border-0">
          <span className="font-medium">{room.label}</span>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(room.id, -1)}
              className="h-8 w-8 rounded-full"
              disabled={quantities[room.id] === 0}
            >
              <MinusCircle className="h-5 w-5" />
            </CustomButton>
            <span className="w-4 text-center">{quantities[room.id]}</span>
            <CustomButton
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(room.id, 1)}
              className="h-8 w-8 rounded-full"
            >
              <PlusCircle className="h-5 w-5" />
            </CustomButton>
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-4">
        <CustomButton variant="outline" onClick={() => router.back()}>
          BACK
        </CustomButton>
        <CustomButton onClick={handleNext} className="bg-red-500 hover:bg-red-600 text-white">
          NEXT
        </CustomButton>
      </div>
    </div>
  )
}

import RoomSelector from "@/app/components/RoomSelector"

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-center mb-2">Select the rooms you&apos;d like us to design</h1>
        <p className="text-center text-gray-600 mb-8">
          To know more about this, <button className="text-red-500 hover:underline">click here</button>
        </p>
        <RoomSelector />
      </div>
    </div>
  )
}


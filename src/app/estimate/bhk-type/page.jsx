import BhkSelector from "@/app/components/BhkSelector";



export default function BhkTypePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-center mb-2">Select your BHK type</h1>
        <p className="text-center text-gray-600 mb-8">
          To know more about this, <button className="text-red-500 hover:underline">click here</button>
        </p>
        <BhkSelector />
      </div>
    </div>
  )
}


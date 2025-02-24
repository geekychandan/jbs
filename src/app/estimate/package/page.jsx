import PackageSelector from "@/app/components/PackageSelector"

export default function PackagePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-center mb-8">Pick your package</h1>
        <PackageSelector />
      </div>
    </div>
  )
}


import QuoteForm from "@/app/components/QuoteForm"
import Image from "next/image"

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-center mb-8">Your estimate is almost ready</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <QuoteForm />

          <div className="hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Interior Design"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    title: "Luxury Living Room Designs",
    description:
      "Experience the perfect blend of elegance and comfort. Our luxury living room designs incorporate bespoke furniture, premium materials, and modern aesthetics to create a timeless space.",
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3",
    purchaseUrl: "#",
  },
  {
    title: "Modern Kitchen Interiors",
    description:
      "Enhance functionality with a stylish kitchen. Our modern kitchen designs optimize space, lighting, and storage while incorporating high-end finishes for a sophisticated cooking experience.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
    purchaseUrl: "#",
  },
  {
    title: "Elegant Bedroom Makeovers",
    description:
      "Create a personal sanctuary with our elegant bedroom designs. We focus on comfort, lighting, and textures to provide a peaceful and luxurious retreat tailored to your style.",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.",
    purchaseUrl: "#",
  },
]

const Card = ({ i, title, description, img, purchaseUrl, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="w-full max-w-full h-screen pointer-events-none flex justify-center items-center sticky top-0"
    >
      <motion.div
        className="relative h-2/3 w-full rounded-xl px-5"
        style={{
          scale,
          top: `calc(5vh + ${i * 30}px)`,
        }}
      >
        <div className="-translate-y-20 lg:translate-y-0 lg:grid grid-cols-3 lg:h-full shadow-[0_0px_50px_-15px_#354340] rounded-xl">
          <div className="flex flex-col justify-between text-stone-900 bg-stone-100 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl h-full">
            <h2 className="px-10 py-5 lg:p-10 uppercase text-4xl font-bold lg:text-8xl">
              {title}
            </h2>
          </div>
          <div className="h-64 lg:h-full w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-full"
            ></motion.div>
          </div>
          <div className="flex flex-col justify-between rounded-b-xl lg:rounded-r-xl bg-stone-100 text-stone-900 uppercase font-bold">
            <p className="p-10">{description}</p>
            <div className="w-full px-10 py-5 bg-stone-900 rounded-bl-xl lg:rounded-bl-none rounded-br-xl cursor-pointer relative">
              <a
                href={purchaseUrl}
                className="uppercase text-3xl text-stone-200 z-30 pointer-events-auto"
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div
      id="products"
      ref={containerRef}
      className="w-full max-w-full relative py-10 lg:py-20" // Removed rounded-t-3xl here
      style={{
        background: "url('/noise.png'), linear-gradient(#000b1e, #f5f5f4, #9fb1ad)",
        backgroundRepeat: "round",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="flex justify-center sticky top-0">
        {"Our Services".split("").map((char, index) => (
          <div
            key={index}
            className="text-5xl lg:text-[150px] text-white font-bold flex flex-col uppercase overflow-hidden"
          >
            <motion.span
              key={index}
              initial={{ transform: "translateY(50%)" }}
              whileInView={{ transform: "translateY(0%)" }}
              transition={{
                duration: 1,
                delay: 0.1 * index,
                type: "spring",
              }}
              className={index === 2 ? "mr-8" : ""}
            >
              {char}
            </motion.span>
          </div>
        ))}
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}

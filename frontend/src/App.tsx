import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"

export default function App() {
  const COLORS = ["#13ffaa", '#1e67c6', "#ce8acf", "#dd335c"]
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <motion.main
      style={{ backgroundImage }}
      className="w-full min-h-screen text-white">
      <div className="flex items-center justify-center py-[5vmin]">
      </div>
    </motion.main>
  )
}

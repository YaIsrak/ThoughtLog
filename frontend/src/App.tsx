import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"
import NoteForm from "./components/note-form"
import SearchNotes from "./components/search-notes"
import NotesGrid from "./components/note-grid"
import TodoGrid from "./components/todo-grid"

export default function App() {
  const COLORS = ["#13ffaa", '#1e67c6', "#ce8acf", "#dd335c"]
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #02061700 50%, ${color})`

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
      <div className="flex flex-col items-center justify-center py-[5vmin]">

        {/* Header */}
        <div className="flex gap-2 items-center">
          <SearchNotes />
          <NoteForm />
        </div>

        {/* Main content */}
        <div className="max-w-screen-xl grid grid-cols-3 py-5 px-4 md:px-12 lg:px-24 gap-4">
          <NotesGrid />
          <TodoGrid />
        </div>
      </div>
    </motion.main>
  )
}


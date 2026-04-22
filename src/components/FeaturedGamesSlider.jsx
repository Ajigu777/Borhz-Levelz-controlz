import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Gamepad2, Stars } from 'lucide-react'
import slide1 from '../assets/slide 1.jpg'
import slide2 from '../assets/slide 2.jpg'
import slide3 from '../assets/slide 3.jpg'
import slide4 from '../assets/slide 4.jpg'
import slide5 from '../assets/slide 5.jpg'
import slide6 from '../assets/slide 6.jpg'
import slide7 from '../assets/slide 7.jpg'
import slide8 from '../assets/slide 8.jpg'

const games = [
  { id: 1, title: 'WARZONE ELITE', tag: 'TRENDING', src: slide1 },
  { id: 2, title: 'CINEMA PRIVATE', tag: '4K RESOLUTION', src: slide2 },
  { id: 3, title: 'CONSOLE PRO', tag: 'NEXT-GEN', src: slide3 },
  { id: 4, title: 'VALORANT ARENA', tag: 'COMPETITIVE', src: slide4 },
  { id: 5, title: 'FIFA ULTIMATE', tag: 'SPORTS', src: slide5 },
  { id: 6, title: 'RACING SIM', tag: 'IMMERSIVE', src: slide6 },
  { id: 7, title: 'EVENT SPECIAL', tag: 'MOBILE SETUP', src: slide7 },
  { id: 8, title: 'REPAIR LAB', tag: 'PRO SERVICE', src: slide8 },
]

export default function FeaturedGamesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef()

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 500 : -500, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (d) => ({ x: d < 0 ? 500 : -500, opacity: 0, scale: 0.9, transition: { duration: 0.6 } }),
  }

  const paginate = (dir) => {
    setDirection(dir)
    setCurrentIndex((prev) => (prev + dir + games.length) % games.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timerRef.current)
  }, [currentIndex])

  return (
    <section id="featured-games" className="relative overflow-hidden bg-blc-black py-24 sm:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
        <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-blc-cyan to-transparent" />
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blc-pink to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-4 flex items-center justify-center gap-3 md:justify-start"
            >
              <Stars size={16} className="text-blc-pink" />
              <span className="font-[Share Tech Mono] text-xs uppercase tracking-[0.4em] text-blc-pink">
                The Highlight Reel
              </span>
            </motion.div>
            <h2 className="font-orbitron text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
              Featured <span className="text-blc-cyan">Games</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => { clearInterval(timerRef.current); paginate(-1); }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-blc-pink hover:bg-blc-pink/10 hover:text-blc-pink"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => { clearInterval(timerRef.current); paginate(1); }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-blc-cyan hover:bg-blc-cyan/10 hover:text-blc-cyan"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/5 bg-blc-slate shadow-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={games[currentIndex].src}
                alt={games[currentIndex].title}
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blc-black via-blc-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-4">
                <span className="rounded-full bg-white/10 px-4 py-1.5 font-[Share Tech Mono] text-[10px] uppercase tracking-[0.3em] text-blc-cyan backdrop-blur-md border border-white/10">
                  {games[currentIndex].tag}
                </span>
                <h3 className="font-orbitron text-3xl font-black uppercase text-white sm:text-5xl lg:text-6xl">
                  {games[currentIndex].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Navigator */}
        <div className="mt-8 flex justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {games.map((game, i) => (
            <button
              key={game.id}
              onClick={() => { clearInterval(timerRef.current); setCurrentIndex(i); }}
              className={`relative h-2 w-12 flex-shrink-0 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'bg-blc-cyan w-20' : 'bg-white/10 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

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
  const touchStartRef = useRef(0)
  const touchEndRef = useRef(0)

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 500 : -500, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: (d) => ({ x: d < 0 ? 500 : -500, opacity: 0, scale: 0.9, transition: { duration: 0.6 } }),
  }

  const paginate = (dir) => {
    setDirection(dir)
    setCurrentIndex((prev) => (prev + dir + games.length) % games.length)
  }

  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndRef.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const distance = touchStartRef.current - touchEndRef.current
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swiped left, go to next
        clearInterval(timerRef.current)
        paginate(1)
      } else {
        // Swiped right, go to previous
        clearInterval(timerRef.current)
        paginate(-1)
      }
    }
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

  return (
    <section id="featured-games" className="relative overflow-hidden bg-blc-black py-12 sm:py-16 lg:py-20">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
        <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-blc-cyan to-transparent" />
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blc-pink to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
          <div className="w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-4 flex items-center justify-center gap-3 lg:justify-start"
            >
              <Stars size={14} className="sm:h-4 sm:w-4 text-blc-pink" />
              <span className="font-[Share Tech Mono] text-[10px] sm:text-xs uppercase tracking-[0.4em] text-blc-pink">
                The Highlight Reel
              </span>
            </motion.div>
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Featured <span className="text-blc-cyan">Games</span>
            </h2>
          </div>
          
          {/* Navigation Buttons - Hidden on mobile, visible on lg */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => { clearInterval(timerRef.current); paginate(-1); }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blc-pink hover:bg-blc-pink/10 hover:text-blc-pink active:scale-95"
              aria-label="Previous game"
              title="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => { clearInterval(timerRef.current); paginate(1); }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blc-cyan hover:bg-blc-cyan/10 hover:text-blc-cyan active:scale-95"
              aria-label="Next game"
              title="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Main Slider */}
          <div 
            className="relative w-full overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/5 bg-blc-slate shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Responsive aspect ratio */}
            <div className="relative w-full bg-blc-slate pt-[100%] sm:pt-[66.67%]">
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
                    className="h-full w-full object-cover opacity-70"
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blc-black via-blc-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blc-black/60 via-transparent to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-4 sm:p-6 lg:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="rounded-full bg-white/10 px-3 py-1 sm:px-4 sm:py-2 font-[Share Tech Mono] text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-blc-cyan backdrop-blur-md border border-white/10">
                        {games[currentIndex].tag}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mt-3 sm:mt-4 font-orbitron text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight"
                    >
                      {games[currentIndex].title}
                    </motion.h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Buttons - Visible on mobile, hidden on lg */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-2 lg:hidden">
              <button
                onClick={() => { clearInterval(timerRef.current); paginate(-1); }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white transition hover:border-blc-pink hover:bg-blc-pink/20 hover:text-blc-pink active:scale-90"
                aria-label="Previous game"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => { clearInterval(timerRef.current); paginate(1); }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white transition hover:border-blc-cyan hover:bg-blc-cyan/20 hover:text-blc-cyan active:scale-90"
                aria-label="Next game"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Thumbnail Navigator - Responsive */}
          <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {games.map((game, i) => (
              <button
                key={game.id}
                onClick={() => { clearInterval(timerRef.current); setCurrentIndex(i); }}
                className={`relative flex-shrink-0 transition-all duration-500 rounded-lg overflow-hidden border ${
                  i === currentIndex
                    ? 'border-blc-cyan bg-blc-cyan/20 h-16 w-20 sm:h-20 sm:w-24 shadow-[0_0_20px_rgba(0,191,255,0.3)]'
                    : 'border-white/10 bg-white/5 h-14 w-16 sm:h-16 sm:w-20 hover:border-white/30 hover:bg-white/10'
                }`}
                title={game.title}
              >
                <img
                  src={game.src}
                  alt={game.title}
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <span className="absolute bottom-1 left-1 text-[8px] sm:text-[9px] font-bold text-white truncate px-1">
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
    </section>
  )
}

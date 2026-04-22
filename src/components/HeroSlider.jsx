import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, CalendarCheck, Gamepad2, ArrowRight } from 'lucide-react'
import slide1 from '../assets/slide 1.jpg'
import slide2 from '../assets/slide 2.jpg'
import slide3 from '../assets/slide 3.jpg'
import slide4 from '../assets/slide 4.jpg'
import slide5 from '../assets/slide 5.jpg'
import slide6 from '../assets/slide 6.jpg'
import slide7 from '../assets/slide 7.jpg'
import slide8 from '../assets/slide 8.jpg'

const slides = [
  {
    id: 1,
    src: slide1,
    tag: 'PREMIUM GAMING HUB',
    title: 'Level Up',
    subtitle: 'Your World',
    desc: 'Command the next generation of gaming experiences with BLC, where immersive visuals and pro service collide.',
    accent: '#E8185A',
  },
  {
    id: 2,
    src: slide2,
    tag: 'EXCLUSIVE SCREENINGS',
    title: 'Cinema',
    subtitle: 'Reimagined',
    desc: 'Private movie sessions with cinematic-level sound and 4K visuals for you and your crew.',
    accent: '#00BFFF',
  },
  {
    id: 3,
    src: slide3,
    tag: 'EVENT GAMING SPECIALISTS',
    title: 'We Bring',
    subtitle: 'The Action',
    desc: 'Professional mobile gaming entertainment delivered straight to your parties and corporate events.',
    accent: '#E8185A',
  },
]

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.75 },
      opacity: { duration: 0.75 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  }),
}

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)
  const navigate = useNavigate()

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((i) => (i + 1) % slides.length)
    }, 8000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [])

  const next = () => {
    setDirection(1)
    setCurrentIndex((i) => (i + 1) % slides.length)
    stopAutoPlay()
    startAutoPlay()
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length)
    stopAutoPlay()
    startAutoPlay()
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    stopAutoPlay()
    startAutoPlay()
  }

  const handleFeaturedGames = () => {
    const section = document.getElementById('featured-games')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const slide = slides[currentIndex]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-blc-black">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Zooming image */}
          <motion.img
            src={slide.src}
            alt={slide.title}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear' }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blc-black via-blc-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-blc-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.05)_0%,transparent_70%)]" />

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
              <div className="max-w-3xl">
                {/* Animated Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-4 flex items-center gap-3"
                >
                  <span className="h-px w-8 bg-blc-pink" />
                  <span 
                    className="font-[Share Tech Mono] text-xs uppercase tracking-[0.4em] sm:text-sm"
                    style={{ color: slide.accent }}
                  >
                    {slide.tag}
                  </span>
                </motion.div>

                {/* Splitting Title Animation Placeholder (Simpler for now) */}
                <div className="mb-6 overflow-hidden">
                  <motion.h1
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-orbitron text-[3.5rem] font-black uppercase leading-[0.95] text-white sm:text-[5.5rem] lg:text-[7rem]"
                  >
                    {slide.title}
                    <br />
                    <span 
                      className="bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent"
                      style={{ WebkitTextStroke: `1px ${slide.accent}` }}
                    >
                      {slide.subtitle}
                    </span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-10 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
                >
                  {slide.desc}
                </motion.p>

                {/* Requested Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <Link
                    to="/contact"
                    className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-blc-pink px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(232,24,90,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(232,24,90,0.5)] active:scale-95"
                  >
                    <CalendarCheck size={18} />
                    Book a Session
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  </Link>

                  <button
                    onClick={handleFeaturedGames}
                    className="group flex items-center justify-center gap-3 rounded-full border-2 border-blc-cyan/50 bg-blc-cyan/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-blc-cyan backdrop-blur-md transition-all hover:border-blc-cyan hover:bg-blc-cyan/20 hover:scale-105 active:scale-95"
                  >
                    <Gamepad2 size={18} />
                    Featured Games
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-blc-cyan hover:bg-blc-cyan/20 hover:text-blc-cyan"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-blc-cyan hover:bg-blc-cyan/20 hover:text-blc-cyan"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-10 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group relative h-1.5 w-12 overflow-hidden rounded-full bg-white/20"
            aria-label={`Go to slide ${i + 1}`}
          >
            {currentIndex === i && (
              <motion.div
                layoutId="progress"
                className="absolute inset-0 bg-blc-pink"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 8, ease: 'linear' }}
              />
            )}
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {/* Side Decorative Text */}
      <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 rotate-90 overflow-hidden hidden lg:block">
        <span className="font-[Share Tech Mono] text-xs uppercase tracking-[1em] text-white/10 select-none">
          BLC · GAMING · ENTERTAINMENT · HUB
        </span>
      </div>
    </div>
  )
}

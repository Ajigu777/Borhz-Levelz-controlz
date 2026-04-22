import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CalendarCheck, Gamepad2, ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function HeroContent() {
  const navigate = useNavigate()

  const handleBookSession = () => {
    navigate('/contact')
  }

  const handleFeaturedGames = () => {
    const section = document.getElementById('featured-games')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-20 flex w-full max-w-5xl flex-col gap-5 sm:gap-8 text-left"
    >
      <style>{`
        .glitch {
          position: relative;
          display: inline-block;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          clip-path: inset(0 0 0 0);
        }
        .glitch::before {
          color: #E8185A;
          animation: glitchTop 2.5s infinite linear alternate-reverse;
          z-index: 1;
          opacity: 0.75;
        }
        .glitch::after {
          color: #00BFFF;
          animation: glitchBottom 3s infinite linear alternate-reverse;
          z-index: 1;
          opacity: 0.65;
        }
        @keyframes glitchTop {
          0%   { transform: translate(0px, 0px);  clip-path: inset(0 0 65% 0); }
          20%  { transform: translate(-2px,-2px); clip-path: inset(0 0 55% 0); }
          40%  { transform: translate(2px,-1px);  clip-path: inset(0 0 70% 0); }
          60%  { transform: translate(-1px,1px);  clip-path: inset(0 0 50% 0); }
          80%  { transform: translate(1px,-1px);  clip-path: inset(0 0 60% 0); }
          100% { transform: translate(0px,2px);   clip-path: inset(0 0 65% 0); }
        }
        @keyframes glitchBottom {
          0%   { transform: translate(0px,0px);  clip-path: inset(55% 0 0 0); }
          20%  { transform: translate(1px,1px);  clip-path: inset(45% 0 0 0); }
          40%  { transform: translate(-2px,0px); clip-path: inset(65% 0 0 0); }
          60%  { transform: translate(1px,-2px); clip-path: inset(50% 0 0 0); }
          80%  { transform: translate(-1px,1px); clip-path: inset(60% 0 0 0); }
          100% { transform: translate(0px,-1px); clip-path: inset(55% 0 0 0); }
        }

        .btn-book {
          position: relative;
          overflow: hidden;
        }
        .btn-book::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-book:hover::after {
          transform: translateX(100%);
        }
      `}</style>

      {/* Tag line */}
      <motion.p variants={item} className="text-xs sm:text-sm font-[Share_Tech_Mono] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-blc-cyan/90">
        [ VISUAL ENTERTAINMENT &amp; GAMING HUB ]
      </motion.p>

      {/* Heading */}
      <motion.div variants={item} className="space-y-1 sm:space-y-3">
        <h1 className="text-[3.2rem] xs:text-[4rem] sm:text-[5rem] lg:text-[5.5rem] font-black uppercase leading-[0.88] text-white">
          LEVEL UP
        </h1>
        <h1 className="relative text-[3.2rem] xs:text-[4rem] sm:text-[5rem] lg:text-[5.5rem] font-black uppercase leading-[0.88]">
          <span className="bg-gradient-to-r from-blc-pink to-blc-cyan bg-clip-text text-transparent">YOUR WORLD</span>
          <span className="glitch" data-text="YOUR WORLD" aria-hidden="true" />
        </h1>
        <p className="text-[0.5rem] sm:text-[0.55rem] max-w-4xl uppercase tracking-[0.45em] text-white/15">
          BORHZ LEVEL CONTROLZ
        </p>
      </motion.div>

      {/* Description */}
      <motion.p variants={item} className="max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-blc-text/75">
        Command the next generation of gaming experiences with BLC — where immersive visuals, premium service, and bold brand energy collide in every digital world.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {/* Book a Session */}
        <button
          id="hero-book-session-btn"
          onClick={handleBookSession}
          className="btn-book inline-flex items-center justify-center gap-2 rounded-full bg-blc-pink px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white shadow-[0_0_28px_rgba(232,24,90,0.45)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_44px_rgba(232,24,90,0.65)] active:scale-[0.98]"
        >
          <CalendarCheck size={16} className="shrink-0" />
          Book a Session
          <ArrowRight size={14} className="shrink-0 opacity-70" />
        </button>

        {/* Featured Games */}
        <button
          id="hero-featured-games-btn"
          onClick={handleFeaturedGames}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-blc-cyan/60 bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-blc-cyan shadow-[0_0_18px_rgba(0,191,255,0.15)] transition-all duration-300 hover:bg-blc-cyan/10 hover:border-blc-cyan hover:shadow-[0_0_32px_rgba(0,191,255,0.3)] hover:scale-[1.04] active:scale-[0.98]"
        >
          <Gamepad2 size={16} className="shrink-0" />
          Featured Games
        </button>
      </motion.div>

      {/* Stats Card — hidden on very small screens, repositioned on mobile */}
      <motion.div
        variants={item}
        className="mt-2 flex gap-6 sm:gap-0 sm:flex-col sm:absolute sm:bottom-8 sm:right-0 sm:rounded-3xl sm:border sm:border-blc-cyan/20 sm:bg-blc-slate/90 sm:p-5 sm:text-right sm:text-sm sm:text-blc-text/80 sm:shadow-[0_40px_120px_rgba(0,191,255,0.08)]"
      >
        <div>
          <p className="text-lg sm:text-xl font-orbitron text-blc-cyan">100+</p>
          <p className="text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] text-blc-muted">Titles</p>
        </div>
        <div>
          <p className="text-lg sm:text-xl font-orbitron text-blc-cyan">4K</p>
          <p className="text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] text-blc-muted">Quality</p>
        </div>
        <div>
          <p className="text-lg sm:text-xl font-orbitron text-blc-cyan">PRO</p>
          <p className="text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] text-blc-muted">Service</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

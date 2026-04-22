import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LOGO_CHARS = 'BLC'.split('')
const TAGLINE = 'BORHZ · LEVEL · CONTROLZ'

export default function LoadingScreen({ show }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [show])

  // Animate the progress bar filling up during the loading duration
  useEffect(() => {
    if (!show) return
    setProgress(0)
    const start = performance.now()
    const duration = 1800 // slightly under 2000ms so it looks snappy at the end

    const raf = (now) => {
      const elapsed = now - start
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct < 100) requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(id)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55, ease: 'easeIn' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#0D0D0D' }}
        >
          {/* Scanline overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,191,255,0.03) 3px,rgba(0,191,255,0.03) 4px)',
              zIndex: 1,
            }}
          />

          {/* Radial glow blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,191,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(232,24,90,0.1) 0%, transparent 60%)',
              zIndex: 1,
            }}
          />

          {/* Corner brackets — decorative */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <motion.div
              key={i}
              aria-hidden="true"
              className={`absolute ${pos} h-8 w-8 sm:h-12 sm:w-12`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              style={{ zIndex: 2 }}
            >
              <div
                className="h-full w-full"
                style={{
                  borderTop: i < 2 ? '2px solid #00BFFF' : 'none',
                  borderBottom: i >= 2 ? '2px solid #00BFFF' : 'none',
                  borderLeft: i % 2 === 0 ? '2px solid #00BFFF' : 'none',
                  borderRight: i % 2 === 1 ? '2px solid #00BFFF' : 'none',
                }}
              />
            </motion.div>
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* BLC Big letters */}
            <div className="flex items-end gap-2 sm:gap-4 mb-4 sm:mb-6">
              {LOGO_CHARS.map((char, i) => (
                <motion.span
                  key={char}
                  className="font-orbitron font-black uppercase text-white select-none"
                  style={{
                    fontSize: 'clamp(4rem, 18vw, 10rem)',
                    lineHeight: 1,
                    textShadow: '0 0 40px rgba(0,191,255,0.4)',
                    letterSpacing: '-0.02em',
                  }}
                  initial={{ opacity: 0, y: 60, skewX: -8 }}
                  animate={{ opacity: 1, y: 0, skewX: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.12,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Pink accent line */}
            <motion.div
              className="mb-4 sm:mb-6 h-[2px] w-24 sm:w-40 rounded-full"
              style={{ background: 'linear-gradient(90deg, #E8185A, #00BFFF)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease: 'easeOut' }}
            />

            {/* Tagline */}
            <motion.p
              className="mb-10 sm:mb-14 font-[Share_Tech_Mono] uppercase tracking-[0.3em] sm:tracking-[0.45em] text-blc-cyan/80"
              style={{ fontSize: 'clamp(0.55rem, 2.2vw, 0.8rem)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              {TAGLINE}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="relative w-56 sm:w-80 lg:w-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Track */}
              <div className="h-[3px] w-full rounded-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #E8185A, #00BFFF)',
                    boxShadow: '0 0 12px rgba(0,191,255,0.7)',
                    transition: 'width 0.08s linear',
                  }}
                />
              </div>
              {/* Label */}
              <div className="mt-3 flex items-center justify-between">
                <span className="font-[Share_Tech_Mono] text-[0.6rem] uppercase tracking-[0.3em] text-white/30">
                  INITIALIZING
                </span>
                <span className="font-[Share_Tech_Mono] text-[0.6rem] tabular-nums text-blc-cyan/70">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

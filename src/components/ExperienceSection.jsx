import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Zap, ShieldCheck, Activity, Target } from 'lucide-react'

export default function ExperienceSection() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const drawOrbitalRing = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#00BFFF'
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.15

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 120

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Orbital dots
      for (let i = 0; i < 4; i++) {
        const angle = (time * 0.0005 + i * Math.PI / 2) % (Math.PI * 2)
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.fillStyle = '#E8185A'
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = (time) => {
      drawOrbitalRing(time)
      animationId = requestAnimationFrame(animate)
    }

    animate(0)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const features = [
    { title: 'Zero Lag', icon: <Zap />, desc: 'Optimized fiber-net for ultimate competitive edge.' },
    { title: 'Elite Gear', icon: <ShieldCheck />, desc: 'The newest 4K consoles and high-FPS gaming PC rigs.' },
    { title: 'Data Feed', icon: <Activity />, desc: 'Live tournament stats and player ranking systems.' },
    { title: 'Pro Coaching', icon: <Target />, desc: 'Level up faster with sessions from veteran players.' },
  ]

  return (
    <section className="relative overflow-hidden bg-blc-black py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex h-12 items-center justify-center rounded-full border border-blc-cyan/20 bg-blc-cyan/5 px-6 font-[Share Tech Mono] text-xs uppercase tracking-[0.4em] text-blc-cyan"
          >
            System Diagnostics
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-orbitron text-5xl font-black uppercase text-white sm:text-7xl"
          >
            The BLC <span className="text-blc-pink">Standard</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Canvas Decorative */}
          <canvas
            ref={canvasRef}
            width={600}
            height={600}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen"
          />

          <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-8 rounded-[2rem] border border-white/5 bg-blc-black/40 backdrop-blur-md transition-all hover:border-blc-cyan/20 hover:shadow-[0_0_40px_rgba(0,191,255,0.05)]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-blc-cyan transition-all group-hover:scale-110 group-hover:text-blc-pink hover:bg-white/10">
                  {feature.icon}
                </div>
                <h3 className="mb-4 font-orbitron text-xl font-bold uppercase text-white">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/40">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
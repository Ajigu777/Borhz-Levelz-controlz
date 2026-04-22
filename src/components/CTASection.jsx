import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Play, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-blc-black py-32 lg:py-48">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(0,191,255,0.05)_50%,transparent_100%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,24,90,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-blc-cyan ring-1 ring-white/10"
          >
            <Sparkles size={32} />
          </motion.div>

          <h2 className="font-orbitron mb-8 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
            Unleash <span className="block text-blc-pink">The Power</span>
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
            Join the BLC elite. Whether it's pro tournaments, cinematic movie sessions, or certified tech support, we provide the ultimate level of control.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-4 rounded-full bg-white px-10 py-6 text-sm font-black uppercase tracking-[0.2em] text-blc-black shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:bg-blc-cyan hover:text-white"
              >
                Inquire Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/2349028495830"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 rounded-full border border-white/10 bg-white/5 px-10 py-6 text-sm font-black uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                <MessageSquare size={18} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Tagline Indicator */}
          <div className="mt-24 flex items-center gap-4 opacity-20">
            <div className="h-px w-12 bg-white" />
            <span className="font-[Share Tech Mono] text-[10px] uppercase tracking-[1em]">The Future of Gaming</span>
            <div className="h-px w-12 bg-white" />
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Decoration */}
      <div className="absolute bottom-20 left-20 hidden md:block opacity-5">
        <Play size={100} className="text-white" />
      </div>
      <div className="absolute top-20 right-20 hidden md:block opacity-5">
        <Sparkles size={80} className="text-white" />
      </div>
    </section>
  )
}
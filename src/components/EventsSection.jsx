import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, ArrowUpRight } from 'lucide-react'

const eventsData = [
  {
    title: 'Brand Activations',
    category: 'CORPORATE',
    icon: <Users />,
    desc: 'Bespoke gaming installations for product launches and corporate fan engagement.',
  },
  {
    title: 'Elite Socials',
    category: 'SOCIAL',
    icon: <Calendar />,
    desc: 'Luxury mobile gaming setups for private parties, birthdays, and celebrations.',
  },
  {
    title: 'Outdoor Arenas',
    category: 'COMMUNITY',
    icon: <MapPin />,
    desc: 'Complete open-air gaming festivals with massive screens and pro host support.',
  },
]

export default function EventsSection() {
  return (
    <section className="bg-blc-black py-32 lg:py-40 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blc-pink/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-4 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="h-2 w-2 rounded-full bg-blc-pink animate-pulse" />
            <span className="font-[Share Tech Mono] text-xs uppercase tracking-[0.6em] text-blc-pink">Global Events</span>
          </motion.div>
          <h2 className="font-orbitron text-5xl font-black uppercase text-white sm:text-7xl">
            Live <span className="text-blc-cyan">Engagement</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {eventsData.map((event, idx) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-blc-slate/20 p-10 border border-white/5 transition-all hover:bg-blc-slate/40 hover:border-blc-cyan/20"
            >
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-blc-pink group-hover:bg-blc-pink/10 transition-colors">
                  {event.icon}
                </div>
                <span className="mb-2 inline-block font-[Share Tech Mono] text-[10px] uppercase tracking-widest text-white/30">
                  {event.category}
                </span>
                <h3 className="font-orbitron text-2xl font-bold uppercase text-white mb-6">
                  {event.title}
                </h3>
                <p className="text-base leading-7 text-white/50">
                  {event.desc}
                </p>
              </div>

              <motion.a
                href="/contact"
                className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blc-cyan transition-all hover:gap-5"
              >
                Inquire Package
                <ArrowUpRight size={16} />
              </motion.a>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

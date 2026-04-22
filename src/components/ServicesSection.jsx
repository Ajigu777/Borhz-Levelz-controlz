import { motion } from 'framer-motion'
import { Monitor, Video, Truck, ShoppingBag, Settings, Tool } from 'lucide-react'

const servicesData = [
  {
    label: '01',
    title: 'Precision Gaming',
    icon: <Monitor size={28} />,
    desc: 'Ultra-low latency setups with 240Hz monitors and pro-grade peripherals.',
    color: 'text-blc-cyan'
  },
  {
    label: '02',
    title: 'Cinema Suites',
    icon: <Video size={28} />,
    desc: 'Private 4K screenings with Dolby Atmos sound for a truly massive experience.',
    color: 'text-blc-pink'
  },
  {
    label: '03',
    title: 'Mobile Events',
    icon: <Truck size={28} />,
    desc: 'We bring the arena to you with custom outdoor gaming truck setups.',
    color: 'text-blc-cyan'
  },
  {
    label: '04',
    title: 'Hardware Hub',
    icon: <ShoppingBag size={28} />,
    desc: 'Official retailers for PS5, Xbox Series X, and custom PC components.',
    color: 'text-blc-pink'
  },
  {
    label: '05',
    title: 'Pro Integration',
    icon: <Settings size={28} />,
    desc: 'Full home theater and gaming room installations and networking.',
    color: 'text-blc-cyan'
  },
  {
    label: '06',
    title: 'Rapid Repairs',
    icon: <Tool size={28} />,
    desc: 'Expert technician services for consoles, controllers, and cooling systems.',
    color: 'text-blc-pink'
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-blc-slate py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-4 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="h-px w-8 bg-blc-pink" />
            <span className="font-[Share Tech Mono] text-xs uppercase tracking-[0.6em] text-blc-pink">Our Core Ops</span>
          </motion.div>
          <h2 className="font-orbitron text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
            Prime <span className="text-blc-cyan">Directives</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[3rem] border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
              className="group relative bg-blc-black p-12 transition-all"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className={service.color}>{service.icon}</div>
              </div>
              
              <span className="absolute right-12 top-12 font-orbitron text-xs font-bold opacity-10">
                {service.label}
              </span>

              <h3 className="mb-4 font-orbitron text-2xl font-bold uppercase text-white">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-white/40">
                {service.desc}
              </p>

              {/* Interaction Decor */}
              <div className="absolute bottom-0 left-12 h-0.5 w-0 bg-blc-cyan transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

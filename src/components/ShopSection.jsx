import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart, Cpu, Wrench, ChevronRight, Zap } from 'lucide-react'

const tags = ['PlayStation', 'Xbox', 'Nintendo Switch', 'PC Gaming', 'Accessories']

const products = [
  {
    name: 'PlayStation 5',
    accent: '#E8185A',
    icon: <ShoppingCart />,
    badge: 'In Stock',
    desc: 'The latest in immersive 4K gaming performance.',
  },
  {
    name: 'Xbox Series X',
    accent: '#00BFFF',
    icon: <Cpu />,
    badge: 'Available',
    desc: 'Power your dreams with the fastest Xbox ever.',
  },
  {
    name: 'Repair Labs',
    accent: '#FFD700',
    icon: <Wrench />,
    badge: 'Pro Service',
    desc: 'Certified repair & component upgrades.',
  },
]

export default function ShopSection() {
  return (
    <section className="bg-blc-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Banner Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blc-slate to-blc-black p-12 lg:p-20 border border-white/5"
        >
          {/* Background Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blc-cyan/10 blur-[100px]" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blc-pink/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-6 flex items-center gap-3"
              >
                <Zap size={16} className="text-blc-cyan" />
                <span className="font-[Share Tech Mono] text-xs uppercase tracking-[0.4em] text-blc-cyan">Premium Hardware</span>
              </motion.div>
              <h2 className="font-orbitron text-4xl font-black uppercase text-white sm:text-6xl">
                Elite Console <span className="block text-blc-pink">Sales & Lab</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/50">
                Authorized dealers for all major platforms. From the newest drops to certified repairs, we keep you in the game.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <Link
                to="/contact"
                className="group relative flex items-center gap-4 rounded-3xl bg-white px-8 py-6 text-sm font-bold uppercase tracking-widest text-blc-black transition-transform hover:scale-105 active:scale-95"
              >
                Inquire Now
                <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Product Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-blc-slate/20 p-10 transition-all hover:bg-blc-slate/40 hover:border-white/10"
            >
              <div 
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-transform group-hover:scale-110 group-hover:rotate-6"
                style={{ color: product.accent }}
              >
                {product.icon}
              </div>
              <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-blc-cyan opacity-60">
                {product.badge}
              </span>
              <h3 className="font-orbitron text-2xl font-bold uppercase text-white">
                {product.name}
              </h3>
              <p className="mt-3 text-sm text-white/40">
                {product.desc}
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <a 
                  href="https://wa.me/" 
                  className="text-[10px] font-bold uppercase tracking-widest text-white underline-offset-8 transition hover:text-blc-pink hover:underline"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

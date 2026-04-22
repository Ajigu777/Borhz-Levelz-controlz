import { Link } from 'react-router-dom'
import blcLogo from '../assets/logo.jpg'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'Events', to: '/events' },
]

const resources = [
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/contact' },
  { label: 'Terms of Service', to: '/contact' },
  { label: 'FAQs', to: '/contact' },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative border-t border-blc-cyan/30 bg-gradient-to-b from-blc-slate via-blc-slate/95 to-blc-black text-blc-muted">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 md:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <Link to="/" className="mb-6 flex w-fit items-center justify-start" aria-label="BORHZ LEVEL CONTROLZ home">
              <img
                src={blcLogo}
                alt="Borhz Level Controlz logo"
                className="h-10 md:h-12 w-auto object-contain opacity-90 transition-opacity duration-200 hover:opacity-100 mix-blend-screen"
              />
            </Link>
            <p className="text-xs font-[Rajdhani] uppercase tracking-widest text-blc-cyan mb-2">
              Premium Gaming Hub
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Your ultimate destination for competitive gaming, entertainment, and unforgettable experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-orbitron text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm transition duration-300 hover:text-blc-cyan"
                  >
                    <span className="h-1 w-1 rounded-full bg-blc-pink transition duration-300 group-hover:bg-blc-cyan" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-orbitron text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm transition duration-300 hover:text-blc-cyan"
                  >
                    <span className="h-1 w-1 rounded-full bg-blc-pink transition duration-300 group-hover:bg-blc-cyan" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-orbitron text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/2349028495830"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm transition duration-300 hover:text-blc-cyan"
                aria-label="Contact us on WhatsApp - +234 902 849 5830"
              >
                <Phone size={16} className="flex-shrink-0 text-blc-pink transition duration-300 group-hover:text-blc-cyan" aria-hidden="true" />
                <span>+234 902 849 5830</span>
              </a>
              <div className="group flex items-start gap-3 text-sm transition duration-300 hover:text-blc-cyan">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-blc-pink transition duration-300 group-hover:text-blc-cyan" aria-hidden="true" />
                <span>Rm 15 Wall Street Plaza Danraka Road opposite A.B.U North gate Samaru Zaria</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-blc-cyan/30 to-transparent" />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="text-center md:text-left">
            <p className="font-orbitron text-lg font-semibold text-blc-white uppercase tracking-[0.1em]">
              BORHZ.LEVEL.CONTROLZ
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-blc-cyan">
              © 2026. All rights reserved.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-blc-pink bg-blc-pink/10 px-6 py-3 font-orbitron text-sm font-semibold uppercase tracking-[0.15em] text-blc-pink transition duration-300 hover:bg-blc-pink hover:text-white"
              aria-label="Book your experience - Go to contact page"
            >
              Book Experience
              <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, white 4px, white 8px)',
        }}
      />
    </footer>
  )
}

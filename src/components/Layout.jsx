import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Layout() {
  return (
    <div className="min-h-screen bg-blc-black text-blc-text">
      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/2349028495830"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BLC on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      >
        <div className="relative">
          {/* Ping ring */}
          <div className="absolute -inset-1 rounded-full border-2 border-green-400/40 animate-ping" />
          
          {/* Button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/30">
            <FaWhatsapp size={28} className="text-white" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-16 whitespace-nowrap rounded bg-black/80 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
            Chat with BLC
          </div>
        </div>
      </motion.a>
    </div>
  )
}

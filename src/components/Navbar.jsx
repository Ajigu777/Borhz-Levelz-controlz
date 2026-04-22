import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import blcLogo from '../assets/logo.jpg'
import { Disclosure } from '@headlessui/react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {({ open }) => (
        <div 
          className={`mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 mt-2 transition-all duration-500 ${
            scrolled 
              ? 'bg-blc-slate/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          <div className="flex h-12 items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center group">
                <img
                  src={blcLogo}
                  alt="Borhz Level Controlz"
                  className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 mix-blend-screen"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `relative px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                          isActive 
                            ? 'text-blc-cyan' 
                            : 'text-white/70 hover:text-white'
                        }`
                      }
                      end={link.to === '/'}
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {isActive && (
                            <motion.div
                              layoutId="navbar-active"
                              className="absolute bottom-0 left-4 right-4 h-0.5 bg-blc-cyan"
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:block"
              >
                <Link
                  to="/contact"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-blc-pink bg-blc-pink/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blc-pink transition-all hover:bg-blc-pink hover:text-white"
                >
                  Book Now
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-full bg-white/5 p-2 text-white outline-none transition hover:bg-white/10 active:scale-95">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Panel */}
          <AnimatePresence>
            {open && (
              <Disclosure.Panel static as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden"
              >
                <div className="space-y-1 px-2 pb-4 pt-4">
                  {navLinks.map((link) => (
                    <Disclosure.Button
                      key={link.to}
                      as={NavLink}
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition ${
                          isActive 
                            ? 'bg-blc-cyan/10 text-blc-cyan' 
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </Disclosure.Button>
                  ))}
                  <div className="mt-4 px-2">
                    <Link
                      to="/contact"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blc-pink px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white"
                    >
                      Book Your Experience
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </div>
      )}
    </Disclosure>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LazyImage from './LazyImage'
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from 'lucide-react'
import image1 from '../assets/image 1.JPG'
import image2 from '../assets/image 2.JPG'
import image3 from '../assets/image 3.JPG'
import video1 from '../assets/video 1.mp4'
import video2 from '../assets/video 2.mp4'

const galleryItems = [
  { id: '1', title: 'Premium Gaming Setup', category: 'SETUP', type: 'image', src: image1 },
  { id: '2', title: 'Elite Arena Visuals', category: 'ARENA', type: 'image', src: image2 },
  { id: '3', title: 'Pro Gaming Station', category: 'EQUIPMENT', type: 'image', src: image3 },
  { id: '4', title: 'Tournament Highlight', category: 'EVENTS', type: 'video', src: video1, thumbnail: image1 },
  { id: '5', title: 'Action Showcase', category: 'RECAP', type: 'video', src: video2, thumbnail: image2 },
]

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentItem = galleryItems[selectedItem]

  const handleNext = () => setSelectedItem((prev) => (prev + 1) % galleryItems.length)
  const handlePrev = () => setSelectedItem((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)

  return (
    <section className="bg-blc-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-[Share Tech Mono] text-xs uppercase tracking-[0.5em] text-blc-cyan"
          >
            Digital Archive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl font-black uppercase text-white sm:text-6xl"
          >
            Visual <span className="text-blc-pink">Experience</span>
          </h2 >
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Main Visual */}
          <div className="lg:col-span-8">
            <motion.div
              layoutId="gallery-main"
              className="group relative aspect-video overflow-hidden rounded-[2rem] border border-white/5 bg-blc-slate shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full"
                >
                  {currentItem.type === 'image' ? (
                    <img src={currentItem.src} alt={currentItem.title} className="h-full w-full object-cover" />
                  ) : (
                    <video src={currentItem.src} title={currentItem.title} autoPlay muted loop className="h-full w-full object-cover" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Overlay Decoration */}
              <div className="absolute inset-0 bg-gradient-to-t from-blc-black via-transparent to-transparent opacity-60" />
              
              {/* Badge */}
              <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                {currentItem.category}
              </div>

              {/* Fullscreen Trigger */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-blc-cyan text-blc-black transition-transform hover:scale-110 active:scale-95"
              >
                <Maximize2 size={24} />
              </button>

              {/* Controls */}
              <div className="absolute bottom-8 left-8 flex gap-3">
                <button onClick={handlePrev} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition hover:bg-white/10">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={handleNext} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition hover:bg-white/10">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / List */}
          <div className="lg:col-span-4 lg:pl-8">
            <div className="space-y-4">
              {galleryItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => setSelectedItem(i)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-3 transition-all duration-300 ${
                    selectedItem === i 
                      ? 'border-blc-pink bg-blc-pink/10 shadow-[0_0_20px_rgba(232,24,90,0.1)]' 
                      : 'border-white/5 bg-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-blc-slate">
                    <img src={item.thumbnail || item.src} className="h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-100" />
                    {item.type === 'video' && <Play size={12} className="absolute inset-0 m-auto text-white fill-white" />}
                  </div>
                  <div className="text-left">
                    <p className={`font-orbitron text-xs font-bold uppercase tracking-widest ${selectedItem === i ? 'text-blc-pink' : 'text-white/60'}`}>
                      {item.title}
                    </p>
                    <p className="mt-1 font-[Share Tech Mono] text-[10px] text-white/30">{item.category}</p>
                  </div>
                  {selectedItem === i && (
                    <motion.div layoutId="sidebar-active" className="absolute left-0 top-0 h-full w-1 bg-blc-pink" />
                  )}
                </motion.button>
              ))}
            </div>
            
            <Link
              to="/gallery"
              className="mt-8 flex items-center justify-center gap-3 rounded-full border border-blc-cyan/50 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blc-cyan transition hover:bg-blc-cyan hover:text-blc-black"
            >
              Full Visual Gallery <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <button className="absolute right-8 top-8 text-white/50 hover:text-white transition">
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[85vh] w-full max-w-6xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {currentItem.type === 'image' ? (
                <img src={currentItem.src} className="h-full w-full object-contain" />
              ) : (
                <video src={currentItem.src} controls autoPlay className="h-full w-full object-contain" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
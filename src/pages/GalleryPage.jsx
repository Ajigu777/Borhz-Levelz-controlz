import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import img1 from '../assets/image 1.JPG'
import img2 from '../assets/image 2.JPG'
import img3 from '../assets/image 3.JPG'
import vid1 from '../assets/video 1.mp4'
import vid2 from '../assets/video 2.mp4'

const MotionLink = motion(Link)

const mediaData = [
  { id: 1, type: 'image', src: img1, title: 'Gaming Session', category: 'VIDEO GAMES', description: 'Premium gaming at BLC' },
  { id: 2, type: 'image', src: img2, title: 'Movie Night', category: 'MOVIE SESSION', description: 'Private cinema sessions' },
  { id: 3, type: 'image', src: img3, title: 'Outdoor Event', category: 'EVENTS', description: 'BLC at your occasions' },
  { id: 7, type: 'video', src: vid1, thumbnail: img1, title: 'BLC Highlights', category: 'VIDEO', description: 'Watch BLC in action' },
  { id: 8, type: 'video', src: vid2, thumbnail: img3, title: 'Event Recap', category: 'VIDEO', description: 'Our latest event highlights' },
]

export default function GalleryPage() {
  const [modal, setModal] = useState(null)
  const [modalIndex, setModalIndex] = useState(0)

  useEffect(() => {
    if (!modal) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setModal(null)
      if (e.key === 'ArrowLeft') setModalIndex((i) => (i - 1 + mediaData.length) % mediaData.length)
      if (e.key === 'ArrowRight') setModalIndex((i) => (i + 1) % mediaData.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modal])

  const openModal = useCallback((idx) => {
    setModal(mediaData[idx])
    setModalIndex(idx)
  }, [])

  const closeModal = useCallback(() => setModal(null), [])
  const prevModal = useCallback(() => setModalIndex((i) => (i - 1 + mediaData.length) % mediaData.length), [])
  const nextModal = useCallback(() => setModalIndex((i) => (i + 1) % mediaData.length), [])

  useEffect(() => {
    if (modal !== null) setModal(mediaData[modalIndex])
  }, [modalIndex])

  return (
    <div className="space-y-10 bg-blc-black px-4 py-10 sm:px-6 lg:px-8">
      <MotionLink
        to="/gallery/featured"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="group relative flex h-[60vh] w-full overflow-hidden rounded-[2rem] border border-transparent bg-black shadow-[0_35px_100px_rgba(232,24,90,0.12)]"
      >
        <img
          src={img1}
          alt="Featured BLC gallery"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blc-black via-transparent to-transparent" />
        <div className="absolute left-8 top-8 -rotate-6 rounded-full bg-blc-pink px-4 py-2 text-xs font-[Share_Tech_Mono] uppercase tracking-[0.35em] text-blc-black shadow-lg shadow-blc-pink/20">
          FEATURED
        </div>
        <div className="absolute bottom-8 left-8 max-w-xl space-y-4">
          <p className="text-4xl font-orbitron uppercase tracking-[0.16em] text-white sm:text-5xl">Featured Gallery</p>
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-blc-cyan">
            <span>CLICK TO VIEW ALL PHOTOS</span>
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blc-cyan/50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blc-cyan" />
            </span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-blc-pink/0 transition duration-300 group-hover:border-blc-pink/50" />
      </MotionLink>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaData.map((item, idx) => (
          <div
            key={item.id}
            className="overflow-hidden relative group cursor-pointer rounded-[1.75rem] bg-blc-black"
            onClick={() => openModal(idx)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.title}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 bg-blc-pink/90 rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12,9 24,16 12,23" fill="white" />
                    </svg>
                  </span>
                </span>
              </>
            )}
            <span className="absolute left-4 top-4 rounded bg-blc-pink px-3 py-1 text-[0.62rem] font-[Share_Tech_Mono] uppercase tracking-widest text-white">
              {item.category}
            </span>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 rounded bg-blc-black/80 px-4 py-2 text-white text-lg font-orbitron opacity-0 group-hover:opacity-100"
            >
              {item.title}
            </motion.div>
          </div>
        ))}
      </section>

      <AnimatePresence>
        {modal && (
          <motion.div
            key="modal"
            id="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={(e) => { if (e.target.id === 'gallery-modal') closeModal() }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full flex flex-col items-center"
            >
              <button
                className="absolute top-4 right-4 z-60 text-white text-3xl"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 text-blc-pink text-3xl"
                onClick={prevModal}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 text-blc-pink text-3xl"
                onClick={nextModal}
                aria-label="Next"
              >
                &#8594;
              </button>
              {modal.type === 'image' ? (
                <img
                  src={modal.src}
                  alt={modal.title}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
                />
              ) : (
                <video
                  src={modal.src}
                  controls
                  autoPlay
                  playsInline
                  muted
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

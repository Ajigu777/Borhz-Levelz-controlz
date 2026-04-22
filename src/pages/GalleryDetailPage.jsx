import { useMemo, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import img1 from '../assets/image one.JPG'
import img2 from '../assets/image 2.JPG'
import img3 from '../assets/image 3.JPG'
import vid1 from '../assets/video 1.mp4'
import vid2 from '../assets/video 2.mp4'

const mediaData = [
  { id: 1, type: 'image', src: img1, title: 'Gaming Session', category: 'VIDEO GAMES', description: 'Premium gaming at BLC' },
  { id: 2, type: 'image', src: img2, title: 'Movie Night', category: 'MOVIE SESSION', description: 'Private cinema sessions' },
  { id: 3, type: 'image', src: img3, title: 'Outdoor Event', category: 'EVENTS', description: 'BLC at your occasions' },
  { id: 7, type: 'video', src: vid1, thumbnail: img1, title: 'BLC Highlights', category: 'VIDEO', description: 'Watch BLC in action' },
  { id: 8, type: 'video', src: vid2, thumbnail: img3, title: 'Event Recap', category: 'VIDEO', description: 'Our latest event highlights' },
]

export default function GalleryDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [modal, setModal] = useState(null)
  const [modalIndex, setModalIndex] = useState(0)

  const isFeatured = id === 'featured'
  const selectedItem = useMemo(() => mediaData.find((item) => String(item.id) === id), [id])

  // Modal navigation for featured
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

  return (
    <div className="bg-blc-black px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10 flex flex-col gap-4">
        <h1 className="text-5xl font-orbitron uppercase tracking-[-0.05em] text-transparent sm:text-6xl md:text-7xl bg-gradient-to-r from-blc-pink to-blc-cyan bg-clip-text">
          GALLERY
        </h1>
        <p className="max-w-3xl text-sm uppercase tracking-[0.35em] text-blc-text/60">Browse BLC visuals and unlock the full experience.</p>
      </header>

      {isFeatured ? (
        <section className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {mediaData.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openModal(idx)}
              className="mb-4 inline-block w-full cursor-pointer overflow-hidden rounded-3xl bg-blc-slate shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(0,191,255,0.18)]"
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} className="w-full rounded-3xl object-cover" />
              ) : (
                <div className="relative">
                  <img src={item.thumbnail} alt={item.title} className="w-full rounded-3xl object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 bg-blc-pink/90 rounded-full flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="12,9 24,16 12,23" fill="white" />
                      </svg>
                    </span>
                  </span>
                </div>
              )}
              <div className="p-5 text-left">
                <p className="text-lg font-orbitron uppercase text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            </button>
          ))}

          <AnimatePresence>
            {modal && (
              <motion.div
                key="modal"
                id="gallery-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-8"
                onClick={(event) => {
                  if (event.target.id === 'gallery-modal') closeModal()
                }}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative mx-auto max-w-5xl rounded-3xl bg-blc-black p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  >
                    ×
                  </button>
                  <button
                    type="button"
                    onClick={prevModal}
                    className="absolute left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blc-pink text-white text-2xl"
                  >
                    &#8592;
                  </button>
                  <button
                    type="button"
                    onClick={nextModal}
                    className="absolute right-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blc-pink text-white text-2xl"
                  >
                    &#8594;
                  </button>
                  {modal.type === 'image' ? (
                    <img src={modal.src} alt={modal.title} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" />
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
        </section>
      ) : selectedItem ? (
        <section className="flex flex-col items-center justify-center">
          <div className="mb-8 w-full max-w-2xl rounded-3xl bg-blc-slate p-6 shadow-lg">
            <div className="mb-4 flex flex-col items-center">
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.src} alt={selectedItem.title} className="max-h-[60vh] w-full object-contain rounded-xl" />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  muted
                  className="max-h-[60vh] w-full object-contain rounded-xl"
                />
              )}
            </div>
            <h2 className="text-3xl font-orbitron uppercase text-white mb-2">{selectedItem.title}</h2>
            <span className="mb-3 inline-block rounded-full bg-blc-pink/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-blc-pink">
              {selectedItem.category}
            </span>
            <p className="mt-2 text-lg text-white/80">{selectedItem.description}</p>
          </div>
        </section>
      ) : (
        <div className="text-center text-white/70">Media not found.</div>
      )}
    </div>
  )
}


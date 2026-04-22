import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center bg-[#0A1520] overflow-hidden ${className}`}
      style={{ minHeight: '6rem' }}
    >
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0, filter: 'blur(16px)' }}
          animate={{ opacity: loaded ? 1 : 0, filter: loaded ? 'blur(0px)' : 'blur(16px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover"
          {...props}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-[#0A1520]" />
      )}
    </div>
  )
}

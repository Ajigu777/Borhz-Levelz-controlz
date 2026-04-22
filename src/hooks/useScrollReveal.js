import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return { ref, isVisible }
}
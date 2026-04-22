import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * CyberDivider Component
 * Decorative section divider with animated element
 * Visually separates content sections with a cyberpunk aesthetic
 */
export default function SectionDivider() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div className="relative my-8 flex items-center justify-center" role="separator" aria-hidden="true">
      <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blc-cyan to-transparent" />
      <motion.div
        style={{ rotate }}
        className="relative h-3 w-3 rounded-sm bg-blc-cyan shadow-lg shadow-blc-cyan/50"
      />
    </div>
  )
}
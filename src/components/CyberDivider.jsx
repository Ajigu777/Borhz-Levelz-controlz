import { motion, useScroll, useTransform } from 'framer-motion'

export default function CyberDivider() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div className="relative my-16 flex items-center justify-center">
      <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blc-cyan to-transparent" />
      <motion.div
        style={{ rotate }}
        className="relative h-3 w-3 rounded-sm bg-blc-cyan shadow-lg shadow-blc-cyan/50"
      />
    </div>
  )
}
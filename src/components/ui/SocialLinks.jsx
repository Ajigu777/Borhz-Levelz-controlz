import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socials = [
  {
    icon: FaInstagram,
    href: 'https://instagram.com/borhzlevelcontrolz',
    label: 'Instagram',
    hover: '#E1306C',
  },
  {
    icon: FaFacebookF,
    href: 'https://facebook.com/borhzlevelcontrolz',
    label: 'Facebook',
    hover: '#1877F2',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/2349028495830',
    label: 'WhatsApp',
    hover: '#25D366',
  },
]

export default function SocialLinks({ size = 20, gap = 'gap-4', className = '' }) {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {socials.map((s) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          whileHover={{
            scale: 1.2,
            color: s.hover,
            filter: `drop-shadow(0 0 8px ${s.hover})`,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="cursor-pointer text-blc-muted"
        >
          <s.icon size={size} />
        </motion.a>
      ))}
    </div>
  )
}

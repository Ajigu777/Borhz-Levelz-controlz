import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

const contactItems = [
  {
    icon: (
      <svg className="h-5 w-5 text-blc-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10z" /><circle cx="12" cy="12" r="3.5" /></svg>
    ),
    label: 'Location',
    value: 'Rm 15 Wall Street Plaza Danraka Road opposite A.B.U North gate Samaru Zaria',
  },
  {
    icon: (
      <svg className="h-5 w-5 text-blc-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15.46A16.88 16.88 0 0 1 8.54 3H7a2 2 0 0 0-2 2v3.54a2 2 0 0 0 .59 1.41l2.2 2.2a16.88 16.88 0 0 0 7.92 7.92l2.2 2.2a2 2 0 0 0 1.41.59H19a2 2 0 0 0 2-2v-1.54z" /></svg>
    ),
    label: 'WhatsApp',
    value: '+234 902 849 5830',
  },
]

const serviceTypes = []

const buildWhatsAppURL = (data) => {
  const phone = '2349028495830'
  const lines = [
    `Hello BLC! My name is ${data.name}.`,
    `Phone: ${data.phone}`,
    `Service: ${data.service || 'Not specified'}`,
    data.eventDate ? `Event Date: ${data.eventDate}` : null,
    data.message ? `Message: ${data.message}` : null,
  ].filter(Boolean)
  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${phone}?text=${text}`
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    eventDate: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.phone.trim()) errs.phone = 'Phone number is required'
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    const url = buildWhatsAppURL(formData)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
    if (isMobile) {
      window.location.href = url
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', service: '', eventDate: '', message: '' })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="flex flex-col bg-blc-black text-blc-text md:flex-row md:min-h-[80vh]">
      {/* Left: Info Panel */}
      <div className="relative flex w-full flex-col items-center justify-between bg-blc-slate px-8 py-12 md:max-w-md md:rounded-r-[2.5rem] md:px-10 lg:px-16">
        {/* Orbital rings animation */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-blc-cyan/20" />
          <div className="absolute inset-6 animate-spin-slower rounded-full border border-blc-pink/20" />
          <div className="absolute inset-12 animate-spin-slowest rounded-full border border-white/10" />
        </div>
        <div className="mb-8 mt-2 text-2xl font-orbitron font-black uppercase tracking-[0.18em] text-white">BORHZ.LEVEL.CONTROLZ</div>
        <div className="mb-8 text-center text-base font-rajdhani text-white/80">Play with passion.</div>
        <div className="mb-8 w-full space-y-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.link || undefined}
              target={item.link ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-base font-rajdhani text-white/80 hover:text-blc-cyan"
            >
              {item.icon}
              <span>{item.value}</span>
            </a>
          ))}
        </div>
        <div className="mt-auto w-full space-y-4">
          <a
            href="https://wa.me/2349028495830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-none bg-[#25D366] px-6 py-4 text-base font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[#1DA851]"
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>
          <p className="text-center font-[Share Tech Mono] text-xs text-white/50">+234 902 849 5830</p>
        </div>
      </div>

      {/* Right: Booking Form */}
      <div className="flex w-full flex-1 flex-col justify-center bg-blc-black px-8 py-12 md:px-12 lg:px-24">
        <form className="mx-auto w-full max-w-xl space-y-7" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label className="mb-2 block text-sm font-orbitron uppercase tracking-[0.18em] text-white">Full Name *</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-blc-slate border border-white/10 px-4 py-3 text-blc-text font-rajdhani rounded-none focus:outline-none focus:border-blc-cyan transition ${errors.name ? 'border-blc-pink' : ''}`}
              whileFocus={{ boxShadow: '0 0 0 2px #00BFFF' }}
            />
            {errors.name && <div className="mt-1 text-xs text-blc-pink">{errors.name}</div>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-orbitron uppercase tracking-[0.18em] text-white">Phone / WhatsApp *</label>
            <motion.input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full bg-blc-slate border border-white/10 px-4 py-3 text-blc-text font-rajdhani rounded-none focus:outline-none focus:border-blc-cyan transition ${errors.phone ? 'border-blc-pink' : ''}`}
              whileFocus={{ boxShadow: '0 0 0 2px #00BFFF' }}
            />
            {errors.phone && <div className="mt-1 text-xs text-blc-pink">{errors.phone}</div>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-orbitron uppercase tracking-[0.18em] text-white">Location *</label>
            <motion.input
              type="text"
              value="Rm 15 Wall Street Plaza Danraka Road opposite A.B.U North gate Samaru Zaria"
              readOnly
              className="w-full bg-blc-slate border border-white/10 px-4 py-3 text-blc-text/60 font-rajdhani rounded-none focus:outline-none focus:border-blc-cyan transition cursor-not-allowed"
            />
          </div>

          {!submitted && (
            <motion.button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-none bg-[#25D366] px-6 py-4 font-orbitron text-base font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#1DA851]"
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp size={18} />
              SEND ON WHATSAPP
            </motion.button>
          )}

          {submitted && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-none border-l-4 border-green-500 bg-green-500/10 p-4"
            >
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-0.5" size={18} />
                <div className="flex-1">
                  <p className="font-orbitron text-white font-bold">WhatsApp is Opening...</p>
                  <p className="mt-1 text-xs font-rajdhani text-white/60">
                    If it did not open, tap the button again or call: <br />
                    +234 902 849 5830
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </section>
  )
}

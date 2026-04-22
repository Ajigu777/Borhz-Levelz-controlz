const pricingTiers = [
  {
    name: 'Basic',
    price: '₦50,000+',
    features: [
      '2 hours gaming',
      'Standard setup',
      '1 attendant',
      'Up to 10 players',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '₦85,000+',
    features: [
      '4 hours gaming',
      'Enhanced setup',
      '2 attendants',
      'Up to 20 players',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '₦150,000+',
    features: [
      'All day gaming',
      'VIP setup',
      '3 attendants',
      'Unlimited players',
    ],
    featured: false,
  },
]

export default function EventsPricingBanner() {
  return (
    <section className="bg-blc-black py-16 text-blc-text">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-orbitron uppercase tracking-[0.18em] text-white sm:text-3xl">Event Packages & Pricing</h3>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border border-white/5 bg-blc-slate p-8 text-center shadow-lg transition duration-300 ${
                tier.featured ? 'border-t-4 border-blc-cyan/80 shadow-[0_12px_48px_rgba(0,191,255,0.10)]' : ''
              }`}
            >
              {tier.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-blc-cyan/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-blc-black shadow-lg">
                  POPULAR
                </span>
              )}
              <h4 className="mb-2 text-xl font-orbitron uppercase text-white">{tier.name}</h4>
              <div className="mb-4 text-3xl font-black text-blc-cyan">{tier.price}</div>
              <ul className="mb-6 space-y-2 text-sm text-white/70">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-blc-pink px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-blc-pink transition hover:bg-blc-pink/10"
              >
                Enquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

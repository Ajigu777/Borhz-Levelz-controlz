import HeroScene from './HeroScene'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-blc-black text-blc-text">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
          <HeroContent />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,191,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(232,24,90,0.18),transparent_28%)] pointer-events-none" />
    </section>
  )
}

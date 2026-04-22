import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import ExperienceSection from '../components/ExperienceSection'
import EventsSection from '../components/EventsSection'
import ShopSection from '../components/ShopSection'
import FeaturedGamesSlider from '../components/FeaturedGamesSlider'
import GalleryPreview from '../components/GalleryPreview'
import CTASection from '../components/CTASection'
import CyberDivider from '../components/CyberDivider'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HomePage() {
  const heroRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const experienceRef = useScrollReveal()
  const eventsRef = useScrollReveal()
  const shopRef = useScrollReveal()
  const gamesRef = useScrollReveal()
  const galleryRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-blc-black">
      <section ref={heroRef.ref} className="opacity-100">
        <HeroSlider />
      </section>

      <CyberDivider />

      <section ref={servicesRef.ref} className={`transition-opacity duration-1000 ${servicesRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ServicesSection />
      </section>

      <CyberDivider />

      <section ref={experienceRef.ref} className={`transition-opacity duration-1000 ${experienceRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ExperienceSection />
      </section>

      <CyberDivider />

      <section ref={eventsRef.ref} className={`transition-opacity duration-1000 ${eventsRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <EventsSection />
      </section>

      <CyberDivider />

      <section ref={shopRef.ref} className={`transition-opacity duration-1000 ${shopRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ShopSection />
      </section>

      <CyberDivider />

      <section id="featured-games" ref={gamesRef.ref} className={`transition-opacity duration-1000 ${gamesRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <FeaturedGamesSlider />
      </section>

      <CyberDivider />

      <section ref={galleryRef.ref} className={`transition-opacity duration-1000 ${galleryRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <GalleryPreview />
      </section>

      <CyberDivider />

      <section ref={ctaRef.ref} className={`transition-opacity duration-1000 ${ctaRef.isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <CTASection />
      </section>
    </div>
  )
}

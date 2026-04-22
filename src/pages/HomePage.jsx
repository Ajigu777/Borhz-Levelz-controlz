import HeroSlider from '../components/HeroSlider'
import ServicesSection from '../components/ServicesSection'
import ExperienceSection from '../components/ExperienceSection'
import EventsSection from '../components/EventsSection'
import ShopSection from '../components/ShopSection'
import FeaturedGamesSlider from '../components/FeaturedGamesSlider'
import GalleryPreview from '../components/GalleryPreview'
import CTASection from '../components/CTASection'
import SectionDivider from '../components/CyberDivider'
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
      <section ref={heroRef.ref} className="opacity-100" aria-label="Hero section">
        <HeroSlider />
      </section>

      <SectionDivider />

      <section ref={servicesRef.ref} id="services" className={`transition-opacity duration-1000 ${servicesRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Services section">
        <ServicesSection />
      </section>

      <SectionDivider />

      <section ref={experienceRef.ref} id="experience" className={`transition-opacity duration-1000 ${experienceRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Experience section">
        <ExperienceSection />
      </section>

      <SectionDivider />

      <section ref={eventsRef.ref} id="events" className={`transition-opacity duration-1000 ${eventsRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Events section">
        <EventsSection />
      </section>

      <SectionDivider />

      <section ref={shopRef.ref} id="shop" className={`transition-opacity duration-1000 ${shopRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Shop section">
        <ShopSection />
      </section>

      <SectionDivider />

      <section id="featured-games" ref={gamesRef.ref} className={`transition-opacity duration-1000 ${gamesRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Featured games section">
        <FeaturedGamesSlider />
      </section>

      <SectionDivider />

      <section ref={galleryRef.ref} id="gallery" className={`transition-opacity duration-1000 ${galleryRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Gallery preview section">
        <GalleryPreview />
      </section>

      <SectionDivider />

      <section ref={ctaRef.ref} id="cta" className={`transition-opacity duration-1000 ${ctaRef.isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="Call to action section">
        <CTASection />
      </section>
    </div>
  )
}

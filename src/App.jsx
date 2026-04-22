import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'

const HomePage = lazy(() => import('./pages/HomePage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const GalleryDetailPage = lazy(() => import('./pages/GalleryDetailPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      <>
        {/* Loading screen always overlays — content is always mounted underneath */}
        <LoadingScreen show={showLoader} />

        {/* App content mounts immediately so lazy imports start pre-loading */}
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="min-h-screen grid place-items-center bg-[#0D0D0D] text-[#E8F4F8]">
                <span className="text-lg font-orbitron">Loading BLC...</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="gallery/:id" element={<GalleryDetailPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    </ErrorBoundary>
  )
}

export default App

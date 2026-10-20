import { WeddingNavigation } from './components/WeddingNavigation'
import { WeddingHero } from './components/WeddingHero'
import { OurStory } from './components/OurStory'
import { WeddingDetails } from './components/WeddingDetails'
import { DressCode } from './components/DressCode'
import { PhotoGallery } from './components/PhotoGallery'
import { RSVP } from './components/RSVP'
import { WeddingFAQ } from './components/WeddingFAQ'
import { WeddingFooter } from './components/WeddingFooter'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

function App() {
  useRevealOnScroll()

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf8f0] text-[#18372b]">
      <WeddingNavigation />
      <main>
        <WeddingHero />
        <OurStory />
        <WeddingDetails />
        <DressCode />
        <PhotoGallery />
        <RSVP />
        <WeddingFAQ />
      </main>
      <WeddingFooter />
    </div>
  )
}

export default App

import Hero from '../components/Hero/Hero.jsx'
import Highlights from '../components/Highlights/Highlights.jsx'
import MenuPreview from '../components/MenuPreview/MenuPreview.jsx'
import IfoodBanner from '../components/IfoodBanner/IfoodBanner.jsx'
import About from '../components/About/About.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import { HIGHLIGHTS } from '../data/menuData'

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <Highlights items={HIGHLIGHTS} />
      </div>
      <About compact />
      <MenuPreview />
      <IfoodBanner />
      <Gallery />
    </>
  )
}

export default Home

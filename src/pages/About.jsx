import PageHeader from '../components/PageHeader/PageHeader.jsx'
import About from '../components/About/About.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import Highlights from '../components/Highlights/Highlights.jsx'
import { HIGHLIGHTS } from '../data/menuData'

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="A formiguinha que cozinha com amor"
      />
      <About />
      <div className="container">
        <Highlights items={HIGHLIGHTS} />
      </div>
      <Gallery />
    </>
  )
}

export default AboutPage

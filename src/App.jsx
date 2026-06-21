import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import styles from './App.module.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={isHome ? styles.mainNoOffset : styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

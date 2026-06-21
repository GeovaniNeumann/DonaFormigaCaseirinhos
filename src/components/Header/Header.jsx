import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          <img src="/images/logo.webp" alt="Dona Formiga Caseirinhos" className={styles.logo} />
          <span className={styles.brandText}>
            Dona Formiga
            <em>caseirinhos</em>
          </span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={styles.menuToggle}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header

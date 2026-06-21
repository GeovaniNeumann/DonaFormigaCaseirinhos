import { Link } from 'react-router-dom'
import { buildWhatsAppLink, SERVICE_AREA, INSTAGRAM_HANDLE } from '../../data/menuData'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.scallop} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <img src="/images/logo.webp" alt="Dona Formiga Caseirinhos" className={styles.logo} />
          <p className={styles.tagline}>
            Sabor que abraça, <em>feito com amor!</em>
          </p>
        </div>

        <div className={styles.column}>
          <h3>Navegação</h3>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/cardapio">Cardápio</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className={styles.column}>
          <h3>Atendimento</h3>
          <p>{SERVICE_AREA}</p>
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp: (41) 99755-2690
          </a>
          <a href="https://www.instagram.com/dona_formigacaseirinhos/" target="_blank" rel="noopener noreferrer">
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className={styles.column}>
          <h3>Também estamos no</h3>
          <a 
            href="https://www.ifood.com.br/delivery/colombo-pr/dona-formiga-caseirinhos-sao-gabriel/2a14d946-cb85-48ef-9be1-e61cb8f22cb7" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ifoodLink}
          >
            <span className={styles.ifoodBadge}>iFood</span>
          </a>
        </div>
      </div>

      <p className={styles.bottomLine}>
        © {new Date().getFullYear()} Dona Formiga Caseirinhos · Feito com carinho para adoçar seu dia 💕
        <br />
        Feito com carinho por{' '}
        <a 
          href="https://www.neumannwebsolutions.com.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.creditLink}
        >
          Neumann Web Solutions
        </a>
      </p>
    </footer>
  )
}

export default Footer
import { Link } from 'react-router-dom'
import { buildWhatsAppLink } from '../../data/menuData'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Colombo e região · feito à mão, todos os dias</span>
          <h1>
            Comida de casa,
            <br />
            <span className={styles.highlight}>na marmitinha certa.</span>
          </h1>
          <p className={styles.lead}>
            Empadões fresquinhos, bolos na marmita e cucas artesanais, preparados com
            ingredientes selecionados e aquele tempero que só existe quando se cozinha com amor.
          </p>
          <div className={styles.actions}>
            <a href={buildWhatsAppLink('Olá! Quero ver o cardápio da Dona Formiga 🐜💕')} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              Pedir pelo WhatsApp
            </a>
            <Link to="/cardapio" className={styles.secondaryButton}>
              Ver cardápio completo
            </Link>
          </div>
          <p className={styles.script}>sabor que abraça, feito com amor!</p>
        </div>

        <div className={styles.imageWrap}>
          <img src="/images/imghero.webp" alt="Empadão e bolos artesanais da Dona Formiga" className={styles.heroImage} />
          <img src="/images/logo.webp" alt="Dona Formiga" className={styles.badge} />
        </div>
      </div>
    </section>
  )
}

export default Hero

import { Link } from 'react-router-dom'
import { MENU_CATEGORIES } from '../../data/menuData'
import styles from './MenuPreview.module.css'

function MenuPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>O que preparamos pra você</span>
          <h2>Nosso cardápio</h2>
          <p>Quatro famílias de receitas, todas feitas do zero, na medida certa para uma marmitinha de carinho.</p>
        </div>

        <div className={styles.grid}>
          {MENU_CATEGORIES.map((category) => (
            <Link to="/cardapio" key={category.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={category.image} alt={category.name} className={styles.image} />
              </div>
              <div className={styles.cardBody}>
                <h3>{category.name}</h3>
                <p className={styles.cardTagline}>{category.tagline}</p>
                <span className={styles.portion}>{category.portion}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link to="/cardapio" className={styles.cta}>
            Ver cardápio completo e preços
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview

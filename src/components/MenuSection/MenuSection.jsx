import { buildWhatsAppLink } from '../../data/menuData'
import styles from './MenuSection.module.css'

function formatPrice(price) {
  if (price == null) return null
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function MenuSection({ category, reversed = false }) {
  const message = `Olá! Vim pelo site e quero pedir o ${category.name} 🐜💕`

  return (
    <section className={`${styles.section} ${reversed ? styles.reversed : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageWrap}>
          <div
            className={styles.imageBackground}
            style={{ backgroundImage: `url(${category.image})` }}
            aria-hidden="true"
          />
          <img src={category.image} alt={category.name} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h2>{category.name}</h2>
          <p className={styles.tagline}>{category.tagline}</p>
          <span className={styles.portion}>{category.portion}</span>

          <ul className={styles.items}>
            {category.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <span className={styles.itemName}>{item.name}</span>
                {formatPrice(item.price) && (
                  <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                )}
              </li>
            ))}
          </ul>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.orderButton}
          >
            Pedir {category.name} no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default MenuSection

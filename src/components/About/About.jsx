import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About({ compact = false }) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageWrap}>
          <img src="/images/about.webp" alt="Dona Formiga, mascote da marca" className={styles.image} />
        </div>
        <div className={styles.text}>
          <span className={styles.script}>nossa história</span>
          <h2>Quem é a Dona Formiga?</h2>
          <p>
            A Dona Formiga nasceu da vontade de levar comida de verdade para a mesa das famílias de
            Colombo: aquele empadão fresquinho, o bolo fofinho na marmita e a cuca da vovó, feitos
            com ingredientes selecionados e muito carinho em cada receita.
          </p>
          <p>
            Tudo é preparado de forma artesanal, em pequenas quantidades, para garantir que cada
            marmitinha chegue até você com aquele sabor de comida de casa o sabor que abraça.
          </p>
          {!compact && (
            <ul className={styles.values}>
              <li>Receitas artesanais, sem pressa</li>
              <li>Ingredientes selecionados com cuidado</li>
              <li>Embalagens seguras para chegar fresquinho até você</li>
              <li>Entrega feita com carinho em Colombo e região</li>
            </ul>
          )}
          {compact && (
            <Link to="/sobre" className={styles.link}>
              Conheça nossa história completa →
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default About

import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.section}>
      <div className="container">
        <img src="/images/logo.webp" alt="Dona Formiga" className={styles.logo} />
        <h1>Ops, essa marmitinha não existe!</h1>
        <p>A página que você procura não foi encontrada. Que tal voltar para o início?</p>
        <Link to="/" className={styles.button}>
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}

export default NotFound

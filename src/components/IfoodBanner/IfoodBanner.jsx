import styles from './IfoodBanner.module.css'

function IfoodBanner() {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Novidade</span>
          <h2>
            Agora estamos no <span className={styles.ifood}>iFood</span>!
          </h2>
          <p>
            Peça suas delícias sem sair de casa. Mais praticidade para você matar a vontade de comer
            algo caseiro, na hora que quiser.
          </p>
          <a
            href="https://www.ifood.com.br/delivery/colombo-pr/dona-formiga-caseirinhos-sao-gabriel/2a14d946-cb85-48ef-9be1-e61cb8f22cb7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Pedir no iFood
          </a>
        </div>
        <img src="/images/ifood1.webp" alt="Dona Formiga agora no iFood" className={styles.image} />
      </div>
    </section>
  )
}

export default IfoodBanner

import styles from './PageHeader.module.css'

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}

export default PageHeader

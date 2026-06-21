import styles from './Highlights.module.css'

const ICONS = {
  heart: (
    <path d="M12 21s-7.2-4.6-9.8-8.9C.6 9 1.6 5.7 4.6 4.6 6.9 3.7 9.3 4.7 12 7.7c2.7-3 5.1-4 7.4-3.1 3 1.1 4 4.4 2.4 7.5C19.2 16.4 12 21 12 21Z" />
  ),
  leaf: (
    <path d="M5 21c8 0 14-6 14-14V4h-3C8 4 2 10 2 18v3h3Zm0-3v-0.5C5 11 10 6 16.5 6H19v0.5C19 13 14 18 7.5 18H5Z" />
  ),
  shield: (
    <path d="M12 2 4 5v6c0 5 3.5 8.7 8 11 4.5-2.3 8-6 8-11V5l-8-3Zm0 2.2 6 2.3v5.4c0 4-2.7 6.9-6 8.8-3.3-1.9-6-4.8-6-8.8V6.5l6-2.3Z" />
  ),
  scooter: (
    <path d="M14 2h-2v2h1.6l1.1 3H10l-1 5H6.5A3.5 3.5 0 1 0 9.9 16H14a2 2 0 0 0 1.9-1.4l1.3-4.1A3.5 3.5 0 1 0 20 13.9V12h-2.3l-1-3H16l-1-3h-1V2ZM6.5 17.5A1.5 1.5 0 1 1 8 16a1.5 1.5 0 0 1-1.5 1.5Zm11 0A1.5 1.5 0 1 1 19 16a1.5 1.5 0 0 1-1.5 1.5Z" />
  ),
}

function Highlights({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <span className={styles.iconWrap}>
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              {ICONS[item.icon]}
            </svg>
          </span>
          <span className={styles.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  )
}

export default Highlights

import { buildWhatsAppLink } from '../../data/menuData'
import styles from './WhatsAppButton.module.css'

function WhatsAppButton({ message = 'Olá! Vim pelo site e gostaria de fazer um pedido 🐜💕' }) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingButton}
      aria-label="Pedir pelo WhatsApp"
    >
      <svg viewBox="0 0 32 32" className={styles.icon} aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 4C9.4 4 4 9.4 4 16.04c0 2.37.65 4.59 1.78 6.49L4 28l5.62-1.74a11.97 11.97 0 0 0 6.42 1.78c6.64 0 12.04-5.4 12.04-12.04S22.68 4 16.04 4Zm6.97 17.16c-.3.83-1.55 1.6-2.13 1.7-.55.09-1.18.13-3.43-.74-2.88-1.13-4.78-3.95-4.93-4.16-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.4.26-.28.57-.35.76-.35.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.31-.13.6.18.3.8 1.32 1.72 2.13 1.18 1.05 2.18 1.38 2.5 1.53.32.15.5.13.69-.07.2-.2.81-.94 1.02-1.27.21-.32.43-.27.72-.16.3.1 1.88.89 2.2 1.05.32.16.53.24.61.37.08.13.08.74-.22 1.57Z"
        />
      </svg>
      <span className={styles.label}>Peça pelo WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

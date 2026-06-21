import { buildWhatsAppLink, INSTAGRAM_HANDLE, SERVICE_AREA } from '../../data/menuData'
import styles from './ContactCard.module.css'

const ICONS = {
  whatsapp: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.55 3.76 1.5 5.3L2 22l4.92-1.59a9.86 9.86 0 0 0 5.12 1.4c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.3c-.25.7-1.3 1.34-1.78 1.42-.46.08-.99.11-2.88-.62-2.42-.95-4.02-3.32-4.14-3.5-.12-.17-1-1.32-1-2.52 0-1.2.62-1.78.84-2.02.22-.24.48-.3.64-.3.17 0 .33 0 .47.01.15.01.36-.06.56.42.21.51.71 1.74.78 1.86.06.13.1.28.02.45-.09.16-.13.27-.25.42-.13.14-.27.32-.38.43-.13.13-.26.27-.11.5.15.25.67 1.1 1.44 1.78.99.88 1.83 1.16 2.1 1.29.27.13.43.11.58-.06.17-.17.68-.79.86-1.06.18-.27.36-.23.6-.14.25.09 1.58.75 1.85.88.27.14.45.21.51.32.07.11.07.62-.18 1.32Z" />
  ),
  pin: (
    <path d="M12 2C7.8 2 4.5 5.3 4.5 9.5c0 5.2 6 12 7 12.7.3.2.7.2 1 0 1-.7 7-7.5 7-12.7C19.5 5.3 16.2 2 12 2Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
  ),
  instagram: (
    <path d="M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.5.47.7.27 1.27.63 1.83 1.19.56.56.92 1.13 1.19 1.83.25.7.42 1.4.47 2.5.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.1-.22 1.8-.47 2.5-.27.7-.63 1.27-1.19 1.83-.56.56-1.13.92-1.83 1.19-.7.25-1.4.42-2.5.47-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.05-1.8-.22-2.5-.47a4.95 4.95 0 0 1-1.83-1.19 4.95 4.95 0 0 1-1.19-1.83c-.25-.7-.42-1.4-.47-2.5C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.1.22-1.8.47-2.5.27-.7.63-1.27 1.19-1.83A4.95 4.95 0 0 1 5.75 2.38c.7-.25 1.4-.42 2.5-.47C9.35 1.85 9.65 1.85 12 1.85ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.4-9.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
  ),
}

const CONTACT_ITEMS = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: '(41) 99755-2690',
    href: buildWhatsAppLink('Olá! Vim pelo site da Dona Formiga e gostaria de mais informações 🐜💕'),
  },
  {
    icon: 'pin',
    label: 'Área de entrega',
    value: SERVICE_AREA,
    href: null,
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: INSTAGRAM_HANDLE,
    href: 'https://www.instagram.com/dona_formigacaseirinhos/',
  },
]

function ContactCard() {
  return (
    <ul className={styles.list}>
      {CONTACT_ITEMS.map((item) => {
        const content = (
          <>
            <span className={styles.iconWrap}>
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                {ICONS[item.icon]}
              </svg>
            </span>
            <span className={styles.textWrap}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </span>
          </>
        )

        return (
          <li key={item.label} className={styles.item}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {content}
              </a>
            ) : (
              <div className={styles.link}>{content}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default ContactCard

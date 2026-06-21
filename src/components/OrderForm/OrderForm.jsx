import { useState } from 'react'
import { buildWhatsAppLink, MENU_CATEGORIES } from '../../data/menuData'
import styles from './OrderForm.module.css'

const INITIAL_STATE = {
  name: '',
  category: MENU_CATEGORIES[0].name,
  details: '',
}

function OrderForm() {
  const [form, setForm] = useState(INITIAL_STATE)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const lines = [
      'Olá! Vim pelo site da Dona Formiga 🐜💕',
      form.name ? `Meu nome é ${form.name}.` : null,
      `Gostaria de pedir: ${form.category}.`,
      form.details ? `Detalhes: ${form.details}` : null,
    ].filter(Boolean)

    const link = buildWhatsAppLink(lines.join('\n'))
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Monte seu pedido</h3>
      <p className={styles.helper}>
        Preencha rapidinho e enviaremos sua mensagem prontinha para o nosso WhatsApp.
      </p>

      <label className={styles.field}>
        <span>Seu nome</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Como podemos te chamar?"
        />
      </label>

      <label className={styles.field}>
        <span>O que você gostaria de pedir?</span>
        <select name="category" value={form.category} onChange={handleChange}>
          {MENU_CATEGORIES.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Mais detalhes (sabor, quantidade, endereço)</span>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          rows={4}
          placeholder="Ex: 2 empadões de frango com bacon, entregar à tarde"
        />
      </label>

      <button type="submit" className={styles.submit}>
        Enviar pedido pelo WhatsApp
      </button>
    </form>
  )
}

export default OrderForm

import PageHeader from '../components/PageHeader/PageHeader.jsx'
import ContactCard from '../components/ContactCard/ContactCard.jsx'
import OrderForm from '../components/OrderForm/OrderForm.jsx'
import styles from './Contact.module.css'

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos adoçar o seu dia?"
        description="Fale com a gente pelo WhatsApp ou monte seu pedido aqui mesmo. Entregamos em Colombo e região."
      />
      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <ContactCard />
          <OrderForm />
        </div>
      </section>
    </>
  )
}

export default Contact

import PageHeader from '../components/PageHeader/PageHeader.jsx'
import MenuSection from '../components/MenuSection/MenuSection.jsx'
import { MENU_CATEGORIES } from '../data/menuData'

function Menu() {
  return (
    <>
      <PageHeader
        eyebrow="Cardápio"
        title="Cada marmitinha, uma receita de carinho"
        description="Tudo feito artesanalmente, com ingredientes selecionados. Escolha sua categoria favorita e peça pelo WhatsApp — entregamos em Colombo e região."
      />
      {MENU_CATEGORIES.map((category, index) => (
        <MenuSection category={category} key={category.id} reversed={index % 2 === 1} />
      ))}
    </>
  )
}

export default Menu

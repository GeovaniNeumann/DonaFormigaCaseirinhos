export const WHATSAPP_NUMBER = '5541997552690'
export const INSTAGRAM_HANDLE = '@dona_formigacaseirinhos'
export const SERVICE_AREA = 'Colombo e região'

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const MENU_CATEGORIES = [
  {
    id: 'empadao',
    name: 'Empadão na Marmita',
    tagline: 'Sabor que abraça, fresquinho do forno',
    image: '/images/cardapio4.webp',
    portion: '250 ml · serve uma pessoa',
    items: [
      { name: 'Frango Cremoso', price: 18.0 },
      { name: 'Frango com Requeijão', price: 18.0 },
      { name: 'Frango com Bacon', price: 18.0 },
      { name: 'Calabresa', price: 18.0 },
    ],
  },
  {
    id: 'tortinha',
    name: 'Tortinha de Frango',
    tagline: 'Massa fininha, recheio generoso',
    image: '/images/cardapio3.webp',
    portion: '250 ml · serve uma pessoa',
    items: [
      { name: 'Tortinha de Frango', price: null },
      { name: 'Tortinha de Frango com Requeijão Cremoso', price: null },
    ],
  },
  {
    id: 'bolo-marmita',
    name: 'Bolo na Marmita',
    tagline: 'Feito com amor para adoçar o seu dia',
    image: '/images/cardapio2.webp',
    portion: '250 ml · serve uma pessoa',
    items: [
      { name: 'Cenoura com cobertura de brigadeiro e granulado', price: null },
      { name: 'Chocolate com cobertura de brigadeiro', price: null },
      { name: 'Chocolate com cobertura de brigadeiro de ninho', price: null },
      { name: 'Ninho com cobertura de Nutella', price: null },
    ],
  },
  {
    id: 'cucas',
    name: 'Cucas Artesanais',
    tagline: 'Receita de família, assada todos os dias',
    image: '/images/cardapio1.webp',
    portion: '1150 ml · serve até 3 pessoas',
    items: [
      { name: 'Banana com Doce de Leite', price: null },
      { name: 'Banana com Farofa Crocante', price: null },
      { name: 'Goiabada', price: null },
      { name: 'Chocolatuda', price: null },
      { name: 'Maçã com Canela', price: null },
      { name: 'Uva', price: null },
      { name: 'Pêssego', price: null },
      { name: 'Paçoca', price: null },
      { name: 'Abacaxi', price: null },
    ],
  },
]

export const HIGHLIGHTS = [
  { icon: 'heart', label: 'Feito com carinho' },
  { icon: 'leaf', label: 'Ingredientes selecionados' },
  { icon: 'shield', label: 'Embalagem segura' },
  { icon: 'scooter', label: 'Entregamos com carinho' },
]

export const GALLERY_IMAGES = [
  { src: '/images/bolocenoura.webp', alt: 'Bolo de cenoura com cobertura de chocolate' },
  { src: '/images/cuca1.webp', alt: 'Cucas artesanais indo para o forno' },
  { src: '/images/ifood3.webp', alt: 'Bolo de cenoura na marmita com granulado' },
  { src: '/images/ifood2.webp', alt: 'Empadão fresquinho saindo do forno' },
  { src: '/images/ifood1.webp', alt: 'Dona Formiga agora no iFood' },
]

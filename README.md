# Dona Formiga Caseirinhos — Site

Site institucional em **Vite + React + CSS Modules** para a Dona Formiga Caseirinhos.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/`, prontos para subir em qualquer hospedagem estática (Vercel, Netlify, Hostinger, etc).

## Estrutura

```
src/
  components/     -> um componente por pasta, com seu .jsx e .module.css
  pages/          -> Home, Menu (Cardápio), About (Sobre), Contact (Contato), NotFound
  data/menuData.js -> número do WhatsApp, área de atendimento e itens do cardápio (preços)
public/images/    -> todas as imagens enviadas (logo, hero, cardápio, ifood, etc.)
```

## Configurações rápidas

- **WhatsApp**: número e mensagens-padrão estão em `src/data/menuData.js` (`WHATSAPP_NUMBER`).
- **Área de atendimento**: também em `menuData.js` (`SERVICE_AREA`).
- **Itens e preços do cardápio**: array `MENU_CATEGORIES` em `menuData.js`. Itens com `price: null` aparecem sem preço (mostrando apenas o nome) — basta preencher o valor quando tiver o preço definido.
- **Instagram**: troque o link `https://instagram.com` em `Footer.jsx` e `ContactCard.jsx` pelo link real do perfil.

## Paleta de cores (tokens em `src/index.css`)

| Token | Cor |
|---|---|
| `--color-pink-primary` | #E8638A |
| `--color-pink-dark` | #D44D76 |
| `--color-pink-pale` | #FBE4E9 |
| `--color-cream` | #FDF3EE |
| `--color-brown` | #5C3A2E |
| `--color-gold` | #D89A4E |
| `--color-whatsapp` | #25D366 |

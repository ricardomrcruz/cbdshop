const description =
  'Boutique CBD Huile'
const title = 'CBD SHOP'
const url = 'https://commerce.ccbdshop.com'

const seo = {
  title,
  titleTemplate: 'Le Jardin De La Sorciere',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@iweed',
    site: '@iweed'
  }
}

export { seo as defaultSeo, url as defaultUrl }

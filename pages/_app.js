import { CartProvider } from 'react-use-cart'
import Image from 'next/image'

import 'tailwindcss/tailwind.css'

import { SettingsProvider } from '@/context/settings'
import Layout from '@/components/layout'

function App({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <CartProvider>
      
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SettingsProvider>
  )
}

export default App

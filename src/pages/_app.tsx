import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app'
import { Theme } from '@radix-ui/themes';
import { AuthContextProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
    <Theme>
      <Navbar />
      <Component {...pageProps} />
    </Theme>
    </AuthContextProvider>
  )
}

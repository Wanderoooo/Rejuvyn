import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app'
import { Theme } from '@radix-ui/themes';
import { AuthContextProvider } from '@/context/AuthContext'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
    <Theme className='bkg'>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bricolage+Grotesque" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Theme>
    </AuthContextProvider>
  )
}

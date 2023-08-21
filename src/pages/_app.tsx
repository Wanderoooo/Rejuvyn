import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app'
import { Theme } from '@radix-ui/themes';
import { AuthContextProvider } from '@/firebase/context/AuthContext'
import Head from 'next/head';
import SideNav from '@/components/SideNav';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(1000);
  const breakpoint = 700;
  
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);



  return (
    <AuthContextProvider>
    <Theme className='bkg'>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bricolage+Grotesque" />
      </Head>
      {width > breakpoint ? <Navbar /> : <SideNav />}
      <Component {...pageProps} />
    </Theme>
    </AuthContextProvider>
  )
}

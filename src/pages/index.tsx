import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'
import sign from '../styles/sign.module.css'
import { useRouter } from 'next/router'
import DemoCarousel from '@/components/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  return (
    <Flex className={style.page}>
      <h1 className={style.rejfont}>Rejuvyn</h1>
      <p className={style.rejc}>Rejuvyn-ate your days, <br></br> remain mindful and healthy in your moments</p>
      <DemoCarousel />
      <Flex className={style.buttons}>
      <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> router.push('./login')}>Log In</button>
      <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> router.push('./signup')}>Sign Up</button>
      </Flex>
    </Flex>
  )
}

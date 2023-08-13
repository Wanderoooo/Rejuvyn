import style from './Welcome.module.css'
import styles from '../styles/index.module.css'
import {StarFilledIcon} from '@radix-ui/react-icons'

export default function Welcome() {
  return (
    <section className={style.container}>
      <h1 className={style.welcome_title}>Welcome Alissa!</h1>
      <p className={style.welcome_p}>Here you can find all your medical record, upcoming appointments, and medication. <br></br> <br></br> <StarFilledIcon color='gold'/> Remember to do your dailies! <StarFilledIcon color='gold'/></p>
    </section>
  )
}
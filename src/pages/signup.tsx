'use client'
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import style from '../styles/sign.module.css'
import { Tabs } from "@radix-ui/themes";
import Link from "next/link";
import { Flex } from "@radix-ui/themes";
import styles from '../styles/index.module.css'

export default function SignUp() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm  = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { result, error } = await signUp(email, password);

      if (error) {
          return console.log(error)
      }

      console.log(result)
      return router.push("/setup")
  }

  return (
    <Flex className={styles.page}>
      <h1 className={styles.rejfont}>Rejuvyn</h1>
    <Tabs.Root className={style.TabsRoot} defaultValue="tab1">
      <Tabs.List className={style.TabsList} aria-label="Manage your account">
        <Tabs.Trigger className={style.TabsTrigger} value="tab1">
          Sign Up
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={style.TabsContent} value="tab1">
        <p className={style.Text}>Sign up to track your health progress, check-in daily, and receive health appointment reminders</p>
        <form onSubmit={handleForm}>
        <fieldset className={style.Fieldset}>
          <label className={style.Label} htmlFor="emailsu">
            Email address
          </label>
          <input className={style.Input} id="emailsu" type="email" required onChange={(e) => setEmail(e.target.value)}/>
        </fieldset>
        <fieldset className={style.Fieldset}>
          <label className={style.Label} htmlFor="setPassword">
            Password
          </label>
          <input className={style.Input} id="setPassword" type="password" required onChange={(e) => setPassword(e.target.value)}/>
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'space-evenly' }}>
          <button className={`${style.Buttongreen} ${style.Button}`} type='submit'>Sign Up</button>
          <p className={style.paragraph}>Already have an account? <Link href="./login" className={style.Link}>Log In</Link></p>
        </div>
        </form>
      </Tabs.Content>
    </Tabs.Root>
    </Flex>
  )
}
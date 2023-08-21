'use client'
import style from '@/styles/sign.module.css'
import React from "react";
import { useRouter } from 'next/navigation'
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import { Flex } from '@radix-ui/themes';
import styles from '../styles/index.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

function SignIn() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errMessage, setErrMessage] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    setErrMessage('')
    router.push("./dashboard")
  })
  .catch((error) => {
    console.log(error.code)
    if (error.code == "auth/user-not-found") {
      setErrMessage("Email is not linked to an accout")
    } else if (error.code === "auth/wrong-password") {
      setErrMessage("Incorrect password, try again")
    }
    
  });

    }

    return (
      <Flex className={styles.page}>
        <h1 className={styles.rejfont}>Rejuvyn</h1>
  <Tabs.Root className={style.TabsRoot} defaultValue="tab1">
    <Tabs.List className={style.TabsList} aria-label="Manage your account">
      <Tabs.Trigger className={style.TabsTrigger} value="tab1">
        Log In
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={style.TabsContent} value="tab1">
      <p className={style.Text}>Log in to your account to see health progress, track your dailies, and view your upcoming appointments</p>
      <br></br><p>{errMessage}</p>
      <form onSubmit={handleForm}>
      <fieldset className={style.Fieldset}>
        <label className={style.Label} htmlFor="email">
          Email address
        </label>
        <input className={style.Input} id="email" type="email" required onChange={(e) => setEmail(e.target.value)}/>
      </fieldset>
      <fieldset className={style.Fieldset}>
        <label className={style.Label} htmlFor="currentPassword">
          Password
        </label>
        <input className={style.Input} id="currentPassword" type="password" required onChange={(e) => setPassword(e.target.value)}/>
      </fieldset>
      <div style={{ display: "flex", marginTop: 20, justifyContent: "space-evenly" }}>
        <button className={`${style.Buttongreen} ${style.Button}`}>Log In</button>
        <p className={style.paragraph}>Don&apos;t have an account? <br></br><Link href="./signup" className={style.Link}>Sign up</Link></p>
      </div>
      </form>
    </Tabs.Content>
  </Tabs.Root>
  </Flex>
    );
}

export default SignIn;


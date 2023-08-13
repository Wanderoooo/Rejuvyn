'use client'
import style from '@/styles/Home.module.css'
import React from "react";
import signIn from "@/firebase/auth/signin"
import { useRouter } from 'next/navigation'
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';

function SignIn() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { result, error } = await signIn(email, password);

      if (error) {
          return console.log(error)
      }

      // else successful
      console.log(result)
      return router.push("/admin")
    }

    return (
  <Tabs.Root className={style.TabsRoot} defaultValue="tab1">
    <Tabs.List className={style.TabsList} aria-label="Manage your account">
      <Tabs.Trigger className={style.TabsTrigger} value="tab1">
        Sign In
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={style.TabsContent} value="tab1">
      <p className={style.Text}>Sign in to your account to see health progress, track your dailies, and view your upcoming appointments</p>
      <form onSubmit={handleForm}>
      <fieldset className={style.Fieldset}>
        <label className={style.Label} htmlFor="email">
          email address
        </label>
        <input className={style.Input} id="email" type="email" required onChange={(e) => setEmail(e.target.value)}/>
      </fieldset>
      <fieldset className={style.Fieldset}>
        <label className={style.Label} htmlFor="currentPassword">
          Password
        </label>
        <input className={style.Input} id="currentPassword" type="password" required onChange={(e) => setPassword(e.target.value)}/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className={`${style.Buttongreen} ${style.Button}`}>Sign In</button>
        <p>Don't have an account? <Link href="./signup">Sign up</Link></p>
      </div>
      </form>
    </Tabs.Content>
  </Tabs.Root>
    );
}

export default SignIn;


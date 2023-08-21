import ProgressBar from "@/components/ProgressBar";
import SummaryTable from "@/components/SummaryTable";
import Welcome from "@/components/Welcome";
import { Grid } from "@radix-ui/themes";
import styles from '../styles/index.module.css'
import { getAuth } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [med, setMed] = useState({l_1: "", l_2: "", l_3: "", content: []})
  const [diet, setDiet] = useState({l_1: "", l_2: "", l_3: "", content: []})
  const [fit, setFit] = useState({l_1: "", l_2: "", l_3: "", content: []})
  const [symp, setSymp] = useState({l_1: "", l_2: "", l_3: "", content: []})
  const [name, setName] = useState("")


  
  const auth = getAuth();
  const user = auth.currentUser

useEffect(() => {
  let unsub
  if (user) {
    unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setMed(doc.data()?.med)
      setDiet(doc.data()?.diet)
      setFit(doc.data()?.fit)
      setName(doc.data()?.name)
      setSymp(doc.data()?.symp)
    }) 
  }
    return unsub
  }, [])
  
  return (
    <Grid columns="2" rows="3" justify="center" align="baseline" className={styles.dashboard}>
      <Welcome name={name}/>
      <ProgressBar />
      <section className={styles.container}>
      <h1 className={styles.subtitles}>Medicine</h1>
      <SummaryTable item={med}/>
      </section>
      <section className={styles.container}>
      <h1 className={styles.subtitles}>Diet</h1>
      <SummaryTable item={diet}/>
      </section>
      <section className={styles.container}>
      <h1 className={styles.subtitles}>Weekly physical activity</h1> 
      <SummaryTable item={fit}/>
      </section>
      <section className={styles.container}>
      <h1 >Tracked Symptoms</h1> 
      <SummaryTable item={symp}/>
      </section>
    </Grid>
  )
}
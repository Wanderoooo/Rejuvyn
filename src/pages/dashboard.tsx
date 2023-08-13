import ProgressBar from "@/components/ProgressBar";
import Reminder from "@/components/Reminder";
import SummaryTable from "@/components/SummaryTable";
import Welcome from "@/components/Welcome";
import { Grid } from "@radix-ui/themes";
import styles from '../styles/index.module.css'

export default function Dashboard() {
  return (
    <Grid columns="2" rows="3" justify="center" align="baseline" className={styles.dashboard}>
      <Welcome />
      <ProgressBar />
      <section>
      <h1>Medicine</h1>
      <SummaryTable /> {/*type,,, amount, per how long*/}
      </section>
      <section>
      <h1>Diet</h1>
      <SummaryTable /> {/*Carbs, Protein, Sodium,,, amount, total */}
      </section>
      <section>
      <h1>Weekly physical activity</h1> 
      <SummaryTable /> {/*Back, ab, legs, arms,,, hours, total*/}
      </section>
      <section>
      <h1>Symptom tracked</h1>
      <SummaryTable /> {/*Location,,, pain lvl, duration*/}
      </section>
    </Grid>
  )
}
import ProgressBar from "@/components/ProgressBar";
import Reminder from "@/components/Reminder";
import SummaryTable from "@/components/SummaryTable";
import Welcome from "@/components/Welcome";
import { Grid } from "@radix-ui/themes";
import styles from '../styles/index.module.css'

export default function Dashboard() {
  return (
    <Grid columns="2" rows="2" justify="center" align="baseline" className={styles.dashboard}>
      <Welcome />
      <ProgressBar />
      <SummaryTable />
      <Reminder />
    </Grid>
  )
}
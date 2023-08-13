import CheckIn from "@/components/CheckIn";
import SummaryTable from "@/components/SummaryTable";
import { Grid } from "@radix-ui/themes";

export default function DailyHealth() {
  return (
    <div>
      <CheckIn />
    <Grid columns="2" rows="3" gap="7" justify="center" align="baseline">
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
    </div>
  )
}
import CheckIn from "@/components/CheckIn";
import SummaryTable from "@/components/SummaryTable";

export default function DailyHealth() {
  return (
    <div>
      <h1>Diet</h1>
      <SummaryTable />
      <h1>Weekly physical activity</h1>
      <SummaryTable />
      <h1>Symptom tracked</h1>
      <SummaryTable />
      <CheckIn />
    </div>
  )
}
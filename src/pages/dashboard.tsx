import ProgressBar from "@/components/ProgressBar";
import Reminder from "@/components/Reminder";
import SummaryTable from "@/components/SummaryTable";
import Welcome from "@/components/Welcome";

export default function Dashboard() {
  return (
    <div>
      <Welcome />
      <ProgressBar />
      <SummaryTable />
      <Reminder />
    </div>
  )
}
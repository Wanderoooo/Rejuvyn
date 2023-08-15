import CheckIn from "@/components/CheckIn";
import SummaryTable from "@/components/SummaryTable";
import SympForm from "@/formcomp/forms/SympForm";
import { Flex } from "@radix-ui/themes";

export default function DailyHealth() {
  return (
    <Flex direction="column" align="center" justify="center">
      <CheckIn />
      <SympForm />
    </Flex>
  )
}
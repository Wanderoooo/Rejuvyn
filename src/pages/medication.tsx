import sign from '../styles/sign.module.css'
import { Flex } from "@radix-ui/themes";
import MedForm from '../formcomp/forms/MedForm'
import { useState } from "react";
import SummaryTable from "@/components/SummaryTable";

export default function Medication() {
  const medArray : any[] = [{}]
  const [isAdd, setIsAdd] = useState(false)

  return (
    <Flex direction="column" align="center">
      {medArray.length === 0 || isAdd ?
      
      <Flex direction="column" align="center">
        <h1>Add your prescriptions</h1>
        <MedForm medArray={medArray} updateAdd={setIsAdd} isZero={medArray.length === 0}/>
      </Flex>

    :
    <Flex direction="column" justify="center" align="center">
    <h1>Your prescriptions</h1>
    <SummaryTable />
    <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> setIsAdd(true)}>Add new prescription</button>
    </Flex>}




      {/* <Calendars />
      <ProgressBar /> */}
    </Flex>
  )
}
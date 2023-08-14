import sign from '../styles/sign.module.css'
import { Flex } from "@radix-ui/themes";
import MedForm from '../formcomp/forms/MedForm'
import { useEffect, useState } from "react";
import SummaryTable from "@/components/SummaryTable";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { getAuth } from 'firebase/auth';

export default function Medication() {
  const medArray : any[] = [{}]
  const [isAdd, setIsAdd] = useState(false)
  const [med, setMed] = useState({l_1: "", l_2: "", l_3: "", content: []})
  const auth = getAuth();
  const user = auth.currentUser

useEffect(() => {
  let unsub
  if (user) {
    unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setMed(doc.data()?.med)
    }) 
  }
    return unsub
  }, [])
  
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
      <SummaryTable item={med}/>
      <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> setIsAdd(true)}>Add new prescription</button>
      </Flex>}


      {/* <Calendars />
      <ProgressBar /> */}
    </Flex>
  )
}
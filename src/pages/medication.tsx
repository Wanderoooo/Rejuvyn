import sign from '../styles/sign.module.css'
import { Flex } from "@radix-ui/themes";
import MedForm from '../formcomp/forms/MedForm'
import { useEffect, useState } from "react";
import SummaryTable from "@/components/SummaryTable";
import { arrayRemove, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { getAuth } from 'firebase/auth';
import { Select, Space } from 'antd';

export default function Medication() {
  const [isAdd, setIsAdd] = useState("no")
  const [med, setMed] = useState({l_1: "", l_2: "", l_3: "", content: [{name:"", week: "", total: ""}]})
  const [presD, setPresD] = useState("")
  const auth = getAuth();
  const user = auth.currentUser

  const medOptions = med.content.map(m => {
    return {value: m.name, label: m.name}
  })

useEffect(() => {
  let unsub
  if (user) {
    unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setMed(doc.data()?.med)
    }) 
  }
    return unsub
  }, [])

  async function findDeleteUpdate(presD: string) {
    const updatedMeds = med.content.filter(m => m.name === presD)
    console.log(updatedMeds)
    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "med.content" : arrayRemove(updatedMeds[0])
    });
      }
  }
  
  return (
    <Flex direction="column" align="center">
      {med.content.length === 0 || isAdd === "yes" ?
      
      <Flex direction="column" align="center">
        <h1>Add your prescriptions</h1>
        <MedForm medArray={med.content} updateAdd={setIsAdd} isZero={med.content.length === 0}/>
      </Flex>

      :
      isAdd === "delete" ? 
      <Flex direction="column" align="center">
        <h2>Select prescription to be deleted</h2>
         <Select
      style={{ width: 120 }}
      defaultValue={() => {
        setPresD(medOptions[0].label)
        return medOptions[0].label
        }}
      onChange={(v, o) => setPresD(v)}
      options={medOptions}
      />
      <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> {
        findDeleteUpdate(presD)
        setIsAdd("no")
        }}>Delete</button>
      </Flex>
    :
      <Flex direction="column" justify="center" align="center">
      <h1>Your prescriptions</h1>
      <SummaryTable item={med} />
      <Flex direction="row" gap="4">
      <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> setIsAdd("yes")}>Add new prescription</button>
      <button className={`${sign.Buttongreen} ${sign.Button}`} onClick={()=> setIsAdd("delete")}>Delete a prescription</button>
      </Flex>
      </Flex>}


      {/* <Calendars />
      <ProgressBar /> */}
    </Flex>
  )
}
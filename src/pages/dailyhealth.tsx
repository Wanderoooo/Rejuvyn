import CheckIn from "@/components/CheckIn";
import SummaryTable from "@/components/SummaryTable";
import SympForm from "@/formcomp/forms/SympForm";
import { Flex} from "@radix-ui/themes";
import { Button, Select } from "antd";
import { getAuth } from "firebase/auth";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React from 'react'
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";

export default function DailyHealth() {
  const [sympD, setSympD] = useState("")
  const [symp, setSymp] = useState({l_1: "", l_2: "", l_3: "", content: [{name:"", week: "", total: ""}]})
  const [isAdd, setIsAdd] = useState("yes")
  

  const auth = getAuth();
  const user = auth.currentUser

  const sympOptions = symp.content.map(m => {
    return {value: m.name, label: m.name}
  })

React.useEffect(() => {
  let unsub
  if (user) {
    unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setSymp(doc.data()?.symp)
    }) 
  }
    return unsub
  }, [])

  async function findDeleteUpdate() {
    const updatedSymp = symp.content.filter(m => m.name === sympD)
    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "symp.content" : arrayRemove(updatedSymp[0])
    });
      }
  }

  return (
    <Flex justify="center" wrap="wrap" gap="9">
      <CheckIn />
      {symp.content.length === 0 || isAdd === "yes" ?
      
      <Flex direction="column" align="center">
        <SympForm medArray={symp.content} updateAdd={setIsAdd} isZero={symp.content.length === 0}/>
      </Flex>

      :
      <Flex direction="column" align="center">
        <h2>Select symptom to delete</h2>
         <Select
      style={{ width: 120 }}
      defaultValue={() => {
        setSympD(sympOptions[0].label)
        return sympOptions[0].label
        }}
      onChange={(v, o) => setSympD(v)}
      options={sympOptions}
      />
      <Button onClick={()=> {
        findDeleteUpdate()
        setIsAdd("yes")
        }}>Delete</Button>

        <Button onClick={()=> {
        setIsAdd("yes")
        }}>Cancel</Button>
      </Flex>}
    </Flex>
  )
}
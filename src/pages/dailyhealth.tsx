import CheckIn from "@/components/CheckIn";
import SummaryTable from "@/components/SummaryTable";
import SympForm from "@/formcomp/forms/SympForm";
import { Flex} from "@radix-ui/themes";
import { Button, Select } from "antd";
import { getAuth } from "firebase/auth";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React from 'react'
import { db } from "@/firebase/config";

export default function DailyHealth() {
  const [sympD, setSympD] = React.useState("")
  const [symp, setSymp] = React.useState({l_1: "", l_2: "", l_3: "", content: [{name:"", week: "", total: ""}]})
  

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

  async function findDeleteUpdate(sympD: string) {
    const updatedSymp = symp.content.filter(m => m.name === sympD)
    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "symp.content" : arrayRemove(updatedSymp[0])
    });
      }
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <CheckIn />
      {symp.content.length === 0 ? 
      <SympForm />
    :
    <Flex direction="column" align="center">
        <h2>Select symptom to be archived</h2>
         <Select
      style={{ width: 120 }}
      defaultValue={sympOptions[0]?.label}
      onChange={(v, o) => setSympD(v)}
      options={sympOptions}
      />

      <Button onClick={()=> {
        findDeleteUpdate(sympD)
        }}>Delete</Button>

      </Flex>}
    </Flex>
  )
}
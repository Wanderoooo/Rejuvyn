import ProfileShow from '@/formcomp/forms/ProfileShow'
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'
import dynamic from 'next/dynamic'
import { Button, Select } from 'antd'
import DoctorsForm from '@/formcomp/forms/DoctorsForm'
import { useEffect, useState } from 'react'
import SummaryTable from '@/components/SummaryTable'
import { arrayRemove, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
const DynamicPS = dynamic(() => import('../formcomp/forms/ProfileShow'), {
  ssr: false,
})

export default function Profile() {
  const [isAdd, setIsAdd] = useState("pro")
  const [docs, setDocs] = useState({l_1: "", l_2: "", l_3: "", content: [{name:"", week: "", total: ""}]})
  const [docName, setDocName] = useState("")


  const auth = getAuth();
  const user = auth.currentUser

useEffect(() => {
  let unsub
  if (user) {
    unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setDocs(doc.data()?.doctors)
    }) 
  }
    return unsub
  }, [])

  const docOptions = docs.content.map(m => {
    return {value: m.name, label: m.name}
  })

  async function findDeleteUpdate(docName: string) {
    const updatedDocs = docs.content.filter(m => m.name === docName)
    console.log(updatedDocs[0])
    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "doctors.content" : arrayRemove(updatedDocs[0])
    });
      }
  }
  

  return (
    <Flex direction="column" justify="center" align="center">
      {isAdd === "pro" ? 
      <Flex direction="column" justify="center" align="center">
      <DynamicPS />
      <section>
      <h1>Your Doctors</h1>
      <SummaryTable item={docs}/>
      </section>
      <Button type='default' onClick={() => setIsAdd("addDoc")}>Add doctor</Button>
      <Button type='default' onClick={() => setIsAdd("deleteDoc")}>Delete doctor</Button>
      <Button type='default'>Edit Profile Info</Button>
      </Flex>
      :
      isAdd === "addDoc" ? 
      <DoctorsForm handleDisplay={setIsAdd} isZero={docs.content.length === 0}/>
      :
      <Flex direction="column" align="center">
        <h2>Select doctor to be deleted</h2>
         <Select
      style={{ width: 120 }}
      defaultValue={docOptions[0]?.label}
      onChange={(v, o) => setDocName(v)}
      options={docOptions}
      />
      <Button onClick={()=> {
        setIsAdd("no")
        findDeleteUpdate(docName)
        }}>Delete</Button>
      </Flex>

      }
      
      
      
    </Flex>
  )
}
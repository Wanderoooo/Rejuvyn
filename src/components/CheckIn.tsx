
import React, { useEffect, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import style from './CheckIn.module.css'
import MedicineToggle from '@/formcomp/MedicineToggle';
import FitnessTrack from '@/formcomp/FitnessTrack';
import DietTrack from '@/formcomp/DietTrack';
import { getAuth } from 'firebase/auth';
import { Flex } from '@radix-ui/themes';
import { Button } from 'antd';
import { arrayUnion, increment, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { doc, getDoc } from "firebase/firestore";

export default function CheckIn() {

  const [medRecord, setMedRecord] = useState<any>([])
  const [fitRecord, setFitRecord] = useState<any>({back: 0, abs: 0, legs : 0, arms: 0})
  const [dietRecord, setDietRecord] = useState<any>({vitaming:0, carbog: 0, prog: 0, fibg: 0})
  // date: `${date.getDate()} of month ${date.getMonth()}, ${date.getFullYear()}`
  const auth = getAuth();
  const user = auth.currentUser

  async function handleSubmit() {

        const date = new Date()
        const newRec = {
          date: `${date.getHours()}h ${date.getMinutes()}min ${date.getDate()} of month ${date.getMonth()}, ${date.getFullYear()}`,
          medRec: medRecord,
          fitRec: fitRecord,
          dietRec: dietRecord
        }
        
        if (user) {
          const userRef = doc(db, "users", user.uid)
          const userSnap = await getDoc(userRef);
          const oldFitContent = userSnap.data()?.fit.content
          let newFitContent

          if(userSnap.data()?.cons % 8 == 0) {
            newFitContent = oldFitContent.map((exercise : any, index: number) => {
              return {
                ...exercise,
                week: fitRecord[Object.keys(fitRecord)[index]],
                total: fitRecord[Object.keys(fitRecord)[index]] + exercise.total,
              }
            })} else {
              newFitContent = oldFitContent.map((exercise : any, index: number) => {
                return {
                  ...exercise,
                  week: fitRecord[Object.keys(fitRecord)[index]] + exercise.week,
                  total: fitRecord[Object.keys(fitRecord)[index]] + exercise.total,
                }})}
            

          await updateDoc(userRef, {
            record: arrayUnion(newRec),
            cons: increment(1),
            "fit.content": newFitContent
          });
        }
      }
  


  return (
<Flex direction="column" align="center" justify="center">
  <Form.Root className={style.FormRoot}>
    <h1>Daily Check-In</h1>
    <MedicineToggle handleSave={setMedRecord}/>
    <FitnessTrack handleSave={setFitRecord} />
    <DietTrack handleSave={setDietRecord}/>
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
  </Form.Root>
  </Flex>
)
}
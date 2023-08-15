
import React, { useEffect, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import style from './CheckIn.module.css'
import MedicineToggle from '@/formcomp/MedicineToggle';
import FitnessTrack from '@/formcomp/FitnessTrack';
import DietTrack from '@/formcomp/DietTrack';
import { getAuth } from 'firebase/auth';
import { Flex } from '@radix-ui/themes';
import { Button } from 'antd';
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function CheckIn() {

  const [medRecord, setMedRecord] = useState<any>([])
  const [fitRecord, setFitRecord] = useState<any>({})
  const [dietRecord, setDietRecord] = useState<any>({})
  // date: `${date.getDate()} of month ${date.getMonth()}, ${date.getFullYear()}`
  const auth = getAuth();
  const user = auth.currentUser


  async function handleSubmit() {

        const date = new Date()
        const newRec = {
          date: `${date.getDate()} of month ${date.getMonth()}, ${date.getFullYear()}`,
          medRec: medRecord,
          fitRec: fitRecord,
          dietRec: dietRecord
        }

        console.log(newRec)

        if (user) {
          const userRef = doc(db, "users", user.uid)
          await updateDoc(userRef, {
            rec: arrayUnion(newRec)
          }
            );
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
import React, { useState } from 'react';
import style from './MedicineToggle.module.css'
import { Space, Switch } from 'antd';
import { Flex } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-form';
import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function MedicineToggle() {
  let toggles : any = []
  const auth = getAuth();
  const user = auth.currentUser;

  const [profile, setProfile] = useState<object[]>([])

  if (user) {
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
    toggles = doc.data()?.med.content.map((medicine : any) => {
    return (
      <Flex gap="2">
      <label>{medicine.name}</label>
      <Switch checkedChildren="taken" unCheckedChildren="not taken" />
      </Flex>
    )
  })
    });
  }

  

  return (
  <div>
    {toggles.length === 0 ? <h2>You have not added any prescription</h2> : <h1>Medicine</h1>}
    <Flex direction="column" gap="2">
    {toggles}
    </Flex>
  </div>
);
}
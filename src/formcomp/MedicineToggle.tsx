import React, { useEffect, useState } from 'react';
import style from './MedicineToggle.module.css'
import { Space, Switch } from 'antd';
import { Flex } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-form';
import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function MedicineToggle() {
  const [toggles, setToggles] = useState<any[]>([])
  const [hasMed, setHasMed] = useState(false)
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    let unsub
    let togglesNew : any[] = []
  if (user) {
     unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
    setHasMed(!doc.data()?.med.content.length)
    const togglesMeds = doc.data()?.med.content
    togglesNew = togglesMeds.map((med: any) => {
    
    return (
      <Flex gap="2">
      <label>{med.name}</label>
      <Switch checkedChildren="taken" unCheckedChildren="not taken" />
      </Flex>
    )
    }
    )

    setToggles(togglesNew)

  })
  }
  
return unsub
  }, [])

  

  return (
  <div>
    {hasMed ? <h4>no pres</h4> : <h1>Medicine</h1>}
    <Flex direction="column" gap="2" justify="center" align="end">
    {toggles}
    </Flex>
  </div>
);
}
import React, { useEffect, useState } from 'react';
import style from './MedicineToggle.module.css'
import { Space, Switch } from 'antd';
import { Flex } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-form';
import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function MedicineToggle(props:any) {
  const [toggles, setToggles] = useState<any[]>([])
  const [hasMed, setHasMed] = useState(false)
  const auth = getAuth();

  useEffect(() => {
    let unsub
    let togglesNew : any[] = []
    const user = auth.currentUser;
  if (user) {
     unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
    setHasMed(!doc.data()?.med.content.length)
    const togglesMeds = doc.data()?.med.content

    let record : any[]= []
    for (let i = 0; i < togglesMeds.length; i++) {
      let newRec = {
        name: togglesMeds[i].name,
        taken: false,
      }

      record.push(newRec)
    }

    let a = -1

    function updateToggled(checked: boolean, index: number) {
      record[index].taken = checked
      props.handleSave(record)
    }

    togglesNew = togglesMeds.map((med: any, index: number) => {
    
    return (
      <Flex gap="2" key={index}>
      <label>{med.name}</label>
      <Switch checkedChildren="taken" unCheckedChildren="not taken" onClick={(checked, e) => updateToggled(checked, index)} />
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
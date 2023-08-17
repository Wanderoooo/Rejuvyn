import React, { useEffect, useRef, useState } from 'react';
import { Space, Switch } from 'antd';
import { Flex } from '@radix-ui/themes';
import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function MedicineToggle(props:any) {
  const prevMedContent = useRef<any[]>([])
  const togglesRef = useRef<any[]>([])
  const [toggles, setToggles] = useState(togglesRef.current)
  const auth = getAuth();

  function updateToggled(checked: boolean, index: number, record: any[]) {
    record[index].taken = checked
    props.handleSave(record)
  }

  useEffect(() => {
    let unsub
    const user = auth.currentUser;

  if (user) {
     unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      if (doc.data()?.med.content !== prevMedContent.current) {
          prevMedContent.current = doc.data()?.med.content
          let togglesNew : any[] = []
          let recordToggleObjects : any[]= []

          const togglesMeds = doc.data()?.med.content

    for (let i = 0; i < togglesMeds.length; i++) {
      const newRec = {
        name: togglesMeds[i].name,
        taken: false,
      }

      recordToggleObjects.push(newRec)
    }

    props.handleSave(recordToggleObjects)
    togglesNew = togglesMeds.map((med: any, index: number) => {
    return (
      <Flex gap="2" key={index}>
      <label>{med.name}</label>
      <Switch checkedChildren="taken" unCheckedChildren="not taken" onClick={(checked, e) => updateToggled(checked, index, recordToggleObjects)} />
      </Flex>
    )
    }
    )
    
    togglesRef.current = togglesNew
    setToggles(togglesNew)

      }
    })
  }

     return unsub

  }, [])





  return (
  <div>
    {prevMedContent.current.length === 0 ? <h4>You have no prescription</h4> : <h1>Medicine</h1>}
    <Flex direction="column" gap="2" justify="center" align="end">
    {toggles}
    </Flex>
  </div>
);
}
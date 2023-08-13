import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import style from './MedicineToggle.module.css'

export default function MedicineToggle({medicines} : {medicines: Array<any>}) {
  let toggles = []
  medicines = [{id: 1, name: 'synthoid', instruction: 'weird', next_does: 24}, {id: 1, name: 'next', instruction: 'weird', next_does: 24}]
  toggles = medicines.map((medicine) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className={style.Label} htmlFor={medicine.name} style={{ paddingRight: 15 }}>
      {medicine.name}
      </label>
      <Switch.Root className={style.SwitchRoot} id={medicine.id}>
        <Switch.Thumb className={style.SwitchThumb} />
      </Switch.Root>
      <label className={style.Label} htmlFor={medicine.name} style={{ paddingLeft: 15 }}>not taken</label>
    </div>
    )
  })

  return (
  <div>
    <h1>Medicine</h1>
    {toggles}
  </div>
);
}
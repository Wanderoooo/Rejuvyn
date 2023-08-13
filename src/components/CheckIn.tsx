
import React from 'react';
import * as Form from '@radix-ui/react-form';
import style from './CheckIn.module.css'
import MedicineToggle from '@/formcomp/MedicineToggle';
import FitnessTrack from '@/formcomp/FitnessTrack';
import DietTrack from '@/formcomp/DietTrack';
import SymptomTrack from '@/formcomp/SymptomTrack';

export default function CheckIn() {

  return (
  <Form.Root className={style.FormRoot}>
    <MedicineToggle medicines={[]}/>
    <FitnessTrack />
    <DietTrack />
    <SymptomTrack />
    <Form.Submit asChild>
      <button className={style.Button} style={{ marginTop: 10 }}>
        Submit
      </button>
    </Form.Submit>
  </Form.Root>
)
}
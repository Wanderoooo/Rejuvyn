
import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import style from './CheckIn.module.css'
import MedicineToggle from '@/formcomp/MedicineToggle';
import FitnessTrack from '@/formcomp/FitnessTrack';
import DietTrack from '@/formcomp/DietTrack';
import SymptomTrack from '@/formcomp/SymptomTrack';
import { Flex } from '@radix-ui/themes';
import { Button } from 'antd';

export default function CheckIn() {

  const [show, setShow] = useState("main")

  return (
<Flex direction="column" align="center" justify="center">
  <Form.Root className={style.FormRoot}>
    <MedicineToggle />
    <FitnessTrack />
    <DietTrack />
      <Button type="primary">
        Submit
      </Button>
  </Form.Root>
  </Flex>
)
}
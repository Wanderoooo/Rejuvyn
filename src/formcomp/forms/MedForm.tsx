import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Select, Space } from 'antd';
import { DatePicker } from 'antd';
import { Flex, TextArea } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import style from './ProfileForm.module.css'
import { useRouter } from 'next/router';



function MedForm(props: any) {
  const [form] = Form.useForm();
  const [name, setName] = useState("")
  const [instr, setInstr] = useState("")
  const [amount, setAmount] = useState(0)
  const [unit, setUnit] = useState("")
  const [time, setTime] = useState("")

  const router = useRouter()

  function savePres(name:string, instr:string, am:number, unit:string, time:string) {
    const presInfo = {
      name: name,
      instr: instr,
      amount: am,
      unit: unit,
      time: time
    }

    // !!! props.medArry.push(presInfo)
    //!!! upload & merge w google data

  }

  return (
    <div>
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" className={style.form}>
      <Form.Item name="name" label="Prescription name" rules={[{ required: true }]}>
        <Input onChange={e => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item name="instr" label="Instruction" rules={[{ required: true }]}>
        <TextArea onChange={e => setInstr(e.target.value)}/>
      </Form.Item>
      <Form.Item name="" label="Intake info" rules={[{ required: true }]}>
        <Select
      defaultValue="1"
      style={{ width: 120 }}
      onChange={(v, o) => setAmount(parseInt(v))}
      options={[
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
      ]}
    />
        <Select
      defaultValue="tablet"
      style={{ width: 120 }}
      onChange={(v, o) => setAmount(parseInt(v))}
      options={[
        { value: 'tablet', label: 'tablet' },
        { value: 'capsule', label: 'capsule' },
        { value: 'teaspoon', label: 'teaspoon' },
        { value: 'ml', label: 'ml' },
      ]}
    />
        <label>per</label>
        <Select
      defaultValue="day"
      style={{ width: 120 }}
      onChange={(v, o) => setAmount(parseInt(v))}
      options={[
        { value: 'hour', label: 'hour' },
        { value: 'day', label: 'day' },
        { value: 'week', label: 'week' },
        { value: 'month', label: 'month' },
      ]}
    />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" onClick={()=>savePres(name, instr, amount, unit, time)}>
            Submit
            </Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
    <Flex align="center" gap="2">
    </Flex>
    </div>
  );
};

export default MedForm;
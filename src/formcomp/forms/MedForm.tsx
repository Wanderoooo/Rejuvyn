import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Select, Space } from 'antd';
import { DatePicker } from 'antd';
import { Flex, TextArea } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import style from './ProfileForm.module.css'
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';



function MedForm(props: any) {
  const [form] = Form.useForm();
  const [name, setName] = useState("")
  const [instr, setInstr] = useState("")
  const [amount, setAmount] = useState(1)
  const [unit, setUnit] = useState("tablet")
  const [time, setTime] = useState("day")

  const auth = getAuth();
  const user = auth.currentUser;

  async function savePres(name:string, instr:string, am:number, unit:string, time:string) {
    const newMed = {
      name: name,
      week: instr,
      total: (am + " " + unit + " per " +  time)
    }

    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "med.content": arrayUnion(newMed)
      }
      )
    }

  }

  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
  
    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
    }, [values]);
  
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        Submit
      </Button>
    );
  };

  return (
    <div>
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" className={style.form}>
      <Form.Item name="name" label="Prescription name" rules={[{ required: true }]}>
        <Input onChange={e => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item name="instruction" label="Instruction" rules={[{ required: true }]}>
        <Input onChange={e => setInstr(e.target.value)}/>
      </Form.Item>
      <Form.Item name="Medication Period" label="Intake info" >
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
      onChange={(v, o) => setUnit(v)}
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
      onChange={(v, o) => setTime(v)}
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
          <section onClick={() => {
            props.updateAdd("no")
            savePres(name, instr, amount, unit, time) 
          }}>
        <SubmitButton form={form} />
        </section>
          <Button htmlType="reset">Reset</Button>
            {!props.isZero &&
            <Button onClick={() => props.updateAdd("no")}>Cancel</Button>}
        </Space>
      </Form.Item>
    </Form>
    <Flex align="center" gap="2">
    </Flex>
    </div>
  );
};

export default MedForm;
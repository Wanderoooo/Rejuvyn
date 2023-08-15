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



function DoctorsForm(props: any) {
  const [form] = Form.useForm();

  const [name, setName] = useState("")
  const [spec, setSpec] = useState("")
  const [phone, setPhone] = useState("")

  const router = useRouter() 
  const auth = getAuth();
  const user = auth.currentUser;

  async function saveDoc() {
    const newDoc = {
      name: name,
      week: spec,
      total: phone
    }

    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "doctors.content": arrayUnion(newDoc)
      }
      )
    }

    // !!! props.medArry.push(presInfo)
    //!!! upload & merge w google data

    // props.updateAdd(isAdd)

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
      <Form.Item name="name" label="Doctor's Name" rules={[{ required: true }]}>
        <Input onChange={e => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item name="specialization" label="Specialization" rules={[{ required: true }]}>
        <Input onChange={e => setSpec(e.target.value)}/>
      </Form.Item>
      <Form.Item name="phone #" label="Contact Phone #" rules={[{ required: true }]} >
        <Input type="tel" />
      </Form.Item>
      <Form.Item>
        <Space>
          <section onClick={() => {
            saveDoc() 
            props.updateAdd("no")
          }}>
        <SubmitButton form={form} />
        </section>
          <Button htmlType="reset">Reset</Button>
          <Button onClick={()=>saveDoc()}>
            Add another
            </Button>
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

export default DoctorsForm;
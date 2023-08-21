import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, DatePicker, Form, Input,  Space } from 'antd';
import { Flex} from '@radix-ui/themes';
import style from './ProfileForm.module.css'
import { getAuth } from 'firebase/auth';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';



function SympForm(props: any) {
  const [form] = Form.useForm();

  const [slabel, setSLabel] = useState("")
  const [des, setDes] = useState("")
  const [date, setDate] = useState("")

  const auth = getAuth();
  const user = auth.currentUser;

  async function saveSymp() {
    const newSymp = {
      name: slabel,
      week: des,
      total: date
    }

    if (user) {
      const userRef = doc(db, "users", user.uid)
      await updateDoc(userRef, {
        "symp.content": arrayUnion(newSymp)
      }
      )
    }

    form.resetFields()

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
    <h1>New Symptom</h1>
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" className={style.form}>
      <Form.Item name="label" label="Symptom label" rules={[{ required: true }]}>
        <Input onChange={e => setSLabel(e.target.value)}/>
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input onChange={e => setDes(e.target.value)}/>
      </Form.Item>
      <Form.Item name="started" label="Date started" rules={[{ required: true }]}>
      <DatePicker onChange={(dayjs, dateString) => setDate(dateString.toLocaleString())} />
      </Form.Item>
      <Form.Item>
        <Space>
          <section onClick={() => {
            saveSymp() 
          }}>
        <SubmitButton form={form} />
        </section>
          <Button htmlType="reset">Reset</Button>
          {!props.isZero && <Button onClick={() => props.updateAdd("no")}>Archive Symptom</Button>}
        </Space>
      </Form.Item>
    </Form>
    <Flex align="center" gap="2">
    </Flex>
    </div>
  );
};

export default SympForm;
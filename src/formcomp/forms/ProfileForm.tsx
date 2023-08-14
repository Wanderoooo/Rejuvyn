import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input,Space, Upload} from 'antd';
import { DatePicker } from 'antd';
import { Flex } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import style from './ProfileForm.module.css'
import { useRouter } from 'next/router';
import { PlusOutlined } from '@ant-design/icons';




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

function ProfileForm(props: any) {
  const [form] = Form.useForm();
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [fit, setFit] = useState(0)
  const [bday, setBday] = useState("")

  const router = useRouter()

  function saveProfile(name:string, phone:string, fit:number, bday:string) {
    const basicInfo = {
      name: name,
      phone: phone,
      fit: fit,
      bday: bday
    }

    //!!! upload & merge w google data

    router.push('./medication')
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <h1>Rejuvyn Profile Setup</h1>
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" className={style.form}>
      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
        <Input onChange={e => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Upload profile image" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      <Form.Item name="birthday" label="Birthday" rules={[{ required: true }]}>
      <DatePicker onChange={(dayjs, dateString) => setPhone(dateString)}/>
      </Form.Item>
      <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
        <Input type="tel" onChange={e => setPhone(e.target.value)}/>
      </Form.Item>
      <Form.Item name="fitness goal" label="Weekly Fitness Goal (hours)" rules={[{ required: true }]}>
        <Input type="number" min="0" onChange={e => setFit(parseInt(e.target.value))}/>
      </Form.Item>
      <Form.Item>
        <Space>
          <section onClick={()=>saveProfile(name, phone, fit, bday)}>
          <SubmitButton form={form} />
          </section>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
    <Flex align="center" gap="2">
    <h2>Let's set up your prescriptions next!</h2> <ArrowRightIcon />
    </Flex>
    </div>
  );
};

export default ProfileForm;
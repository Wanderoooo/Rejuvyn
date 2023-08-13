import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Select, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import style from './ProfileForm.module.css'



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

const App: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" className={style.form}>
      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="birthday" label="Birthday" rules={[{ required: true }]}>
      <DatePicker />
      </Form.Item>
      <Form.Item name="prescription" label="Prescription" rules={[{ required: true }]}>
      <Form.List name="medicine">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="start">
              <Form.Item
                {...restField}
                name={[name, 'name']}
                rules={[{ required: true, message: 'Missing medicine name' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'instr']}
                rules={[{ required: true, message: 'Instruction' }]}
              >
                <TextArea placeholder="Instruction" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'period']}
                rules={[{ required: true, message: 'Dosage period' }]}
              >
                <Input type="number" placeholder="Dosage period (hour)" min="0"/>
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </Form.Item>
    <Form.Item name="fitness goal" label="Weekly fitness goal (hours)" rules={[{ required: true }]}>
      <Input type="number" min="0"/>
    </Form.Item>
    <Form.Item name="doctor" label="Doctor(s)" rules={[{ required: true }]}>
      <Form.List name="doctor">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="start">
              <Form.Item
                {...restField}
                name={[name, 'name']}
                rules={[{ required: true, message: 'Missing doctor name' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'spec']}
                rules={[{ required: true, message: 'Missing doctor specialty' }]}
              >
                <TextArea placeholder="Specialty" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'phone']}
                rules={[{ required: true, message: 'Missing Phone number' }]}
              >
                <Input type="tel" placeholder="Phone number"/>
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;
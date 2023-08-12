
import React from 'react';
import * as Form from '@radix-ui/react-form';
import style from './CheckIn.module.css'

export default function CheckIn() {
  return (
  <Form.Root className={style.FormRoot}>
    <Form.Field className={style.FormField} name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className={style.FormLabel}>Email</Form.Label>
        <Form.Message className={style.FormMessage} match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className={style.FormMessage} match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className={style.Input} type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className={style.FormField} name="question">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className={style.FormLabel}>Question</Form.Label>
        <Form.Message className={style.FormMessage} match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className={style.Textarea} required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className={style.Button} style={{ marginTop: 10 }}>
        Post question
      </button>
    </Form.Submit>
  </Form.Root>
)
}
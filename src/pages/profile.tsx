import ProfileShow from '@/formcomp/forms/ProfileShow'
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'
import dynamic from 'next/dynamic'
import { Button } from 'antd'
import DoctorsForm from '@/formcomp/forms/DoctorsForm'
const DynamicPS = dynamic(() => import('../formcomp/forms/ProfileShow'), {
  ssr: false,
})

export default function Profile() {
  return (
    <Flex direction="column" justify="center" align="center">
      <DynamicPS />
      <DoctorsForm />
      <Button type='default'>Edit Doctors</Button>
      <Button type='default'>Edit Profile Info</Button>
    </Flex>
  )
}
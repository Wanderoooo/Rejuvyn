import ProfileShow from '@/formcomp/profileform/ProfileShow'
import ProfileForm from '../formcomp/profileform/ProfileForm'
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'

export default function Profile() {
  return (
    <Flex className={style.profile}>
      <ProfileForm />
      <ProfileShow />
    </Flex>
  )
}
import ProfileShow from '@/formcomp/forms/ProfileShow'
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'

export default function Profile() {
  return (
    <Flex className={style.profile}>
      <ProfileShow />
    </Flex>
  )
}
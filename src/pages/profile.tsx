import ProfileShow from '@/formcomp/forms/ProfileShow'
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'
import dynamic from 'next/dynamic'
const DynamicPS = dynamic(() => import('../formcomp/forms/ProfileShow'), {
  ssr: false,
})

export default function Profile() {
  return (
    <Flex className={style.profile}>
      <DynamicPS />
    </Flex>
  )
}
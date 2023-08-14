import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const DynamicPF = dynamic(() => import('../formcomp/forms/ProfileForm'), {
    ssr: false,
  })

export default function SetUpProfile() {
  return (
    <Flex className={style.profile}>
      <DynamicPF />
    </Flex>
  )
}
import { Flex } from '@radix-ui/themes'
import style from '../styles/index.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const DynamicPF = dynamic(() => import('../formcomp/forms/ProfileForm'), {
    ssr: false,
  })

export default function SetUpProfile() {

    const [profile, setProfile] = useState<any>(null)

    function handleSubmit(name: any, bday : any, email : any, pres : any, fitgoal : any, doctors : any) {

         setProfile((oldProfile:any)  => {
            const newProfile = {
                name: name ? name : oldProfile.name,
                bday: bday ? bday : oldProfile.bday,
                email: email ? email : oldProfile.email,
                pres: pres ? pres : oldProfile.pres,
                fitgoal : fitgoal ? fitgoal : oldProfile.fitgoal,
                doctors: doctors ? doctors : oldProfile.doctors,
            }

            return newProfile
         })
    }
    
  return (
    <Flex className={style.profile}>
      <DynamicPF handleSubmit={handleSubmit}/>
    </Flex>
  )
}
import Calendars from "@/components/Calendars";
import ProgressBar from "@/components/ProgressBar";
import { Flex } from "@radix-ui/themes";
import MedForm from '../formcomp/forms/MedForm'
import { useState } from "react";

export default function Medication() {
  const medArray : any[] = []

  return (
    <Flex direction="column" align="center">
      {medArray.length === 0 ?
      
      <Flex direction="column" align="center">
        <h1>You have no prescription tracked, add one below</h1>
        <MedForm medArray={medArray} />
      </Flex>

    :
    <h1>show all meds here</h1>}




      {/* <Calendars />
      <ProgressBar /> */}
    </Flex>
  )
}
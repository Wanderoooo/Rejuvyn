import { Flex } from "@radix-ui/themes";
import { Select } from "antd";
import { useState } from "react";



export default function FitnessTrack(props:any) {
  const [back, setBack] = useState(0)
  const [ab, setAb] = useState(0)
  const [legs, setLegs] = useState(0)
  const [arms, setArms] = useState(0)



  return (
    <div>
    <h1>Fitness</h1>
    <Flex direction="column" align="end">
      <section>
        <label>Back  </label>
        <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={(v, o) => {
        setBack(parseInt(v))
        props.handleSave({back: back, abs: ab, legs: legs, arms: arms})}}
      options={[
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3'},
      ]}
    />
      <label>h</label>
      </section>

      <section>
        <label>Abdominal  </label>
        <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={(v, o) => {
        setAb(parseInt(v))
        props.handleSave({back: back, abs: ab, legs: legs, arms: arms})}}
      options={[
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3'},
      ]}
    />
      <label>h</label>
      </section>

      <section>
        <label>Legs  </label>
        <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={(v, o) => {
        setLegs(parseInt(v))
        props.handleSave({back: back, abs: ab, legs: legs, arms: arms})}}
      options={[
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3'},
      ]}
    />
      <label>h</label>
      </section>

      <section>
        <label>Arms  </label>
        <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={(v, o) => {
        setArms(parseInt(v))
        props.handleSave({back: back, abs: ab, legs: legs, arms: arms})}}
      options={[
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3'},
      ]}
    />
      <label>h</label>
      </section>
    </Flex>
    </div>
  )
}
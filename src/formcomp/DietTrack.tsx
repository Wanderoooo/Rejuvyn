import { Flex } from "@radix-ui/themes"
import { Input, Select } from "antd"
import { useState } from "react"


export default function DietTrack(props:any) {
  const [vit, setVit] = useState(0)
  const [carbo, setCarbo] = useState(0)
  const [pro, setPro] = useState(0)
  const [fib, setFib] = useState(0)

  function save(vitaming: number, carbog: number, prog: number, fibg: number) {

    props.handleSave({vitaming: vitaming, carbog: carbog, prog:prog, fibg: fibg})
  }

  return (
    <div>
      <h1>Diet</h1>
    <Flex direction="column" align="end">
      <Flex>
        <label>Vitamins  </label>
        <Input type="number" min="0" placeholder="0" onChange={(e) => {
          setVit(parseInt(e.target.value))
          save(parseInt(e.target.value) || 0, carbo, pro, fib)}}/>
      <label>g</label>
      </Flex>

      <Flex>
        <label>Carbohydrate  </label>
        <Input type="number" min="0" placeholder="0" onChange={(e) => {
          setCarbo(parseInt(e.target.value))
          save(vit, parseInt(e.target.value) || 0, pro, fib)}} />
      <label>g</label>
      </Flex>

      <Flex>
        <label>Protein  </label>
        <Input type="number" min="0" placeholder="0" onChange={(e) => { 
          setPro(parseInt(e.target.value))
          save(vit, carbo, parseInt(e.target.value) || 0, fib)}} />
      <label>g</label>
      </Flex>

      <Flex>
        <label>Fiber  </label>
        <Input type="number" min="0" placeholder="0" onChange={(e) => { 
          setFib(parseInt(e.target.value))
          save(vit, carbo, pro, parseInt(e.target.value) || 0)}} />
      <label>g</label>
      </Flex>
    </Flex>
    </div>
  )
}
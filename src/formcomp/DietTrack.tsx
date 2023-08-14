import { Flex } from "@radix-ui/themes"
import { Input, Select } from "antd"


export default function DietTrack() {
  function handleChange() {
    console.log("hi2")
  }


  return (
    <div>
      <h1>Diet</h1>
    <Flex direction="column" align="end">
      <Flex>
        <label>Vitamins  </label>
        <Input type="number" min="0" />
      <label>g</label>
      </Flex>

      <Flex>
        <label>Carbohydrate  </label>
        <Input type="number" min="0" />
      <label>g</label>
      </Flex>

      <Flex>
        <label>Protein  </label>
        <Input type="number" min="0" />
      <label>g</label>
      </Flex>

      <Flex>
        <label>Fiber  </label>
        <Input type="number" min="0" />
      <label>g</label>
      </Flex>
    </Flex>
    </div>
  )
}
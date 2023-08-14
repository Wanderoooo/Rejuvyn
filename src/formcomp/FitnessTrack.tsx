import { Flex } from "@radix-ui/themes";
import { Select } from "antd";



export default function FitnessTrack() {
  function handleChange() {
    console.log("h1")
  }

  return (
    <div>
    <h1>Fitness</h1>
    <Flex direction="column" align="end">
      <section>
        <label>Back  </label>
        <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
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
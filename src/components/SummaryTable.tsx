import { Table } from "@radix-ui/themes"
import style from './SummaryTable.module.css'

export default function SummaryTable(props: any) {

  const dataArray : any[] = [{first: "hi", second: "hi2", third: "hi3"}]
  const labelTupple :string[] = ["1", "2", "3"]
  //const {labelTupple, dataArray} = props

  let compArray = dataArray.map((data:any) => {
    return (<Table.Row>
      <Table.RowHeaderCell>{data.first}</Table.RowHeaderCell>
      <Table.Cell>{data.second}</Table.Cell>
      <Table.Cell>{data.third}</Table.Cell>
    </Table.Row>)
  })

 return (
  <Table.Root className={style.table}>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>{labelTupple[0]}</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>{labelTupple[1]}</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>{labelTupple[2]}</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {compArray}
  </Table.Body>
</Table.Root>
 )
}
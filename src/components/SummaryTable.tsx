import { Table } from "@radix-ui/themes"
import style from './SummaryTable.module.css'

export default function SummaryTable(p: any) {
  const props = p.item

  let tableBody = props.content.map((data:any) => {
    return (<Table.Row key={data.name}>
      <Table.RowHeaderCell>{data.name}</Table.RowHeaderCell>
      <Table.Cell>{data.week}</Table.Cell>
      <Table.Cell>{data.total}</Table.Cell>
    </Table.Row>)
  })

 return (
  <Table.Root className={style.table}>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>{props.l_1}</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>{props.l_2}</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>{props.l_3}</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {tableBody}
  </Table.Body>
</Table.Root>
 )
}
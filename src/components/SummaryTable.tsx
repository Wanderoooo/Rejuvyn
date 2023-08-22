import { Table } from "@radix-ui/themes"
import style from './SummaryTable.module.css'

export default function SummaryTable(p: any) {
  const props = p.item

  let tableBody = props.content.map((data:any) => {
    return (<Table.Row key={data.name}>
      <Table.RowHeaderCell className={style.text}>{data.name}</Table.RowHeaderCell>
      <Table.Cell className={style.text}>{data.week}</Table.Cell>
      <Table.Cell className={style.text}>{data.total}</Table.Cell>
    </Table.Row>)
  })

 return (
  <Table.Root className={style.table}>
  <Table.Header className={style.header}>
    <Table.Row className={style.row}>
      <Table.ColumnHeaderCell className={style.text}>{props.l_1}</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className={style.text}>{props.l_2}</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className={style.text}>{props.l_3}</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {tableBody}
  </Table.Body>
</Table.Root>
 )
}
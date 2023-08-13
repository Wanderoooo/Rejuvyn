import { Table } from "@radix-ui/themes"
import style from './SummaryTable.module.css'

export default function SummaryTable() {
 return (
  <Table.Root className={style.table}>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Doctor name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Speciality</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Phone #</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
      <Table.Cell>danilo@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
      <Table.Cell>zahra@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
      <Table.Cell>jasper@example.com</Table.Cell>
      <Table.Cell>Developer</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
 )
}
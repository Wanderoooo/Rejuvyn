import Calendars from "@/components/Calendars"
import { getAuth } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "@/firebase/config";
import { Flex, Table } from "@radix-ui/themes"
import style from '../components/SummaryTable.module.css'


export default function Record() {
  const auth = getAuth();
  const user = auth.currentUser
  const [record, setRecord] = useState<any>([])


  useEffect(() => {
    let unsub
    if (user) {
      unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        setRecord(doc.data()?.record)
      }) 
    }
      return unsub
    }, [])

    function getAllMedInfo(medArray:any[], index:number) {
      let medString = ""
    for (let i = 0; i < medArray.length; i++) {
      medString = medString.concat("\nName: ", medArray[i].name)
      medString = medString.concat(" Taken:\n ", medArray[i].taken)
    }

    return medString
  }

  let tableBody = record.map((data:any, index:number) => {
    return (<Table.Row key={index}>
      <Table.RowHeaderCell>{data.date}</Table.RowHeaderCell>
      <Table.Cell>{data.medRec.length === 0 ? "You have no prescription" : getAllMedInfo(data.medRec, index)}</Table.Cell>
      <Table.Cell>{`Back: ${data.fitRec.back}h \n Abs: ${data.fitRec.abs}h \n Legs: ${data.fitRec.legs}h \n Arms: ${data.fitRec.arms}h`}</Table.Cell>
      <Table.Cell>{`Vitamin: ${data.dietRec.vitaming}g \n Carbs: ${data.dietRec.carbog}g \n Protein: ${data.dietRec.prog}g \n Fiber: ${data.dietRec.fibg}g`}</Table.Cell>
    </Table.Row>)
  })

 return (
  <Flex align="center" justify="center">
  <Table.Root className={style.table}>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Medicine</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Fitness</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Diet</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {tableBody}
  </Table.Body>
</Table.Root>
</Flex>
 )
}
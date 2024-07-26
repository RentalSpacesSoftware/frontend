import { Table } from "flowbite-react"
import { EmployeesBodyTable } from "./EmployeesBodyTable"

export const EmployeesTable = () => {
  return (
    <div className="overflow-x-auto py-4">
      <Table className="divide-y divide-gray-200 dark:divide-gray-600">
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Documento</Table.HeadCell>
          <Table.HeadCell>Celular</Table.HeadCell>
          <Table.HeadCell>Correo</Table.HeadCell>
          <Table.HeadCell>Acciones</Table.HeadCell>
        </Table.Head>
        <EmployeesBodyTable />
      </Table>
    </div>
  )
}

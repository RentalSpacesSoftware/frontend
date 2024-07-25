import { TrashIcon } from "@heroicons/react/16/solid"
import { PencilSquareIcon } from "@heroicons/react/16/solid"
import { Button, Table } from "flowbite-react"

export const EmployeesTable = () => {
  return (
    <div className="overflow-x-auto py-4">
      <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Documento</Table.HeadCell>
          <Table.HeadCell>Celular</Table.HeadCell>
          <Table.HeadCell>Correo</Table.HeadCell>
          <Table.HeadCell>Acciones</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
          <Table.Row>
            <Table.Cell>Leonardo José</Table.Cell>
            <Table.Cell>1006359668</Table.Cell>
            <Table.Cell>3118882054</Table.Cell>
            <Table.Cell>leonardo.email@mail.com</Table.Cell>
            <Table.Cell className="flex gap-2">
              <Button className="bg-slate-800 rounded-xl"><PencilSquareIcon className="size-5 text-blue-50" /></Button>
              <Button className="bg-red-600"><TrashIcon className="size-5 text-blue-50" /></Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

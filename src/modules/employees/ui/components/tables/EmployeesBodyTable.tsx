import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid"
import { Button, Table } from "flowbite-react"
import { Employee } from "../../../models/employees.model"
import { useEmployeeStore } from "../../../../../store/employees/employee.store"
import { useEffect } from "react"

export const EmployeesBodyTable = () => {

  const employees: Employee[] = useEmployeeStore(state => state.employees)
  const getAllEmployees = useEmployeeStore(state => state.getAllEmployees)
  const getEmployeeById = useEmployeeStore(state => state.getEmployeeById)

  useEffect(() => {
    getAllEmployees()
  }, [getAllEmployees])

  return (
    <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
      {employees.map((employee) => (
        <Table.Row key={employee.id}>
          <Table.Cell>{`${employee.name} ${employee.lastname}`}</Table.Cell>
          <Table.Cell>{employee.document}</Table.Cell>
          <Table.Cell>{employee.phone}</Table.Cell>
          <Table.Cell>{employee.email}</Table.Cell>
          <Table.Cell className="flex gap-2">
            <Button className="bg-slate-800 rounded-xl" onClick={() => getEmployeeById(employee.id)}>
              <PencilSquareIcon className="size-5 text-blue-50" />
            </Button>
            <Button className="bg-red-600"><TrashIcon className="size-5 text-blue-50" /></Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}

import { EmployeeUpdateModal } from "../components/modals/EmployeeUpdateModal"
import { EmployeesTable } from "../components/tables/EmployeesTable"

export const EmployeesPage = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-4 space-y-4">
        <section>
          <h2 className="text-4xl font-bold">Empleados</h2>
        </section>
        <EmployeesTable />
      </div>
      
      <EmployeeUpdateModal />
    </>
  )
}

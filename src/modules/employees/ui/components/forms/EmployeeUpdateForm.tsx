import { Button, TextInput } from "flowbite-react"
import { useEmployeeStore } from "../../../../../store/employees/employee.store"

export const EmployeeUpdateForm = () => {

  const employee = useEmployeeStore(state => state.employee)

  return (
    <form onSubmit={() => { }} className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <label htmlFor="name" className="space-y-2">
          <span className="font-semibold">Nombres</span>
          <TextInput
            type="text"
            name="name"
            id="name"
            value={employee.name}
          />
        </label>
        <label htmlFor="lastname" className="space-y-2">
          <span className="font-semibold">Apellidos</span>
          <TextInput
            type="text"
            name="lastname"
            id="lastname"
            value={employee.lastname}
          />
        </label>
        <label htmlFor="document" className="space-y-2">
          <span className="font-semibold">Documento</span>
          <TextInput
            type="text"
            name="document"
            id="document"
            value={employee.document}
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="phone" className="space-y-2">
          <span className="font-semibold">Celular</span>
          <TextInput
            type="text"
            name="phone"
            id="phone"
            value={employee.phone}
          />
        </label>
        <label htmlFor="email" className="space-y-2">
          <span className="font-semibold">Correo electrónico</span>
          <TextInput
            type="email"
            name="email"
            id="email"
            value={employee.email}
          />
        </label>
      </div>

      <Button>Editar</Button>
    </form>
  )
}
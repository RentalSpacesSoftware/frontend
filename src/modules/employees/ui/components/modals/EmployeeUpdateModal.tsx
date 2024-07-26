import { Modal } from "flowbite-react"
import { useEmployeeStore } from "../../../../../store/employees/employee.store"
import { EmployeeUpdateForm } from "../forms/EmployeeUpdateForm"

export const EmployeeUpdateModal = () => {

  const openUpdateModal = useEmployeeStore(state => state.openUpdateModal)
  const closeUpdateModal = useEmployeeStore(state => state.closeUpdateModal)

  return (
    <Modal show={openUpdateModal} onClose={closeUpdateModal}>
      <Modal.Header>Editar empleado</Modal.Header>
      <Modal.Body>
        <EmployeeUpdateForm />
      </Modal.Body>
    </Modal>
  )
}
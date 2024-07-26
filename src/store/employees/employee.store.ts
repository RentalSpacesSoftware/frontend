import { create } from "zustand";
import { EmployeeActions, EmployeeState } from "../../modules/employees/models/employees.model";
import { employeeSlice } from "./slice/employee.slice";

export const useEmployeeStore = create<EmployeeState & EmployeeActions>((set, getState, store) => ({
  ...employeeSlice(set, getState, store)
}));
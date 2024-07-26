import { StateCreator } from "zustand";
import { Employee, EmployeeActions, EmployeeState } from "../../../modules/employees/models/employees.model";
import axiosTool from "../../../tools/axios-tool";
import { AxiosError } from "axios";

export const employeeSlice: StateCreator<EmployeeState & EmployeeActions> = (set) => ({
  employees: [],
  employee: {
    id: 0,
    name: "",
    lastname: "",
    document: "",
    phone: "",
    email: "",
    status: 0,
    roles: [],
    gender: {
      id: 0,
      description: ""
    },
    typeDocument: {
      id: 0,
      description: ""
    },
    company: {
      id: 0,
      name: "",
      descripion: "",
      nit: ""
    }
  },
  isLoading: false,

  getAllEmployees: async () => {
    set({ isLoading: true });

    try {
      const res = await axiosTool.get("/employees");
      set({ employees: res.data as Employee[], isLoading: false });

      return res.data;
    } catch (error) {
      return error as AxiosError;
    } finally {
      set({ isLoading: false });
    }
  }
})
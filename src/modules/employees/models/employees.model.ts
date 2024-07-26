import { AxiosError } from "axios";

export interface Employee {
  id: number;
  name: string;
  lastname: string;
  document: string;
  phone: string;
  email: string;
  status: number;
  roles: {
    id: number;
    description: string;
  }[];
  gender: {
    id: number;
    description: string;
  };
  typeDocument: {
    id: number;
    description: string;
  };
  company: {
    id: number;
    name: string;
    descripion: string;
    nit: string;
  };
}

export interface EmployeeState {
  employees: Employee[];
  employee: Employee;
  isLoading: boolean;
  openCreateModal: boolean;
  openUpdateModal: boolean;
}

export interface EmployeeActions {
  closeUpdateModal: () => void;
  getAllEmployees: () => Promise<Employee[] | AxiosError>;
  getEmployeeById: (id: number) => Promise<Employee | AxiosError>;
}

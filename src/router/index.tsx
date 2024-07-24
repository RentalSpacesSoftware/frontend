import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../modules/auth/ui/layouts/AuthLayout";
import { LoginPage } from "../modules/auth/ui/pages/LoginPage";
import AppCommonLayout from "../modules/common/ui/layouts/AppCommonLayout";
import { EmployeesPage } from "../modules/employees/ui/layouts/EmployeesPage";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const router: Remix = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "app",
    element: <AppCommonLayout />,
    children: [
      {
        path: "employees",
        element: <EmployeesPage />
      }
    ]
  }
]);
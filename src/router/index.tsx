import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../modules/auth/ui/layouts/AuthLayout";
import { LoginPage } from "../modules/auth/ui/pages/LoginPage";
import AppCommonLayout from "../modules/common/ui/layouts/AppCommonLayout";
import { EmployeesPage } from "../modules/employees/ui/pages/EmployeesPage";
import PrivateRoute from "./custom/PrivateRoute";
import ProtectedRoute from "./custom/ProtectedRoute";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const router: Remix = createBrowserRouter([
  {
    path: "auth",
    element: <ProtectedRoute><AuthLayout /></ProtectedRoute>,
    children: [
      {
        path: "login",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "app",
    element: <PrivateRoute><AppCommonLayout /></PrivateRoute>,
    children: [
      {
        path: "employees",
        element: <EmployeesPage />
      }
    ]
  }
]);
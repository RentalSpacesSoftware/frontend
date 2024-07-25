import { Navigate } from "react-router-dom"
import { useAuthStore } from "../../store/auth/auth.store"

type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  
  if (isAuthenticated) return <Navigate to="/app/employees" />

  return props.children
}

export default ProtectedRoute

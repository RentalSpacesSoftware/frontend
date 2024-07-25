import { Navigate } from "react-router-dom"
import { useAuthStore } from "../../store/auth/auth.store"

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return isAuthenticated ? props.children : <Navigate to="/auth/login" />
}

export default PrivateRoute

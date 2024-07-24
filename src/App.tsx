import { Navigate, Outlet, useLocation } from "react-router-dom"

const App = () => {

  const { pathname } = useLocation()

  if (pathname === "/app") {
    return <Navigate to="/employees" />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default App

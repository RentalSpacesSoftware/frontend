import { Outlet } from "react-router-dom"
import { AppCommonSideBar } from "../components/AppCommonSideBar"

const AppCommonLayout = () => {
  return (
    <main className="w-full flex h-screen">
      <AppCommonSideBar />
      <div className="">
        <Outlet />
      </div>
    </main>
  )
}

export default AppCommonLayout

import { BuildingStorefrontIcon, CalendarIcon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import { Sidebar } from "flowbite-react"
import { Outlet } from "react-router-dom"

const AppCommonLayout = () => {
  return (
    <main className="w-full flex h-screen">
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={BuildingStorefrontIcon}>
              Empresa
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={UserGroupIcon}>
              Empleados
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={RocketLaunchIcon}>
              Espacios
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={CalendarIcon}>
              Alquileres
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default AppCommonLayout

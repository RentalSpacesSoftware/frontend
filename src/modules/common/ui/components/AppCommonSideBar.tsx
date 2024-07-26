import { BuildingStorefrontIcon, CalendarIcon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import { Sidebar } from "flowbite-react"

export const AppCommonSideBar = () => {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BuildingStorefrontIcon}>
            Empresa
          </Sidebar.Item>
          <Sidebar.Item href="/app/employees" icon={UserGroupIcon}>
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
  )
}
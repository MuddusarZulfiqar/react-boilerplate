import { Outlet } from "react-router"

function DashboardLayout() {
  return (
    <div>
        DashboardLayout
        <Outlet />
        {/* This Outlet will render the child routes of the DashboardLayout */}
        {/* You can add a sidebar, header, or any other common components here */}
        {/* Example: <Sidebar /> <Header /> */}
    </div>
  )
}

export default DashboardLayout
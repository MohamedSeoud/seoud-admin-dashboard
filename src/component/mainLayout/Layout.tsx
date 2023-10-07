import { Outlet } from "react-router"
import Topbar from "./Topbar"
import Sidebar from "./Sidebar"

function Layout() {
  return (
    <div className="w-full h-screen">
        <Topbar/>
        <div className=" flex flex-row w-full">
        <Sidebar/>

        
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout

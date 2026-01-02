
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const ProtectedLayout:React.FC =()=>{
    return(
    <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-100">
            <Navbar/>
            <Outlet />
        </div>

    </div>)
}
export default ProtectedLayout
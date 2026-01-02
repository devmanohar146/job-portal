import { useNavigate } from "react-router-dom"
import { logout } from "../redux/slices/authSlice"
import { useAppDispatch } from "../redux/hooks"
const Navbar:React.FC =()=>{
     const dispatch = useAppDispatch()
     const navigate = useNavigate()

    const handleLogout =()=>{
       dispatch(logout())
       navigate("/login")
    }
    return (
        <div className ="h-14 bg-white shadow flex items-center justify-between px-6 ">

            <h2 className="text-lg fornt-semibold">Portal Admin</h2>
            <button onClick={handleLogout} className="text-red-500 font-medium" aria-placeholder="log-out">Logout</button>
        </div>
    )
}

export default Navbar
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

interface Props {
  children: JSX.Element
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useAppSelector(
    state => state.auth.isAuthenticated
  )

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute

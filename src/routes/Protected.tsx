import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/TypesRedux"

interface props{
    children:React.ReactNode
}
export default function Protected({children}:props) {
  const {token}=useAppSelector(state=>state.auth);
  if(!token) return <Navigate to="/login" replace />
  return <>{children}</> 
}

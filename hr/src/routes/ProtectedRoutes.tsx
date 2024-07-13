import { Outlet, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const ProtectedRoutes = () => {

    const userData = localStorage.getItem('user')

    return (userData != null) ? <Outlet /> : <Navigate to="/login" />
}

export default observer(ProtectedRoutes);
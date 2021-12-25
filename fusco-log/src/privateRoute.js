import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from './contexts/AuthContext';

function PrivateRoute() {
    const { currentUser } = useAuth()

    return currentUser ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoute;
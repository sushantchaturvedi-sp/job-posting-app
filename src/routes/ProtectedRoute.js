import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

function ProtectedRoute({ children }) {
    const user = getUser();
    return user?.role === "admin" ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;

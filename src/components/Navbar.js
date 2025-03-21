import { Link } from "react-router-dom";
import { getUser, logout } from "../utils/auth";

function Navbar() {
    const user = getUser();
console.log("called", user);
    return (
        <nav className="navbar ">
            <Link to="/">Home</Link>
            {user?.role === "admin" && <Link to="/create-job">Create Job</Link>}
            {user ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
        </nav>
    );
}

export default Navbar;

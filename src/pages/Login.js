import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import Navbar from "../components/Navbar";
function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleLogin() {
        if (!email.includes("@")) {
            setError("Invalid email format");
            return;
        }
        login(email);
        navigate("/");
    }

    return (
        <div><Navbar />
            <div>
                <h2>Login</h2>
                {error && <p>{error}</p>}
                <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div></div>
    );
}

export default Login;

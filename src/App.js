import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<JobDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-job" element={<ProtectedRoute><CreateJob /></ProtectedRoute>} />
                <Route path="/edit-job/:id" element={<ProtectedRoute><CreateJob /></ProtectedRoute>} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </Router>
    );
}

export default App;

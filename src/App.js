import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/Layout";


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>  
            <Route index element={<Home />} /> 
            <Route path="about" element={<About />} />  
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    );
  }
export default App;

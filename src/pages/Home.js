import { Link } from "react-router-dom";
import { getJobs, saveJobs } from "../utils/storage";
import { getUser } from "../utils/auth";
import Navbar from "../components/Navbar";

function Home() {
    const jobs = getJobs();
    const user = getUser();
    const isAdmin = user?.role === "admin";

    function handleDelete(id) {
        const updatedJobs = jobs.filter(job => job.id !== id);
        saveJobs(updatedJobs);
        window.location.reload();
    }

    return (
        <div>
            <Navbar />

            <div>
                <h1>Job Listings</h1>
                {jobs.length === 0 ? <p>No jobs available.</p> : (
                    <ul>
                        {jobs.map(job => (
                            <li key={job.id}>
                                <Link to={`/jobs/${job.id}`}>{job.title} at {job.company}</Link>
                                {isAdmin && (
                                    <>
                                        <Link to={`/edit-job/${job.id}`}><button>Edit</button></Link>
                                        <button onClick={() => handleDelete(job.id)}>Delete</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div></div>
    );
}

export default Home;

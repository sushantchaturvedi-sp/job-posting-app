import { useParams } from "react-router-dom";
import { getJobById } from "../utils/storage";
import Navbar from "../components/Navbar";

function JobDetails() {
    const { id } = useParams();
    const job = getJobById(id);

    if (!job) return <h2>Job Not Found</h2>;

    return (
        <div><Navbar />
            <div>
                <h2>{job.title} at {job.company}</h2>
                <p>{job.description}</p>
            </div></div>
    );
}

export default JobDetails;

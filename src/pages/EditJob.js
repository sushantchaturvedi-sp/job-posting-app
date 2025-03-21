import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobs, saveJobs, getJobById } from "../utils/storage";

function EditJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = getJobById(id);

    const [title, setTitle] = useState(job?.title || "");
    const [company, setCompany] = useState(job?.company || "");
    const [description, setDescription] = useState(job?.description || "");

    if (!job) return <h2>Job Not Found</h2>;

    function handleEditJob() {
        const updatedJobs = getJobs().map(j => j.id === id ? { ...j, title, company, description } : j);
        saveJobs(updatedJobs);
        navigate("/");
    }

    return (
        <div>
            <h2>Edit Job</h2>
            <input placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <button onClick={handleEditJob}>Save Changes</button>
        </div>
    );
}

export default EditJob;

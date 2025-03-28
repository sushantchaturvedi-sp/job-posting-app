import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateJob() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const navigate = useNavigate();

    const handleCreateJob = (e) => {
        e.preventDefault();
        const newJob = { id: Date.now(), title, description, company };
        const jobs = JSON.parse(sessionStorage.getItem("jobs")) || [];
        jobs.push(newJob);
        sessionStorage.setItem("jobs", JSON.stringify(jobs));
        navigate("/");
    };

    return (
        <div>
            <h2>Create Job</h2>
            <form onSubmit={handleCreateJob}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateJob;

import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getJobs, saveJobs } from "../utils/storage";
import Navbar from "../components/Navbar";
import { getJobById } from "../utils/storage";

function CreateJob() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const job = getJobById(id);
    const location = useLocation();

    useEffect(() => {
        if (job) {
            setTitle(job.title);
            setCompany(job.company);
            setDescription(job.description);
        }
        else {
            setTitle("");
            setCompany("");
            setDescription("");
        }
    }, [location.pathname]);

    console.log(id);

    function handleEditJob() {
        const jobs = getJobs();
        const updatedJobs = [];

        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === id) {
                updatedJobs.push({
                    id: jobs[i].id,
                    title: title,
                    company: company,
                    description: description
                });
            } else {
                updatedJobs.push(jobs[i]);
            }
        }

        saveJobs(updatedJobs);
        navigate("/");
    }

    function handleCreateJob() {
        const jobs = getJobs();
        const newJob = {
            id: Date.now().toString(),
            title: title,
            company: company,
            description: description
        };

        jobs.push(newJob);
        saveJobs(jobs);
        navigate("/");
    }

    return (
        <div> <Navbar />
            <div>
                <h2>{job ? title : "Create Job"}</h2>
                <div><label for="title">Job Title: </label> <input name="title" placeholder="Job Title" value={title} id="title" onChange={e => setTitle(e.target.value)} /></div>
                <div><label for="company">Company Name: </label><input name="company" placeholder="Company" value={company} id="company" onChange={e => setCompany(e.target.value)} /></div>
                <div><label for="description">Description: </label><textarea name="description" placeholder="Description" value={description} id="description" onChange={e => setDescription(e.target.value)} /></div>
                <div><input type="button" onClick={job ? handleEditJob : handleCreateJob} value={job ? "Edit" : "Submit"}></input></div>
            </div></div>
    );
}

export default CreateJob;

export function getJobs() {
    return JSON.parse(localStorage.getItem("jobs")) || [];
}

export function getJobById(id) {
    return getJobs().find(job => job.id === id);
}

export function saveJobs(jobs) {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

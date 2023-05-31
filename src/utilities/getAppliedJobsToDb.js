import { getAppliedJobs } from "./func_db";

const getAppliedJobsToDb = async()=>{
        const res = await fetch('/featuredJobs.json');
        const data = await res.json();
        const jobs_applied = [];
        const appliedJobs = getAppliedJobs();
        for(const id of appliedJobs){
            const foundJobs = data.job_circulars.find(job => job.id === id);
            jobs_applied.push(foundJobs)
        }
    return jobs_applied
}
export default getAppliedJobsToDb;

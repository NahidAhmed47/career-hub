const loadJobsData = async()=>{
    const res = await fetch('/featuredJobs.json');
    const data = await res.json();
    return data;
}
export default loadJobsData;
const setJobIdToDb = (id)=>{
    let appliedJobs = [];
    const exists = localStorage.getItem('applied_jobs');
    if(exists){
        const jobList = JSON.parse(exists);
        appliedJobs = [...jobList, id];
    }
    else{
        appliedJobs.push(id)
    }
    localStorage.setItem('applied_jobs', JSON.stringify(appliedJobs));
}
// get applied jobs 
const getAppliedJobs = ()=>{
    let appliedJobs = [];
    const exists = localStorage.getItem('applied_jobs');
    if(exists){
        const jobList = JSON.parse(exists);
        appliedJobs = [...jobList];
    }
    return appliedJobs;
}

export {setJobIdToDb, getAppliedJobs};
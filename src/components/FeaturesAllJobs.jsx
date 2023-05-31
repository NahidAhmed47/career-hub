import React, { useContext, useEffect, useState } from 'react';
import DisplayJob from './DisplayJob';
import { JobsDataContext } from '../layouts/Main';
import HeaderTitle from './HeaderTitle';

const FeaturesAllJobs = ({children}) => {
    const [jobsData, setJobsData] = useState([]);
    const data = useContext(JobsDataContext);
    const copyData = [...data]
    useEffect(()=>{
        setJobsData(copyData.slice(0,4));
    },[])
    // show all data btn 
    const showAllJobs = ()=>{
        setJobsData(data);
    }
    const showLessJobs = ()=>{
        setJobsData(copyData.slice(0,4));
    }
    return (
        <div>
            {
                children === 'home' ? '' : <HeaderTitle>Start Apply</HeaderTitle>
            }
            <div className='my-10 md:my-24 max-body' id='featured_jobs'>
                <h1 className='head-title'>Featured Jobs</h1>
                <p className='subtitle text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 gap-3 md:gap-5 mt-2 md:mt-10'>
                    {
                        jobsData?.map(job => <DisplayJob key={job.id} job={job}></DisplayJob>)
                    }
                </div>
                <div className='w-full flex justify-center items-center'>
                     {
                        jobsData.length <= 4 ? <button className='show-all-data-btn' onClick={showAllJobs}>See all jobs &#8594;</button> : <button className='show-all-data-btn' onClick={showLessJobs}>See less &#8593;</button>
                     }
                </div>
            </div>
        </div>
    );
};

export default FeaturesAllJobs;
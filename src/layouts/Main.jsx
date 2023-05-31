import React, { createContext } from 'react';
import Header from '../components/Header';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';
import { getAppliedJobs, setJobIdToDb } from '../utilities/func_db';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

export const JobsDataContext = createContext();
export const GetAppliedJobContext = createContext();

const Main = () => {
    const {job_circulars} = useLoaderData();
    const applied = getAppliedJobs();
    // handle apply job btn
    const handleApplyJobBtn = id =>{
        const applied_job = getAppliedJobs();
        const exists = applied_job.find(jobId => jobId === id)
        if(exists){
            toast.error('Already applied!');
        }
        else{
            toast.success('Apply Successful!')
            setJobIdToDb(id)
        }
    }
    return (
        <JobsDataContext.Provider value={job_circulars}>
            <GetAppliedJobContext.Provider value={{handleApplyJobBtn, applied}}>
                <div className='max-w-[1400px] mx-auto'>
                    <Toaster></Toaster>
                    <Header></Header>
                    <div>
                        <Outlet></Outlet>
                     </div>
                     <Footer></Footer>
                     <ScrollRestoration></ScrollRestoration>
                </div>
            </GetAppliedJobContext.Provider>
        </JobsDataContext.Provider>
    );
};

export default Main;
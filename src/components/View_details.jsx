import React, { useContext } from 'react';
import HeaderTitle from './HeaderTitle';
import { useParams } from 'react-router-dom';
import { GetAppliedJobContext, JobsDataContext } from '../layouts/Main';
import { BriefcaseIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline'

const View_details = () => {
    const {jobId} = useParams();
    const allJobsData = useContext(JobsDataContext);
    const {handleApplyJobBtn, applied} = useContext(GetAppliedJobContext)
    const findJob = allJobsData.find(job => job.id === parseInt(jobId));
    const {job_title, contract_info, description, educational_requirements, experience, responsibility, salary, id} = findJob;
    let btnText = 'Apply now';
        const applyCheck = applied?.find(id => id === parseInt(jobId));
        if(applyCheck){
            btnText = 'Already applied';
     }
    return (
        <div>
            <HeaderTitle>View Details</HeaderTitle>
            <div className='max-body my-10 md:my-24 flex flex-col md:flex-row items-center justify-around'>
                <div className='md:w-[60%]'>
                    <p className='subtitle'><span className='mini-title'>Job Description:</span> {description}</p>
                    <p className='subtitle'><span className='mini-title'>Job Responsibility:</span> {responsibility}</p>
                    <p className='subtitle'><span className='mini-title'>Educational Requirements:</span> <br />{educational_requirements}</p>
                    <p className='subtitle'><span className='mini-title'>Experience:</span> <br /> {experience}</p>
                </div>
                <div className='h-full bg-[#E3DFFF] p-3 md:p-5  rounded-md w-fit'>
                        <h1 className='text-base md:text-lg font-bold font-serif text-gray-800'>Job Details</h1>
                        <hr className='w-full border-1 border-gray-600 md:mb-3'/>
                        <div className='flex items-center  text-gray-600 mt-2'>
                            <CurrencyDollarIcon className='mini-icon primary-color mr-1'></CurrencyDollarIcon><p className='subtitle-details'><span className='mini-title'>Salary:</span> {salary}(per month)</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <BriefcaseIcon className='mini-icon primary-color mr-1'></BriefcaseIcon><p className='subtitle-details'><span className='mini-title'>Job title:</span>   {job_title}</p>
                        </div>
                        <h1 className='text-base md:text-lg font-bold font-serif text-gray-800 md:mt-4'>Contract Information</h1>
                        <hr className='w-full border-1 border-gray-600 md:mb-3'/>
                        <div className='flex items-center mt-2'>
                            <PhoneIcon className='mini-icon primary-color mr-1'></PhoneIcon><p className='subtitle-details'><span className='mini-title'>Phone:</span>   {contract_info.phone}</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <EnvelopeIcon className='mini-icon primary-color mr-1'></EnvelopeIcon><p className='subtitle-details'><span className='mini-title'>Email:</span>   {contract_info.email}</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <MapPinIcon className='mini-icon primary-color mr-1'></MapPinIcon><p className='subtitle-details'><span className='mini-title'>Address:</span>   {contract_info.address}</p>
                        </div>
                         <div className='w-fit mx-auto mt-5'>
                            <button className='primary-btn' onClick={()=>handleApplyJobBtn(id)}>{btnText}</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default View_details;
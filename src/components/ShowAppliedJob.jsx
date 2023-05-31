import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const ShowAppliedJob = ({job}) => {
    const {company_logo, company_name, job_duration, job_title,job_type, location, salary, id} = job;
    return (
        <div className='p-5 flex flex-col md:flex-row w-full justify-between items-center max-w-[1000px] mx-auto border mt-5 md:mt-10 rounded-md shadow-md'>
            <div className='flex gap-4 md:gap-10 items-center'>
            <img className='max-w-[128px] max-h-[128px] rounded-md' src={company_logo} alt="" />
            <div>
                <h1 className='title'>{job_title}</h1>
                <p className='text-base font-semibold text-gray-600 my-2'>{company_name}</p>
                <div className='flex flex-col md:flex-row gap-2 md:gap-5 '>
                    <button className='btn-outfield'>{job_type}</button>
                    <button className='btn-outfield'>{job_duration}</button>
                </div>
                <div className='my-2 flex flex-col md:flex-row gap-3 justify-between text-gray-600'>
                    <div className='flex justify-start items-center gap-2 text-base font-medium'>
                        <MapPinIcon className='mini-icon'></MapPinIcon>
                        <p>{location}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2 text-base font-medium'>
                        <CurrencyDollarIcon className='mini-icon'></CurrencyDollarIcon>
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            </div>
                <Link to={`/job/${id}`}><button className='primary-btn my-2'>View Details</button></Link>
        </div>
    );
};

export default ShowAppliedJob;
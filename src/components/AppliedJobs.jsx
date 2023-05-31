import React, { useEffect, useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { useLoaderData } from "react-router-dom";
import ShowAppliedJob from "./ShowAppliedJob";

const AppliedJobs = () => {
  const [showAppliedJobs, setShowAppliedJobs] = useState([]);
  const appliedJobs = useLoaderData();
  useEffect(() => {
    setShowAppliedJobs(appliedJobs);
  }, []);
  let filterJobs = []
  // get value from selected option
  const getValue = (value) =>{
    if (value === "remote") {
      const remoteJob = appliedJobs?.filter(job => job.job_type === 'remote');
      filterJobs = [...remoteJob]
    } else if (value === "onsite") {
        const remoteJob = appliedJobs?.filter(job => job.job_type === 'onsite');
        filterJobs = [...remoteJob]
    }
    else{
        filterJobs = [...appliedJobs]
    }
    setShowAppliedJobs(filterJobs)
  };
  return (
    <div>
      <HeaderTitle>Applied Jobs</HeaderTitle>
      <div className="max-w-[1000px] mx-auto">
        {
            appliedJobs.length > 0 ? 
            <div className="float-right my-5 md:my-8">
          <select
            onChange={(e) => getValue(e.target.value)}
            name="filterJob"
            id="jobs"
            className="bg-[#F9F8FF] mr-8 md:mr-0 px-3 py-2 rounded-md text-base font-semibold outline-none"
            defaultValue=""
          >
            <option key="1" defaultValue>
              Filter by
            </option>
            <option key="2" value="remote">
              Remote
            </option>
            <option key="3" value="onsite">
              Onsite
            </option>
            <option key="4" value="all">
              All
            </option>
          </select>
        </div> : ''
        }
         {
            showAppliedJobs.length > 0 ? '' : <p className="text-center font-semibold text-sm my-20"><i>No Applied Jobs found</i></p>
          }
        <div className="mb-10">
          {showAppliedJobs?.map((job) => (
            <ShowAppliedJob key={job.id} job={job}></ShowAppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

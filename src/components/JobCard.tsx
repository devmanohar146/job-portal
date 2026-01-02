import type { Job } from "../types/jobs";
import { memo } from 'react';

interface JobCardProps {
  job:Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3>{job.title}</h3>
      <p className="font-semibold text-lg">{job.company}</p>

      <p className="text-gray-600">{job.location}</p>
      <p className="text-green-600 font-medium mt-2">
        ${job.salary.toLocaleString()}
      </p>
    </div>
  );
};

export default memo(JobCard)
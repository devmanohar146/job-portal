import { useEffect, useState } from "react";
import type { Job } from "../types/jobs";
import JobCard from "../components/JobCard";

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
          const formattedJobs:Job[] = data.products.map((item:any)=>({
            id:item.id,
            title:item.title,
            company:item.company,
            location:"Remote",
            salary:item.price*1000
          }))
    setJobs(formattedJobs)
      } catch (err) {
       setError("Failed to fetch the jobs")
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if(loading) return <p className="p-6">Loading jobs...</p>
  if(error) return <p className="p-6 text-red-500">{error}</p>

  return(
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            jobs.map((job)=>(
                <JobCard key={job.id} job ={job} />
            ))
        }

    </div>
  )
};


export default Jobs;
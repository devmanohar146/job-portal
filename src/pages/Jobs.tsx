import JobCard from "../components/JobCard";
import { fetchJobs } from "../redux/slices/jobsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState, useEffect, useMemo } from "react";

const Jobs: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [location,setLocation] = useState<string>("All")
  const dispatch = useAppDispatch();
  const { jobs, loading, error } = useAppSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        {
        const matchSearch =job.title?.toLowerCase().includes(search.toLowerCase()) ||
        job.company?.toLowerCase().includes(search.toLowerCase())
        const matchedLocation = location === "All" || job.location  === location
        return matchedLocation && matchSearch
    
    }
    );
  }, [jobs, search,location]);

  if (loading) return <p className="p-6">Loading jobs...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="search jobs..."
        className="mb-4 w-full p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className="mb-4 p-2 border rounded" value={location} onChange={e=>setLocation(e.target.value)}>
        <option value="All">All Location </option>
        <option value="Remote">Remote</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="col-span-full text-gray-500">
            No jobs found matching "{search}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Jobs;

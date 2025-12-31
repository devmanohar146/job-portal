import { useEffect } from "react"
import JobCard from "../components/JobCard"
import { fetchJobs } from "../redux/slices/jobsSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Jobs: React.FC = () => {
  const dispatch = useAppDispatch()
  const { jobs, loading, error } = useAppSelector(state => state.jobs)

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  if (loading) return <p className="p-6">Loading jobs...</p>
  if (error) return <p className="p-6 text-red-500">{error}</p>

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default Jobs

import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        </li>
        <li>
          <Link to="/jobs" className="hover:text-blue-400">Jobs</Link>
        </li>
        <li>
          <Link to="/Candidates" className="hover:text-blue-400">
            Candidates
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

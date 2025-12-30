import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Jobs from '../src/pages/Jobs.tsx'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/jobs' element={<Jobs />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

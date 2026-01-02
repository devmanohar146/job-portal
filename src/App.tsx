import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Jobs from '../src/pages/Jobs.tsx'
import Login from "../src/pages/Login.tsx"
import ProtectedRoute from "../src/components/ProtectedRoute.tsx"
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route  path='/login' element={<Login/>}/>
          <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/jobs' element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

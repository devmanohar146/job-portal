import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Jobs from '../src/pages/Jobs.tsx'
import Login from "../src/pages/Login.tsx"
import ProtectedRoute from "../src/components/ProtectedRoute.tsx"
import ProtectedLayout from './components/ProtectedLayout.tsx';
const App: React.FC = () => {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route  path='/login' element={<Login/>}/>
          <Route element={<ProtectedRoute><ProtectedLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path='jobs' element={<Jobs />} />
          </Route>
        </Routes>

    </BrowserRouter>
  );
};

export default App;

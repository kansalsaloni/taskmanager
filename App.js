import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Analytic from './Pages/Analytic';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import PublicPage from './Pages/PublicPage';
import Setting from './Pages/Setting';
import './Style//App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

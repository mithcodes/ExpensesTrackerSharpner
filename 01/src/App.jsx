import './App.css';
import { getAuth } from 'firebase/auth';
import { app } from "./Firebase";
import Login from './pages/Login';
import Signup from "./pages/signup";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const auth=getAuth(app)

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Signup auth={auth} />} />
        <Route path="/signin" element={<Login auth={auth}/>} />
      </Routes>
    </Router>
  );
}

export default App;

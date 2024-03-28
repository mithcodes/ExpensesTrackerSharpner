import './App.css';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged ,signOut} from 'firebase/auth';
import { app } from "./Firebase";
import Login from './pages/Login';
import Signup from "./pages/signup";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('hello ,user');
        setUser(user);
      } else {
        console.log("you are logged ");
        setUser(null);
      }
    });

    // Cleanup the listener
  
  }, []);

  if(user!==null){
    return(
      <div className="app">
<h4>welcome to expenses tracker </h4>
  <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
    
            <Route path="/" element={<Signup auth={auth} />} />
            <Route path="/signin" element={<Login auth={auth} />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;

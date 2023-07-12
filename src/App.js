import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import PuffLoader from "react-spinners/PuffLoader";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1500)
  }, [])

  return (
    <Router>
      {
        loading ?
          <PuffLoader className='puffload'
            size={150}
            color='#17a2b8'
            loading={loading}
          />
          

          :
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/creatuser" element={<SignUp />} />
            </Routes>
          </div>
      }

    </Router>
  );
}

export default App;

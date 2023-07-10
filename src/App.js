import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Cart from './screens/Cart';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div > 
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path = "/login" element={<Login/>}/>
          <Route exact path = "/creatuser" element={<SignUp/>}/>
          <Route
            exact
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
       
    </Router>
  );
}

export default App;

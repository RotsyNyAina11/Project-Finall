//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Login from './components/LoginForm'
import Signup from "./components/SignupForm"; */
/*import ProductParent from './components/products/ProductParent';
import Header from './components/Header'; */
import { Provider } from "react-redux";
import { store } from "./store/store";
import  Dashboard  from './components/Dashboard';
import {BrowserRouter as Router} from 'react-router-dom';
import Login  from './components/LoginForm';
import Signup from './components/SignupForm';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Provider store={store}>
     <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/main/*" element={<Dashboard/>}/>
        </Routes>
      </Router>
    {/* /*  
     <Router>
     <Dashboard />
     </Router>
    */ }
      
    </Provider>
  )
}

export default App

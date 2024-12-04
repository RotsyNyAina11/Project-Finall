//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Login from './components/LoginForm'
import Signup from "./components/SignupForm"; */
/*import ProductParent from './components/products/ProductParent';
import Header from './components/Header'; */
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store/store";
import {BrowserRouter as Router} from 'react-router-dom';
//import  Dashboard  from './components/Dashboard';
import ClientMainPage from './components/clients/ClientMainPage';



function App() {

  return (
    <Provider store={store}>
     {/* /*  <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="#" element={<Login/>}/>
        </Routes>
        <ProductParent />
        <Dashboard />
        </Router> */ }
     <Router>
        <ClientMainPage/>
     </Router>
      
    </Provider>
  )
}

export default App

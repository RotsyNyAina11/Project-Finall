import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/LoginForm'
import Signup from "./components/SignupForm";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="#" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App

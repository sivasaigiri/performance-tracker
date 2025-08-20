import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Tasks from './components/Tasks';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
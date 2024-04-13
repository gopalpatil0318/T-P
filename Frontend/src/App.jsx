import { useState } from 'react';
import './App.css';
import { DarkThemeToggle } from "flowbite-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './Componentes/Header/Headers';
import Sidebar from './Componentes/sidebar/Sidebars';
import Login from './Componentes/login/Login';
import Register from './Componentes/register/Register';
import Profile_completion from './Componentes/profileCompletion/Profile_completion';
import Profile from './Componentes/profile/Profile';
import Test from './Componentes/SignUp/Test';
import Students_Profile from './Componentes/studentsProfile/Students_Profile';
// import Footer_page from './Componentes/footer_page/Footer_page';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-slate-200 dark:bg-slate-900 h-full'>
      <Router>
       
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/profile_completion" element={<Profile_completion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/students_profile" element={<Students_Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

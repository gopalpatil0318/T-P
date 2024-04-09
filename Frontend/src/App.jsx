import { useState } from 'react'
import './App.css'
import { DarkThemeToggle } from "flowbite-react";

import Headers from './Componentes/Header/Headers'
import Sidebar from './Componentes/sidebar/Sidebars'
import Login from './Componentes/login/Login'
import Register from './Componentes/register/Register'
import Profile_completion from './Componentes/profileCompletion/Profile_completion'
import Profile from './Componentes/profile/Profile';
import Test from './Componentes/SignUp/Test';
import Students_Profile from './Componentes/studentsProfile/Students_Profile';
// import Footer_page from './Componentes/footer_page/Footer_page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-200 dark:bg-slate-900 h-full'>
     <Profile_completion/>
     {/* <Login/> */}
     {/* <Register/> */}
     {/* <Profile/> */}
     {/* <Test/> */}
     {/* <Students_Profile/> */}
     {/* <Footer_page/> */}
    </div>

  )
}

export default App

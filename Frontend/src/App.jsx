import { useState } from 'react'
import './App.css'
import { DarkThemeToggle } from "flowbite-react";

import Headers from './Componentes/Header/Headers'
import Sidebar from './Componentes/sidebar/Sidebars'
import Login from './Componentes/login/Login'
import Register from './Componentes/register/Register'
import Profile_completion from './Componentes/profileCompletion/Profile_completion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-200 dark:bg-slate-900 h-full'>
    <Profile_completion/>
    </div>

  )
}

export default App

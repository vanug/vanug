import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Component/NavBar'
import GlobalState from './context'

function App() {
 

  return (
   <>
     <GlobalState>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
       <NavBar/>
       <Outlet/>
      </div>
      </GlobalState>
   </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import GlobalState from "./context/Context";

function App() {
 
  return (
    <>
    <GlobalState>
  <div className="bg-black">
     <Navbar/>
     <Outlet/>
  </div>
  </GlobalState>
  </>
  
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {
 
  return (
  <div className="bg-black">
     <Navbar/>
     <Outlet/>
  </div>
 
  
  )
}

export default App

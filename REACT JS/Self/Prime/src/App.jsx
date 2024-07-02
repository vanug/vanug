import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import GlobalState from "./context/Context";

function App() {
 
  return (
    <>
    <GlobalState>
  <div >
     <Navbar/>
     <Outlet/>
  </div>
  </GlobalState>
  </>
  
  )
}

export default App

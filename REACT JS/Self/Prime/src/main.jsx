import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home .jsx'
import MyStuff from './pages/MyStuff.jsx'
import Navbar from './components/Navbar.jsx'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router =createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
      
      <Route path='' element={<Home/>}/>
      <Route path='/MyStuff' element={<MyStuff/>}/>
      
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)


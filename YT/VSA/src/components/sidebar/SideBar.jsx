import React from 'react'
import SideBarItem from './SideBarItem'

function SideBar() {
    return (
     <div className="w-60 h-screen bg-gray-900 text-white flex flex-col pt-5">
      <SidebarItem  text="Home" />
      
    </div>
    )
}

export default SideBar

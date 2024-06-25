import React from 'react'

function SideBarItem(text) {
    return (
        <div className="flex items-center p-3 cursor-pointer hover:bg-gray-700 transition duration-200">
        {/* <div className="text-xl mr-4">{icon}</div> */}
        <div className="text-lg">{text}</div>
      </div> 
    )
}

export default SideBarItem

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFire, faFolder, faTv } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  // return (
  //   <div className="flex">
  //     {/* Sidebar */}
  //     <div className="fixed bg-[#0f0f0f] w-60 h-full top-0 left-0 p-6 text-white">
  //       <div className="flex items-center mb-4">
  //         <FontAwesomeIcon icon={faBars} className="mr-3 h-5 w-7 " />
  //         <img className="h-5 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/768px-YouTube_full-color_icon_%282017%29.svg.png?20240107144800" alt="YouTube Logo" />
  //         <span className="text-xl font-semibold ">YouTube</span>
  //       </div>
  //       <ul className="">
  //         <li className="mb-2">
  //           <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
  //             <FontAwesomeIcon icon={faHome} className="mr-4" />
  //             Home
  //           </a>
  //         </li>
  //         <li className="mb-2">
  //           <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
  //             <FontAwesomeIcon icon={faFire} className="mr-4" />
  //             Trending
  //           </a>
  //         </li>
  //         <li className="mb-2">
  //           <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
  //             <FontAwesomeIcon icon={faTv} className="mr-4" />
  //             Subscriptions
  //           </a>
  //         </li>
  //         <li className="mb-2">
  //           <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
  //             <FontAwesomeIcon icon={faFolder} className="mr-4" />
  //             Library
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
      
  //     {/* Main Content */}
  //     <div className="ml-60 p-4 flex-1">
  //       <h1 className="text-3xl font-bold mb-4">Main Content</h1>
  //       <p>Your main content goes here...</p>
  //     </div>
  //   </div>
  // );


  return (
    <div className=" w-full max-w-md mx-auto rounded-lg bg-gray-800 text-orange-500">
      <h1 className='text-white my-3 text-center'>Password Generator</h1>
      <div className="flex rounded-lg overflow-hidden mb-4">
        <input
          type="text"
         
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        
        />
        <button
         
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"

            
            className='cursor-pointer'
           
          />
          <label>Length:</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
           
            id="numberInput"
           
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            
            id="characterInput"
            
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );



}

export default App;

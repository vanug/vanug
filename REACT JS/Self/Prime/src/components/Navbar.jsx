import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="bg-black fixed z-50 top-2 left-20 right-16 rounded-md flex justify-between items-center h-10 mx-16 text-gray-300 px-4">
             <div>
                    <img 
                        src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" 
                        alt="Logo" 
                        className="h-5 w-auto" 
                    />
                </div>
            <div className="flex gap-3">
                <NavLink to="/" className="px-2">Home</NavLink>
                <div className="px-2">Store</div>
                <div className="px-2">Live TV</div>
                <div className="px-2">Categories</div>
                <NavLink to="/wishlist" className="px-2">Wishlist</NavLink>
            </div>
            <div className="flex gap-4">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-300 cursor-pointer" />
                    <FontAwesomeIcon icon={faUser} className="text-gray-300 cursor-pointer" />
                </div>
        </nav>
    );
}

export default Navbar;

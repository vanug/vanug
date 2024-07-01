import React, { useState } from 'react';

function Banner({ img, title, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative h-40 w-72 rounded-md bg-cover bg-center m-2 overflow-hidden transform transition-transform duration-300 hover:scale-110" 
            style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-50 z-10">
                <div className="text-center text-white p-2">
                    <h1 className="text-sm font-bold mb-2">{title}</h1>
                </div>
            </div>
            {isHovered && (
                <div className="fixed flex items-center justify-center z-50">
                    <div className="w-72 bg-white shadow-lg rounded-md p-2">
                        <p>Included with Prime</p>
                        <button className="bg-blue-500 px-2 py-1 text-xs rounded hover:bg-blue-700 transition">Watch Now</button>
                        <p>Amazon Original</p>
                        <p>New Episode</p>
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span>< img className="w-12 h-12" src="/syringe.png" alt="" /></span>
                <span className="font-bold text-2xl tracking-tight p-2">MedBuddy</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-lg font-semibold lg:flex-grow text-right">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/recommendation" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Medicine Recommendation
                    </Link>
                    <Link to="/alternate-medicine" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Alternate Medicine
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
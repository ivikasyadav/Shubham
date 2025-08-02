import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav className="flex justify-between items-center py-4 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-gray-800 fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg">
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 text-sm sm:text-base">
                <Link to="/" className="hover:text-gray-400 transition-colors duration-200">HOME</Link>
                <Link to="/promotion" className="hover:text-gray-400 transition-colors duration-200"> PROMOTION</Link>
                <Link to="/products" className="hover:text-gray-400 transition-colors duration-200">PRODUCT PORTFOLIO</Link>
                <Link to="/cycling" className="hover:text-gray-400 transition-colors duration-200">CYCLING</Link>
                <Link to="/contact" className="hover:text-gray-400 transition-colors duration-200">CONTACT</Link>
              </div>
            </nav>
  )
}

export default Navbar
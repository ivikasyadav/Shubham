import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  bg-black bg-opacity-90 backdrop-blur-lg border-b border-gray-800">
      <div className="flex justify-between items-center py-4 px-6 sm:px-10 md:px-16 lg:px-20">

        <div className="text-white text-lg font-bold">Shubham</div>

        <div className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 text-sm sm:text-base">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-200 text-white">HOME</Link>
          <Link to="/promotion" className="hover:text-gray-400 transition-colors duration-200 text-white">PROMOTION</Link>
          <Link to="/products" className="hover:text-gray-400 transition-colors duration-200 text-white">PRODUCT PORTFOLIO</Link>
          <Link to="/cycling" className="hover:text-gray-400 transition-colors duration-200 text-white">CYCLING</Link>
          <Link to="/contact" className="hover:text-gray-400 transition-colors duration-200 text-white">CONTACT</Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4  space-y-4 bg-black bg-opacity-95 text-white">
          <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>HOME</Link>
          <Link to="/promotion" className="hover:text-gray-400" onClick={toggleMenu}>PROMOTION</Link>
          <Link to="/products" className="hover:text-gray-400" onClick={toggleMenu}>PRODUCT PORTFOLIO</Link>
          <Link to="/cycling" className="hover:text-gray-400" onClick={toggleMenu}>CYCLING</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={toggleMenu}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

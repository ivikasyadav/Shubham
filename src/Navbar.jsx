import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-lg border-b border-gray-800">
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

      <div className={`fixed top-0 left-0 h-screen w-64 bg-black   text-white p-6 transform transition-transform duration-300 z-40 md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>HOME</Link>
          <Link to="/promotion" className="hover:text-gray-400" onClick={toggleMenu}>PROMOTION</Link>
          <Link to="/products" className="hover:text-gray-400" onClick={toggleMenu}>PRODUCT PORTFOLIO</Link>
          <Link to="/cycling" className="hover:text-gray-400" onClick={toggleMenu}>CYCLING</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={toggleMenu}>CONTACT</Link>
        </nav>
      </div>

  
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black  z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Home from './Home';
import Products from './Products';
import Promotion from './Promotion';
import Contact from './Contact';
import Cycling from './Cycling';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter px-1 py-4 sm:p md:p-12 lg:p-16 flex justify-center items-center">
      <div className="w-full max-w-7xl bg-black rounded-lg shadow-lg overflow-hidden min-h-screen">
        <main className="flex flex-col items-center sm:px-16 lg:px-20">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/promotion' element={<Promotion />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cycling' element={<Cycling />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
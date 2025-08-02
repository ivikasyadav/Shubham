import React from 'react';
import Medal from './assets/Medal.png'
import Winder from './assets/5_Single_Winder.png'
import personal from './assets/personal.png'
import Lit_O_pot from './assets/Lit_O_pot.jpg'
import group1 from './assets/cycling/group1.jpg'
import group2 from './assets/cycling/group2.jpg'
import group3 from './assets/cycling/group3.jpg'
import ss from './assets/cycling/ss.jpg'
import solocycle from './assets/cycling/solocycle.jpg'
import solo from './assets/cycling/solo.jpg'
import charger from './assets/branding/charger.jpg'
import video from './assets/branding/video.mp4'
import hanger from './assets/branding/hanger.png'
import Home from './Home';
import Products from './Products';
import Promotion from './Promotion';
import Contact from './Contact';
import Cycling from './Cycling';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';


const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter p-4 sm:p-8 md:p-12 lg:p-16 flex justify-center items-center">
      <div className="max-w-7xl w-full bg-black rounded-lg shadow-lg overflow-hidden">




        <main className="flex flex-col items-center  px-6 sm:px-10 md:px-16 lg:px-20 h-screen ">



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
import React from 'react';
import personal from './assets/personal.png'


const Home = () => {
  return (
   <section id="home" className="flex flex-col md:flex-row items-center w-full ">
   
               <div className="flex-1 text-center md:text-left  md:pr-12">
                 <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                   Hello, I Am <br />
                   Shubham Yadav
                 </h1>
                 <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 relative">
                   I'm Shubham. Photographer and designer. Welcome to my personal blog. Here, I share my creative journey and the stories behind my work. Join me as I explore the world through my lens and design.
                   <span className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 text-4xl transform -rotate-45 hidden md:block">
   
                   </span>
                 </p>
               </div>
   
   
               <div className="flex-1 flex justify-center md:justify-end">
                 <img
                   src={personal}
                   alt="Shubham Yadav"
                   className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto shadow-md"
                   onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/CCCCCC/000000?text=Image+Not+Found"; }}
                 />
               </div>
             </section>
  )
}

export default Home
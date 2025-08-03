import React from 'react';
import personal from './assets/personal.png';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row mt-15 lg:mt-0 items-center justify-between px-4 sm:px-6 lg:px-16 py-10 md:py-20 w-full"
    >
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Hello, I Am <br />
          Shubham Yadav
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          I'm Shubham. Photographer and designer. Welcome to my personal blog.
          Here, I share my creative journey and the stories behind my work.
          Join me as I explore the world through my lens and design.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={personal}
          alt="Shubham Yadav"
          className="rounded-lg object-cover w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto shadow-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://placehold.co/400x500/CCCCCC/000000?text=Image+Not+Found';
          }}
        />
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import img1 from './assets/promotion/pro1.jpg';
import img2 from './assets/promotion/pro2.jpg';
import img3 from './assets/promotion/pro3.jpg';
import img4 from './assets/promotion/pro4.jpg';
import img5 from './assets/promotion/pro5.png';
import video1 from './assets/promotion/vidpro1.mp4';
import video2 from './assets/promotion/vidpro2.mp4';
import video3 from './assets/promotion/vidpro3.mp4';

const Promotion = () => {
  return (
    <section id="promotion" className="w-full py-12">
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative w-full max-w-4xl mx-auto">
          <video
            controls
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-contain rounded-lg shadow-lg bg-black transition-transform hover:scale-[1.02]"
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="relative">
            <video
              controls
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg shadow-lg bg-black transition-transform hover:scale-[1.02]"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative">
            <video
              controls
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-contain rounded-lg shadow-lg bg-black transition-transform hover:scale-[1.02]"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <img
              src={img2}
              alt="Promotional Content 2"
              className="w-full object-contain rounded-lg"
            />
          </div>

         
          <div  className='flex flex-col justify-between'>
            <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <img
                src={img4}
                alt="Promotional Content 4"
                className="w-full object-contain rounded-lg"
              />
            </div>

            <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
              <img
                src={img1}
                alt="Promotional Content 1"
                className="w-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <img
              src={img3}
              alt="Promotional Content 3"
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <img
              src={img5}
              alt="Promotional Content 5"
              className="w-full object-contain rounded-lg"
            />
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Promotion;
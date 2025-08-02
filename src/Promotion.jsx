import React from 'react'
import charger from './assets/branding/charger.jpg'
import video from './assets/branding/video.mp4'
import hanger from './assets/branding/hanger.png'


const Promotion = () => {
  return (
   <section id="promotion" className="w-full ">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Promotion </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-0">
                <div className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <img
                      src={charger}
                      alt="Promotional"
                      className="w-full h-[500px] object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-white text-center">Lorem, ipsum.</h3>
                    <p className="text-sm text-gray-400 mt-1 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, veritatis!
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-col gap-10">
                  <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[250px] object-cover rounded-md"
                    >
                      <source src={video} />
  
                    </video>
                    <h3 className="text-xl font-semibold mt-4 text-white">Lorem, ipsum.</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                    <img
                      src={hanger}
                      alt="Event Poster"
                      className="w-full h-[200px] object-cover rounded-md"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-white">Lorem, ipsum.
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
  
            </section>
  )
}

export default Promotion
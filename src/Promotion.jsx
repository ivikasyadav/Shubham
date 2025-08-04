import React from 'react'
// import charger from './assets/branding/charger.jpg'
// import video from './assets/branding/video.mp4'
// import video1 from './assets/promotion/provideo.mp4'
// import hanger from './assets/branding/hanger.png'

// import img1 from './assets/promotion/pro1.JPG'
import img2 from './assets/promotion/pro2.jpg'
import img3 from './assets/promotion/pro3.jpg'
// import img4 from './assets/promotion/pro4.jpg'
import img5 from './assets/promotion/pro5.jpg'
import img6 from './assets/promotion/pro6.jpg'
import img7 from './assets/promotion/pro7.jpg'
import img8 from './assets/promotion/pro8.png'

import video1 from './assets/promotion/vidpro1.mp4'
import video2 from './assets/promotion/vidpro2.mp4'
import video3 from './assets/promotion/vidpro3.mp4'


const Promotion = () => {
  return (
    <section id="promotion" className="w-full ">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Promotion </h2>

      <div className="m-5">
        <video
          controls
          className="w-full h-[500px] object-contain rounded-md bg-black"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-0">
        <div className=" rounded-lg shadow-lg flex items-center justify-center">
          <div className="w-full">
            <img
              src={img8}
              alt="Promotional"
              className="w-full max-h-[500px] object-contain rounded-md"
            />
          </div>
        </div>


        <div className="flex flex-col gap-10">
          <div className="bg-gray-900 py-4 rounded-lg shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[250px] object-cover rounded-md"
            >
              <source src={video2} />

            </video>
            {/* <h3 className="text-xl font-semibold mt-4 text-white">Lorem, ipsum.</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet.
                    </p> */}
          </div>
          <div className="bg-gray-900 py-4 rounded-lg shadow-lg">
            <img
              src={img2}
              alt="Event Poster"
              className="w-full h-[200px] object-cover rounded-md"
            />
            {/* <h3 className="text-xl font-semibold mt-4 text-white">Lorem, ipsum.
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet.
                    </p> */}
          </div>
        </div>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mt-10 sm:px-0">

        <div className="flex flex-col gap-10">
          <div className="py-4 rounded-lg shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[250px] object-contain rounded-md"
            >
              <source src={video1} />

            </video>
            {/* <h3 className="text-xl font-semibold mt-4 text-white">Lorem, ipsum.</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet.
                    </p> */}
          </div>
          <div className="bg-gray-900 py-4 rounded-lg shadow-lg">
            <img
              src={img3}
              alt="Event Poster"
              className="w-full h-[200px] object-cover rounded-md"
            />
            {/* <h3 className="text-xl font-semibold mt-4 text-white">Lorem, ipsum.
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Lorem ipsum dolor sit amet.
                    </p> */}
          </div>
        </div>
        <div className=" rounded-lg shadow-lg flex items-center justify-center">
          <div className="w-full">
            <img
              src={img5}
              alt="Promotional"
              className="w-full max-h-[500px] object-contain rounded-md"
            />
          </div>
        </div>





      </div>

    </section>
  )
}

export default Promotion
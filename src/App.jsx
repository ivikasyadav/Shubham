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

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter p-4 sm:p-8 md:p-12 lg:p-16 flex justify-center items-center">
      <div className="max-w-7xl w-full bg-black rounded-lg shadow-lg overflow-hidden">

        <nav className="flex justify-between items-center py-4 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-gray-800 fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 text-sm sm:text-base">
            <a href="#home" className="hover:text-gray-400 transition-colors duration-200">HOME</a>
            <a href="#promotion" className="hover:text-gray-400 transition-colors duration-200"> PROMOTION</a>
            <a href="#products" className="hover:text-gray-400 transition-colors duration-200">PRODUCT PORTFOLIO</a>
            <a href="#cycling" className="hover:text-gray-400 transition-colors duration-200">CYCLING</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors duration-200">CONTACT</a>
          </div>
        </nav>


        <main className="flex flex-col items-center py-8 px-6 sm:px-10 md:px-16 lg:px-20 mt-20">

          <section id="home" className="flex flex-col md:flex-row items-center w-full mb-16">

            <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:pr-12">
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


          {/* PROMOTION SECTION */}
          <section id="promotion" className="w-full mt-20">
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


          <section id="products" className="w-full mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">My Products</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

              <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={Winder} />
                <h3 className="text-xl font-semibold mb-2">Creative Design Kit</h3>
                <p className="text-gray-400 text-sm">A comprehensive kit for graphic designers, including templates, brushes, and fonts.</p>

              </div>


              <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={Medal} />
                <h3 className="text-xl font-semibold mb-2">Photography Masterclass</h3>
                <p className="text-gray-400 text-sm">An online course covering advanced photography techniques and post-processing.</p>

              </div>


              <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={Lit_O_pot} />
                <h3 className="text-xl font-semibold mb-2">Digital Art Brushes Pack</h3>
                <p className="text-gray-400 text-sm">A collection of custom brushes for digital painting in various software.</p>

              </div>
            </div>


            {/* <div className="w-full max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Product Video</h3>
              <div className="relative pt-[56.25%] bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              </div>
              <p className="text-gray-400 text-center mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius neque suscipit aliquid officia, quos consequuntur expedita exercitationem, dolorem vitae obcaecati deserunt delectus in?
              </p>
            </div> */}

            <section id="cycling" className="w-full mt-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Cycling </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-0">
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={group1}
                    alt="Group Ride 1"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={group2}
                    alt="Group Ride 2"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300  flex flex-col items-center">
                  <img
                    src={solo}
                    alt="Cycling Portrait"
                    className="w-full max-w-xs h-[500px] object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
                  <img
                    src={ss}
                    alt="Cycling Portrait"
                    className="w-full max-w-xs h-[500px] object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique?</p>
                  </div>
                </div>
              </div>
            </section>
          </section>


          <section id="contact" className="w-full mt-20 flex flex-col md:flex-row gap-10 bg-gray-900 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">

            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-gray-400 text-base mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae ex quod, eaque laborum dolorem optio quaerat excepturi neque est omnis, inventore magnam rerum illum!
              </p>
              <div className="text-gray-300 space-y-2 text-sm">
                <p><strong>Email:</strong> abc@gmail.com</p>
                <p><strong>Phone:</strong> +91 9321635898</p>
                <p><strong>Location:</strong> Mumbai, India</p>
              </div>
            </div>


            <div className="flex-1">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default App;
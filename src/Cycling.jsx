import React from 'react'
import group1 from './assets/cycling/group1.jpg'
import group2 from './assets/cycling/group2.jpg'
import ss from './assets/cycling/ss.jpg'
import solo from './assets/cycling/solo.jpg'

const Cycling = () => {
  return (
      <section id="cycling" className="w-full ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Cycling </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-0">
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
                  <img
                      src={group1}
                      alt="Group Ride 1"
                      className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                      {/* <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                      <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                  </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
                  <img
                      src={group2}
                      alt="Group Ride 2"
                      className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                      {/* <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                      <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                  </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg flex  hover:shadow-2xl transition-shadow duration-300  flex-col items-center">
                  <img
                      src={solo}
                      alt="Cycling Portrait"
                      className="w-full max-w-xs h-[500px] object-cover"
                  />
                  <div className="p-4 text-center">
                      {/* <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                      <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                  </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
                  <img
                      src={ss}
                      alt="Cycling Portrait"
                      className="w-full max-w-xs h-[500px] object-cover"
                  />
                  <div className="p-4 text-center">
                      {/* <h3 className="text-xl font-semibold mb-1">Lorem, ipsum.</h3>
                      <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique?</p> */}
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Cycling
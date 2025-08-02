import React from 'react'
import Medal from './assets/Medal.png'
import Winder from './assets/5_Single_Winder.png'
import Lit_O_pot from './assets/Lit_O_pot.jpg'

const Products = () => {
  return (
      <section id="products" className="w-full ">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius neque suscipit aliquid officia, quos       consequuntur         expedita exercitationem, dolorem vitae obcaecati deserunt delectus in?
              </p>
            </div> */}

         
      </section>
  )
}

export default Products
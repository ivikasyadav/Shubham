import React from 'react'


const Contact = () => {
  return (
      <section id="contact" className="w-full mt-10  flex flex-col md:flex-row gap-10 bg-gray-900 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">

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

  )
}

export default Contact
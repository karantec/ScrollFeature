import React from "react";

const Cont = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* Contact Us Section */}
            <div>
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/l/8/o/cultured-na-1-plkl100ssjkog-tonolika-jewellery-original-imah34pfksxprew5.jpeg?q=90&crop=false"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                  />
                  <h1 className="font-manrope text-white text-3xl sm:text-4xl font-bold leading-10 absolute top-6 sm:top-11 left-6 sm:left-11">
                    Contact us
                  </h1>
                  <div className="absolute bottom-0 w-full px-4 sm:px-5 lg:px-11 py-6">
                    <div className="bg-white rounded-lg p-6">
                      {/* Contact Information */}
                      <a href="#" className="flex items-center mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.3092 18.3098C22.0157..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h5 className="text-black text-base sm:text-lg font-normal leading-6 ml-4 sm:ml-5">
                          470-601-1911
                        </h5>
                      </a>
                      <a href="#" className="flex items-center mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.81501 8.75L10.1985..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h5 className="text-black text-base sm:text-lg font-normal leading-6 ml-4 sm:ml-5">
                          Pagedone1234@gmail.com
                        </h5>
                      </a>
                      <a href="#" className="flex items-center">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25 12.9169C25 17.716..."
                            stroke="#4F46E5"
                            strokeWidth="2"
                          />
                        </svg>
                        <h5 className="text-black text-base sm:text-lg font-normal leading-6 ml-4 sm:ml-5">
                          654 Sycamore Avenue, Meadowville, WA 76543
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-5 sm:p-8 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-yellow-500 font-bold font-manrope text-2xl sm:text-4xl leading-10 mb-8 sm:mb-11">
                Send Us A Message
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Phone"
              />
              <div className="mb-6 sm:mb-10">
                <h4 className="text-gray-500 text-sm sm:text-lg font-normal leading-7 mb-4">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-8 sm:mr-11">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="radio-group"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio-group-1"
                      className="flex items-center cursor-pointer text-gray-500 text-sm sm:text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4"></span>
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="radio-group"
                      className="hidden"
                    />
                    <label
                      htmlFor="radio-group-2"
                      className="flex items-center cursor-pointer text-gray-500 text-sm sm:text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4"></span>
                      Phone
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-sm sm:text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Message"
              />
              <button className="w-full h-12 text-white text-sm sm:text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-yellow-500 bg-yellow-600 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cont;

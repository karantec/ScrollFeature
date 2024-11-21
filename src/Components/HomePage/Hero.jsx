import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center"
     style={{ backgroundImage: "url('home.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-black">
          UNIQUE AND AUTHENTIC VINTAGE DESIGNER JEWELLERY
        </h1>
        <p className="mt-4 text-lg text-dark font-bold">
          NOW AVAILABLE AT THE HIRAPANNA
        </p>
        <button className="mt-6 px-6 py-3 bg-brown-700 font-bold text-white rounded-full hover:bg-brown-800 transition">
          DISCOVER THE COLLECTION
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

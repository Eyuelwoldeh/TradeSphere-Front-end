import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      {/* Navigation Bar */}
      <header className="absolute top-0 left-0 w-full bg-opacity-50 backdrop-blur-md p-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Trade Platform</a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Seamless Global Trade at Your Fingertips</h1>
        <p className="text-lg md:text-xl opacity-90 mb-6">
          Connect, trade, and manage all your transactions in one place. Get started today!
        </p>
        <a 
          href="/login"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
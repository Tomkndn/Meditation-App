import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Meditation App</h1>
          <p className="text-sm">Find your inner peace with our guided meditations.</p>
        </div>
        <div className="flex mb-4">
          <a href="#" className="mr-4 hover:text-gray-500 transition duration-300">
            Home
          </a>
          <a href="#" className="mr-4 hover:text-gray-500 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-gray-500 transition duration-300">
            Contact
          </a>
        </div>
        <div className="flex items-center">
          <p className="text-sm">&copy; 2024 Meditation App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

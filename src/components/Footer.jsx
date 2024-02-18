// import React from 'react'
// import flogo from '../assets/llogo.png'

// const Footer = () => {
//     return (
//         <>
//             <section className='footer w-full h-[865px] bg-no-repeat bg-center bg-cover  overflow-hidden'>
//                 <div className="container-fluid flex flex-col items-center justify-between">
//                     <div className="footer-log pt-[10%]">
//                         <img src={flogo} alt="" />                       
//                     </div>
//                     <div className="line-dashed w-0 "></div>
//                         <p className='text-black font-medium'>Make every day happier</p>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Footer;



// Footer.js

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

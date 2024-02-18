import React,{useState} from 'react'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="px-2 lg:px-16 py-4 bg-white z-10 sticky top-0 text-xl">
        <div className="container-fluid">
          <div className="nav-bar flex items-center justify-between">
            <div className="brand-logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="page-menu hidden lg:block">
              <ul className="flex gap-4">
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary]">
                  <a href="/#Meditation">Meditation</a>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary] ">
                  <a href="/#Sleep">Sleep</a>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary] ">
                  <a href="/#Stress">Stress</a>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary] ">
                  <a href="/#Mindfullness">Mindfullness</a>
                </li>
              </ul>
            </div>
            <div className="primary-btn hidden lg:block">
              <Link
                to={`/`}
                className="py-3 px-12 rounded-full hover:opacity-80 text-md font-medium"
              >
                Try for free
              </Link>
            </div>
            <div
              onClick={toggleMenu}
              className="menu-btn cursor-pointer menu block lg:hidden focus:outline-none z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    className="text-white"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </div>

            <div
              className={`lg:flex fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm ${
                isMenuOpen ? "visible" : "invisible"
              }`}
              onClick={toggleMenu}
            >
              <div className="absolute lg:flex text-white text-3xl font-bold right-0 top-14">
                <ul className="mx-4 my-2  flex flex-col lg:flex-row lg:gap-4 ">
                  <li className=" hover:text-[--bg-primary]">
                    <a href="/#Meditation">Meditation</a>
                  </li>
                  <li className="hover:text-[--bg-primary] ">
                    <a href="/#Sleep">Sleep</a>
                  </li>
                  <li className="hover:text-[--bg-primary] ">
                    <a href="/#Stress">Stress</a>
                  </li>
                  <li className="hover:text-[--bg-primary] ">
                    <a href="/#Mindfullness">Mindfulness</a>
                  </li>
                  <li className="hover:text-[--bg-primary] ">
                    <a href="/">Try for free</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
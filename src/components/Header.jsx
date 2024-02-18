import React from 'react'

// impor logo from assets 
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="px-2 lg:px-16 py-4 bg-white z-10 sticky top-0 text-xl">
        <div className="container-fluid">
          <div className="nav-bar flex items-center justify-between">
            <div className="brand-logo">
              <Link to={`/`}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="page-menu hidden lg:block">
              <ul className="flex gap-4">
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary]">
                  <a href="/#Meditation" rel="noopener noreferrer">
                    Meditation
                  </a>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary] ">
                  <a href="/#Sleep" rel="noopener noreferrer">
                    Sleep
                  </a>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary] ">
                  <a href="/#Stress" rel="noopener noreferrer">
                    Stress
                  </a>
                </li>
                <li className="mx-4 text-md text-blck font-medium hover:text-[--bg-primary] ">
                  <a href="/#Mindfullness" rel="noopener noreferrer">
                    Mindfullness
                  </a>
                </li>
              </ul>
            </div>
            <div className="primary-btn hidden lg:block">
              <a
                href=""
                className="py-3 px-12 rounded-full hover:opacity-80 text-md font-medium"
              >
                Try for free
              </a>
            </div>
            <div className="menu block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
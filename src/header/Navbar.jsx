import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-2 md:px-2 py-2.5">
            <Link to={"/"} className="flex items-center">
                <img src="/logoicon.png" className="mr-1 h-16 sm:h-12" alt="Logo"/>
                <span className="self-center md:text-xl text-xl font-semibold whitespace-nowrap dark:text-white text-blue-700">{props.heading}</span>
            </Link>
        </div>
    </nav>
          </div>
          {/* Hamburger Icon (visible only on smaller screens) */}
          <div className="md:hidden mr-3">
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </button>
          </div>
          {/* End Hamburger Icon */}
        </div>
        
        {/* Menu Items (visible on larger screens) */}
        <ul
          className={`${
            showMenu ? 'block' : 'hidden'
          } md:flex flex-row mt-0 md:space-x-8 text-sm font-medium bg-gray-50 dark:bg-gray-700 py-3 px-4 mx-auto max-w-screen-xl md:px-6"`}
        >
          <li>
            <Link
              to={"/"}
              className="text-gray-900 dark:text-white hover:underline"
            >
              Our Initiatives
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-900 dark:text-white hover:underline"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Contact us
            </a>
          </li>
        </ul>
        {/* End Menu Items */}
      </div>
    </nav>
  );
}

export default Navbar;

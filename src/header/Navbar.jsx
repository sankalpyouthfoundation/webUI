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
                <img src="/logoicon.png" className="mr-1 h-12" alt="Logo"/>
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
              {!showMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}

            </button>
          </div>
          {/* End Hamburger Icon */}
        </div>
        
        {/* Menu Items (visible on larger screens) */}
        <ul
          className={`${
            showMenu ? 'block' : 'hidden'
          } md:flex flex-row mt-0 md:space-x-8 text-lg md:text-sm font-medium text-center bg-gray-50 dark:bg-gray-700 py-3 px-4 mx-auto"`}
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

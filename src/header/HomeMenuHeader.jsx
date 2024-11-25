import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../login/ProfileCard';
import { useSelector } from 'react-redux';

function HomeMenuHeader(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="top-0 sticky bg-white border-gray-200 dark:bg-gray-900 z-50">
        {/* Hamburger Icon (visible only on smaller screens) */}
        <div className="md:hidden fixed top-0 right-0 p-2 mr-3 mt-3 z-50">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {!showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        {/* End Hamburger Icon */}
      </div>
      {/* Menu Items (visible on larger screens) */}
      <NavMenu showMenu={showMenu} toggleMenu={toggleMenu}/>
    </nav>
  );
}

function NavMenu(props) {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn); 
  const handleLinkClick = () => {
    if (props.showMenu) {
      props.toggleMenu(); // Close the menu
    }
  };

  return (
    <ul className={`${props.showMenu ? 'block' : 'hidden'} md:flex flex-row mt-0 md:space-x-8 text-lg md:text-sm font-medium text-center bg-gray-50 dark:bg-gray-50 py-3 px-4 mx-auto`}>
      <li>
        <a href="/" className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Home</a>
      </li>
      <li>
        <a href='#initiative' className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Our Initiatives</a>
      </li>
      {/* <li>
        <a href="/" className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Gallery</a>
      </li>
      <li>
        <a href="#team" className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Our Team</a>
      </li> */}
      <li>
        <a href="#about" className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>About us</a>
      </li>
      <li>
        <a href="#contact" className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Contact us</a>
      </li>
      <li>
        <a href="#donate" className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Donate us</a>
      </li>
      <li>
        <Link to={"/pahadgreenarmy"}  className="text-gray-900 dark:text-black hover:underline" onClick={handleLinkClick}>Pahad Green Army</Link>
      </li>
      <li>
      {isLoggedIn ? 
      (
        <ProfileCard/>
      ) : <Link to={"/login"} className="text-blue-700 dark:text-black hover:underlin md:hidden">Login</Link>}
      </li>
    </ul>
  );
}

export default HomeMenuHeader;

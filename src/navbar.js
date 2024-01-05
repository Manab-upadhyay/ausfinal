import React, { useState } from 'react';
import logo from "./HINDI-LOGO.png"
import search from "./magnifying-glass.png"
import home from "./home.png"
import people from "./multiple-users-silhouette.png"


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`} onMouseEnter={toggleDropdown} >
      <a
        href="#"
        className="nav-link dropdown-toggle text-blue-900 hover:text-blue-600 font-serif mr-4"
        id="navbarDropdown"
        role="button"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        Allumini Info
      </a>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
        <li className=" hover:to-blue-900"><a className="dropdown-item" href="#" >Action</a>
        
        </li>
        <li className="bg-blue-"><a className="dropdown-item" href="#" >Another action</a></li>

        <li className="bg-blue-"><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
  );
};



function Navbar() {
  return (
    <nav className="bg-white p-4 sticky top-0 z-50">
      <img className="w-36" src={logo} alt="Assam University Logo" />
      <div className="container mx-auto flex justify-center items-center">
        <div className="relative">
          <input
            type="search"
            placeholder="Assam University"
            className="border border-gray-300 rounded pl-10 pr-3 py-2"
          />
          <img
            src={search}
            alt="Search"
            className="absolute top-0 left-1 mt-2 ml-3 pointer-events-none"
            style={{ width: '24px', height: '24px' }}
          />
        </div>
        <img src={home} className="w-6 ml-20 mb-3" />
        <ul className="flex space-x-10">
          <li>
            <a href="#" className="text-blue-900 hover:text-blue-600 font-serif mr-4">Home</a>
          </li>
          <li>
            <a href="#" className="text-blue-900 hover:text-blue-600 font-serif">About</a>
          </li>
          <li>
            <a href="#" className="text-blue-900 hover:text-blue-600 font-serif">Campus</a>
          </li>
          <img src={people} className="w-6" />
          <Dropdown /> {/* Use the Dropdown component */}
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

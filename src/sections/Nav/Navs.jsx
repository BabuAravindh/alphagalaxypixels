import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from 'react-scroll';  // Import Link from react-scroll

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="bg-black/30 backdrop-blur-lg fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 p-4 rounded-full z-50">
    <Link
      to="home"
      smooth={true}
      duration={500}
      offset={-80}  // Adjust this to fit your navbar height
      onClick={() => setActiveNav('#')}
      className={`p-3 rounded-full flex items-center text-xl ${
        activeNav === '#' ? 'bg-white text-black' : 'bg-transparent text-gray-300 hover:bg-black/30'
      }`}
    >
      <AiOutlineHome />
    </Link>
    <Link
      to="about"
      smooth={true}
      duration={500}
      offset={-80}  // Adjust this to fit your navbar height
      onClick={() => setActiveNav('#about')}
      className={`p-3 rounded-full flex items-center text-xl ${
        activeNav === '#about' ? 'bg-white text-black' : 'bg-transparent text-gray-300 hover:bg-black/30'
      }`}
    >
      <AiOutlineUser />
    </Link>
    <Link
      to="services"
      smooth={true}
      duration={500}
      offset={-80}  // Adjust this to fit your navbar height
      onClick={() => setActiveNav('#services')}
      className={`p-3 rounded-full flex items-center text-xl ${
        activeNav === '#services' ? 'bg-white text-black' : 'bg-transparent text-gray-300 hover:bg-black/30'
      }`}
    >
      <BiBook />
    </Link>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-80}  // Adjust this to fit your navbar height
      onClick={() => setActiveNav('#contact')}
      className={`p-3 rounded-full flex items-center text-xl ${
        activeNav === '#contact' ? 'bg-white text-black' : 'bg-transparent text-gray-300 hover:bg-black/30'
      }`}
    >
      <BiMessageSquareDetail />
    </Link>
  </nav>
  );
};

export default Nav;

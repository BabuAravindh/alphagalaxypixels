import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo */}
      <img src="/logo.png" className="h-8 w-8" alt="logo" />

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {["Home", "Services", "Testimonials", "Contact"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500} 
            offset={-80} 
            className="text-white lg:text-lg sm:text-sm hover:text-teal-400 transition duration-300 cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

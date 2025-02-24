import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen">
      <div className="relative z-20">
        <Nav />
      </div>

      {/* Video Background */}
      {isSmallScreen ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/small_screen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#3e7071] to-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-11/12 z-20">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Studio</h1>
        <p className="my-4 text-sm md:text-base">
          - "Photography is the story I fail to put into words." <br />
          - Destin Sparks
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-2 md:px-8 md:py-3 border border-white text-white bg-teal-700 hover:bg-teal-500 rounded-md transition duration-500 text-sm md:text-base"
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default Header;

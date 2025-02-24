import React from 'react'
import logo from '/logo.png'
const About = () => {
  return (
    <section id="about" className="justify-center flex flex-col items-center min-h-screen  ">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-11/12 md:w-4/5 gap-20 max-w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="About Me"
            className="rounded-3xl shadow-lg w-full md:w-[400px] lg:w-[800px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col  md:text-left">
          <h5 className="text-lg text-black ">Get to know</h5>
          <h2 className="text-2xl font-bold my-4">About Me</h2>
          <p className="text-black leading-relaxed mb-6">
            Welcome to Alpha Galaxy Pixels!

            Alpha Galaxy Pixels was born from the dreams of Naveen, a small-town college boy who started his journey in 2022 with nothing but a camera and a passion for capturing the beauty of life's most important moments. What started as a personal dream has evolved into a thriving brand dedicated to bringing your wedding memories to life in a way that’s as unique as you are.

            Naveen’s approach to wedding photography is rooted in creativity, precision, and the belief that every couple’s love story deserves to be told through stunning, timeless images. Whether it's the first look, the joyful laughter, or the heartfelt vows, Alpha Galaxy Pixels focuses on capturing those candid, emotional moments that tell the true story of your day.

            With every shot, Naveen brings an artistic touch and an eye for detail, ensuring that your wedding photos reflect the beauty and joy of your celebration. Alpha Galaxy Pixels is more than just a photography service; it's a passion-driven brand focused on creating unforgettable memories for couples who value artistry and authenticity. Let us turn your special day into a visual masterpiece!
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-md bg-[#2b5253] text-white hover:transition w-36"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
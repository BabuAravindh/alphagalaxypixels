import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 scroll-mt-20 bg-white text-center">
      <h5 className="text-lg text-gray-700">What Our Clients Say</h5>
      <h2 className="text-2xl font-bold my-4">Testimonials</h2>

      <div className="max-w-lg mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DYTNa5YD0KE?si=vjKl2Q7VCOBS8uoA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Testimonials;
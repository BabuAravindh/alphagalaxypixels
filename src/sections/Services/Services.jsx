import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { servicesData } from './assets'; 
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="py-10 scroll-mt-20 bg-primary">
      <h5 className="text-center text-lg text-gray-700">Our Services</h5>
      <h2 className="text-center text-2xl font-bold my-4">Photography Services</h2>

      {/* Service List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card bg-primary p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 overflow-hidden rounded-lg relative ">
              <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="service-slider"
              >
                {service.images.map((image, id) => (
                  <SwiperSlide key={id}>
                    <img
                      src={image}
                      alt={`${service.title} Slide ${id + 1}`}
                      className="w-full object-cover "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-white mb-4">{service.description}</p>
            <a
              href="#contact"
              className="text-white hover:underline hover:text-opacity-10 transition duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

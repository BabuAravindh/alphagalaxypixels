import React, { useState } from 'react';

  const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    eventDate: '',
    venueName: '',
    venueLocation: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the form data into a message
    const message = `Hello, I would like to get in touch with you. Here are my details:
     Name: ${formData.name}
     Phone Number: ${formData.phoneNumber}
     Event Date: ${formData.eventDate}
     Venue Name: ${formData.venueName}
     Venue Location: ${formData.venueLocation}
     Description: ${formData.description}`;

    // WhatsApp number to send the message to (include country code, e.g., +91 for India)
    const whatsappNumber = "916382593062";

    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-10 bg-primary">
      <h5 className="text-center text-lg text-gray-700">Contact Us</h5>
      <h2 className="text-center text-2xl font-bold my-4">Get In Touch</h2>

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-black font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-black bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-black font-medium">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="eventDate" className="block text-black font-medium">Event Date</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="venueName" className="block text-black font-medium">Venue Name</label>
            <input
              type="text"
              id="venueName"
              name="venueName"
              value={formData.venueName}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="venueLocation" className="block text-black font-medium">Venue Location</label>
            <input
              type="text"
              id="venueLocation"
              name="venueLocation"
              value={formData.venueLocation}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-black font-medium">Description of the Event (100 words)</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-white"
              rows="5"
              maxLength={500} // Limiting the character count for a 100-word description
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#2b5253] text-white rounded-md hover:bg-primary transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
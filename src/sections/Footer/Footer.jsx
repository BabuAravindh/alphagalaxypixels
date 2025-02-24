import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <img src="/logo.png" className="h-12" alt="logo" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Alpha Galaxy Pixels</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
            Capturing timeless moments with creativity and precision, turning visions into reality.
            </p>
            <p className="mt-4 text-sm text-gray-800">
            Delivering stunning photography and videography that tell your unique story.
            </p>
          </div>
        </div>

        {/* Contacts */}
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a href="tel:850-123-5021" className="text-deep-purple-accent-400 hover:text-deep-purple-800">
              6382593062
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alphagalaxypixels@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-purple-accent-400 hover:text-deep-purple-800"
            >

              alphagalaxypixels@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://goo.gl/maps/ESUrNytcHCgKChUL6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="https://www.instagram.com/alphagalaxy.pixels?igsh=MW90ZnZlc2Zpb3pkNg==" className="text-gray-500 hover:text-pink-600 ">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@alphagalaxypixels" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M19.6 7.3c-.2-1.2-.8-2.2-1.8-2.7C16.5 4 12 4 12 4s-4.5 0-5.8.6c-1 .5-1.7 1.5-1.8 2.7-.2 1.4-.2 4.3-.2 4.3s0 2.9.2 4.3c.2 1.2.8 2.2 1.8 2.7 1.3.6 5.8.6 5.8.6s4.5 0 5.8-.6c1-.5 1.7-1.5 1.8-2.7.2-1.4.2-4.3.2-4.3s0-2.9-.2-4.3zM10 15V9l5 3z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 7.9 6.5 9.3-.1-.8-.2-2.1 0-3 .2-1 1.5-6.6 1.5-6.6s-.4-.8-.4-2c0-1.8 1-3.1 2.2-3.1 1 0 1.5.8 1.5 1.7 0 1 0 1.9-.7 3.1-.6 1.1-.4 2.2.3 3.3.7 1.1 2 1.1 3.1 0 1.2-1.1 1.7-3.2 1.7-5 0-3.5-2.5-6-6.2-6-4.3 0-6.9 3.3-6.9 6.9 0 1.4.5 2.8 1.1 3.6.2.2.2.4.2.7-.1.2-.2.7-.3 1-.1.3-.3.4-.5.3C4.8 17 4 14.8 4 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-1.1 0-2.2-.2-3.2-.6-.1-.1-.3-.1-.4 0s-.1.2 0 .3c1.1 1.1 2.6 1.8 4.1 1.8 5 0 9-4 9-9s-4-9-9-9z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1XEs1fEGmP/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.8 3.4 8.8 7.8 9.7v-6.9h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.4c-1.1 0-1.5.7-1.5 1.5V12h2.6l-.4 2.8h-2.2v6.9C18.6 20.8 22 16.8 22 12z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
          Indulge in a feast of premium cuts, perfectly smoked and seasoned to perfection.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2025 alpha galaxy pixels. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="#faqs" className="text-sm text-gray-600 hover:text-deep-purple-accent-400">F.A.Q</a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 hover:text-deep-purple-accent-400" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Terms & Conditions</a>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg lg:w-1/2 md:w-3/4 sm:w-full">
            <h3 className="text-lg font-bold">Terms & Conditions</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6 space-y-2">
              <li>Client should take care of our travel and accommodations during the shoot session.</li>
              <li>Within six months following your event, please collect all of your high-resolution pictures and videos. After six months, we are not liable for any data loss.</li>
              <li>Once you’ve paid the advance, there is no way to get your money back for any reason.</li>
              <li>The album creation won’t start until you’ve provided the selected photographs.</li>
              <li>30 to 45 days after submitting the chosen images, you can expect the printed album.</li>
              <li>Soft copy will be provided within a week after full event payment is completed.</li>
              <li>Complimentary outdoor shoot expires in 90 days.</li>
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};


export default Footer;



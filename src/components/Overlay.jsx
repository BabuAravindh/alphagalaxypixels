import { useState } from "react";

const Overlay = () => {
  const [isVisible, setIsVisible] = useState(true); // Always visible on page load

  const closeOverlay = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-xl font-semibold">Welcome to Aplha Galaxy Pixels</h2>
        <p className="mt-2 text-gray-600">This is the place where you can capture memories</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:opactiy-90"
          onClick={closeOverlay}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Overlay;

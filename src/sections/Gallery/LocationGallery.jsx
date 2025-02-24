import React from "react";
import { useParams } from "react-router-dom";
import { GalleryPhoto } from "./assets"; // Ensure the path is correct

const LocationGallery = () => {
  const { name } = useParams(); // Get location name from URL
  const locationKey = Object.keys(GalleryPhoto).find(
    (key) => key.toLowerCase() === name.toLowerCase()
  );

  const images = locationKey ? GalleryPhoto[locationKey] : null; // Get images for location

  if (!images) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl text-red-500 font-bold">Gallery for {name} not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">{locationKey}</h2>
        
        {/* ✅ FIX: Remove extra map */}
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${locationKey} Gallery ${index + 1}`}
              loading="lazy"
              className="w-full break-inside-avoid rounded-lg transition-transform duration-300 hover:scale-105"
              onError={(e) => (e.target.src = "/fallback-image.jpg")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationGallery;

import React from "react";
import { Link } from "react-router-dom";
import KeralaImage from "../../assets/images/kerala/DSC00339 copy_11zon.jpg";
import MaduraiImage from "../../assets/images/madurai/0A0A3130 copy_11zon.jpg";
import ChennaiImage from "../../assets/images/chennai/DSC00316 copy_11zon.jpg";
import CoimbatoreImage from "../../assets/images/coimbator/ANE00143 copy_11zon.jpg";
const locations = [
  { id: 1, name: "Kerala", image: KeralaImage },
  { id: 2, name: "Madurai", image: MaduraiImage },
  { id: 3, name: "Chennai", image: ChennaiImage },
  { id: 3, name: "Coimbatore", image: CoimbatoreImage },
];

const LocationList = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-6 mt-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Explore Locations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {locations.map((loc) => (
          <Link
            key={loc.id}
            to={`/location/${loc.name}`}
            className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70">
              <span className="text-white text-2xl font-semibold drop-shadow-lg">
                {loc.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocationList;

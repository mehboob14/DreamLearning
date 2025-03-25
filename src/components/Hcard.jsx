import React from "react";

const Hcard = ({ title, image, units }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 w-64">
      <img src={image} alt={title} className="w-full h-36 object-cover rounded-lg" />
      <div className="mt-3">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <ul className="mt-2 text-gray-600 text-sm space-y-1">
          {units.map((unit, index) => (
            <li key={index} className="flex items-center">
              ✅ {unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hcard;

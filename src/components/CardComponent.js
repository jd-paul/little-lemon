// CardComponent.jsx
import React from 'react';

const CardComponent = ({ image, title, caption }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{caption}</p>
      </div>
    </div>
  );
};

export default CardComponent;

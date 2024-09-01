// SectionTwo.jsx
import React from 'react';
import CardComponent from './CardComponent';

// Sample data
const cardData = [
  {
    image: 'https://images.unsplash.com/photo-1572695064956-52bfdd19cfee?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Shrimp Pho',
    caption: 'Delicious!',
  },
  {
    image: 'https://images.unsplash.com/photo-1597345637412-9fd611e758f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beef Pho',
    caption: 'Briskety!',
  },
  {
    image: 'https://images.unsplash.com/photo-1577859623802-b5e3ca51f885?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Diet Pho',
    caption: 'Low calorie!',
  },
];

function SectionTwo() {
  return (
    <div className="bg-white py-6 px-3">
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <CardComponent
              image={card.image}
              title={card.title}
              caption={card.caption}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;

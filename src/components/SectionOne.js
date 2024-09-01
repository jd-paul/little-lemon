import React, { useState } from 'react';
import OrderingForm from './OrderingForm';

function SectionOne() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="h-screen min-h-[42rem] flex">
      {/* Container for columns on larger screens */}
      <div className="hidden md:flex flex-1">
        {/* Left Column */}
        <div className="relative w-1/3 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Left Column"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Middle Column */}
        <div className="w-1/3 bg-neutral-50 h-full min-w-[42rem] flex flex-col items-center justify-center px-6 py-3">
          <h1 className="text-[#006460] font-bold text-4xl font-poppins text-center pb-1">
            Little Lemon
          </h1>
          <p className="text-gray-700 font-hind text-center mb-6">
            Reserve a table now!
          </p>
          {/* Button for opening the ordering form */}
          <button
            onClick={handleOpenForm}
            className="bg-[#3a81ff] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#0055ed] transition-colors duration-300"
          >
            Reserve here
          </button>
        </div>

        {/* Right Column */}
        <div className="relative w-1/3 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Right Column"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* For smaller screens */}
      <div className="flex md:hidden w-full h-full bg-neutral-50">
        <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
          <h1 className="text-[#006460] font-bold text-4xl font-poppins text-center pb-1">
            Little Lemon
          </h1>
          <p className="text-gray-700 font-hind text-center mb-6">
            Reserve a table now!
          </p>
          {/* Button for opening the ordering form */}
          <button
            onClick={handleOpenForm}
            className="bg-[#3a81ff] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#0055ed] transition-colors duration-300"
          >
            Reserve here
          </button>
        </div>
      </div>

      {/* Show ordering form when button is clicked */}
      {showForm && <OrderingForm onClose={handleCloseForm} />}
    </div>
  );
}

export default SectionOne;

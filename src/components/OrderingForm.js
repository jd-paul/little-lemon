import React, { useState } from 'react';

const OrderingForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (!peopleCount || peopleCount < 1) newErrors.peopleCount = 'Number of people must be at least 1';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted with data:', { name, email, date, time, peopleCount });
      onClose(); // Close the form after submission if needed
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Order Your Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={`w-full border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="peopleCount" className="block text-sm font-medium text-gray-700 mb-1">
              Number of People
            </label>
            <input
              type="number"
              id="peopleCount"
              value={peopleCount}
              onChange={(e) => setPeopleCount(e.target.value)}
              className={`w-full border ${errors.peopleCount ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
              min="1"
            />
            {errors.peopleCount && <p className="text-red-500 text-sm">{errors.peopleCount}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#006460] text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[#004d40]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderingForm;

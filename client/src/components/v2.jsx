import React from 'react';

const NavigateButton = () => {
  const handleNavigate = () => {
    window.location.href = "http://localhost:5173"; // Replace with your desired URL
  };

  return (
    <button
      onClick={handleNavigate}
      className="border border-blue-500 text-blue-500 bg-transparent py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-200"
    >
      Districts
    </button>
  );
};

export default NavigateButton;
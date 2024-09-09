import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Video Dashboard</h1>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Profile</a>
      </div>
    </header>
  );
};

export default Header;

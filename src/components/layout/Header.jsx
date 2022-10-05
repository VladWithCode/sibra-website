import React from 'react';
import Navbar from './navigation/Navbar';

function Header() {
  return (
    <div className='relative flex items-center w-full h-14 border-b-2 border-gray-200 bg-white sticky'>
      <Navbar />
    </div>
  );
}

export default Header;

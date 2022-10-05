import React, { useState } from 'react';
import Link from 'next/link';
import Menu from './Menu';
import Navigation from './Navigation';

function Navbar({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='flex-1 flex items-center px-4 justify-between'>
      <Link href='/'>
        <a className='text-2xl font-bold pr-8'>Sibra</a>
      </Link>
      {!isMenuOpen ? <Navigation /> : ''}
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div
        className='space-y-1.5 w-6 md:ml-8 cursor-pointer'
        onClick={() => setIsMenuOpen(prev => !prev)}>
        <div className='h-0.5 w-full bg-emerald-400'></div>
        <div className='h-0.5 w-full bg-emerald-400'></div>
        <div className='h-0.5 w-4 bg-emerald-400'></div>
      </div>
    </nav>
  );
}

export default Navbar;

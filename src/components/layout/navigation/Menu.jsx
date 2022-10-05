import React from 'react';
import Navigation from './Navigation';

function Menu({ isOpen, setIsOpen }) {
  return (
    <div
      className={'flex flex-col absolute right-0 top-0 z-10 w-96 h-screen max-w-full py-2 px-4 text-white bg-slate-700 translate-x-full transition-transform duration-200'.concat(
        isOpen ? ' translate-x-0' : ''
      )}>
      <div className='flex justify-between'>
        <span className='text-2xl font-bold py-1'>Menu</span>
        <button className='my-auto' onClick={() => setIsOpen(false)}>
          <svg className='h-6 w-6 fill-current'>
            <use href='/svg/sprites.svg#times'></use>
          </svg>
        </button>
      </div>
      <Navigation mobile={true} />
    </div>
  );
}

export default Menu;

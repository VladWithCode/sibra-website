import React from 'react';
import NavLink from '../../globals/NavLink';

function Navigation({ mobile = false }) {
  let className = 'list-none flex-grow font-normal';

  if (mobile)
    className = className.concat(' flex md:hidden flex-col py-4 space-y-2 ');
  else className = className.concat(' hidden lg:flex flex-row space-x-8');

  return (
    <ul className={className}>
      <li className='text-lg'>
        <NavLink href='/propiedades/comprar'>Comprar</NavLink>
      </li>
      <li className='text-lg'>
        <NavLink href='/propiedades/rentar'>Rentar</NavLink>
      </li>
      <li className='text-lg'>
        <NavLink href='/precalificacion'>Precalificate!</NavLink>
      </li>

      <li className='text-lg'>Iniciar Sesion</li>
    </ul>
  );
}

export default Navigation;

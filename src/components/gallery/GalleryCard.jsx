import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { priceToString } from '../../utils/numberToString';

function GalleryCard({ home }) {
  if (!home) return <p className='text-sm font-bold'>Cargando...</p>;

  return (
    <Link href={'/' + home.contract + '/' + home.slug}>
      <a className='relative font-secondary flex-grow-0 shrink-0 basis-60 overflow-hidden text-gray-900'>
        <Image
          src={home.mainImg}
          alt={home.slug}
          className='rounded'
          width={240}
          height={160}
        />
        <p className='relative text-xl font-bold z-10'>
          ${priceToString(home.price)}
        </p>
        <ul className='flex justify-between space-x-4 py-1'>
          <li className='text-xs'>{home.rooms} recamaras</li>
          <li className='text-xs'>{home.baths} baños</li>
          <li className='text-xs'>
            {home.area}m<sup>2</sup>
          </li>
        </ul>
        <p className='text-lg wo'>{home.title}</p>
      </a>
    </Link>
  );
}

export default GalleryCard;

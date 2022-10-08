import React from 'react';
import GalleryCard from './GalleryCard';

function Gallery({ homes }) {
  return (
    <div className='gallery flex items-center space-x-4 h-96 py-4 overflow-x-scroll overflow-y-hidden'>
      {homes?.map(home => (
        <GalleryCard home={home} />
      ))}
    </div>
  );
}

export default Gallery;

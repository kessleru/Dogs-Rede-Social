import React from 'react';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className='nth-2:col-span-2 nth-2:row-span-2 max-sm:nth-2:col-auto max-sm:nth-2:row-auto grid rounded-md overflow-hidden cursor-pointer group'>
      <img src={photo.src} alt={photo.title} className='[grid-area:1/1]' />
      <span className='[grid-area:1/1] bg-neutral-950/20 text-white text-center items-center justify-center hidden group-hover:flex before:size-4 before:inline-block before:mr-1 before:view-icon'>
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;

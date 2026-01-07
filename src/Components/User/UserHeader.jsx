import React from 'react';
import UserHeaderNav from './UserHeaderNav';

const UserHeader = () => {
  return (
    <header>
      <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
        Titulo
      </h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;

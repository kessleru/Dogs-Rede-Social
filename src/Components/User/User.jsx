import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed.jsx/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route index element={<Feed />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estastisticas' element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;

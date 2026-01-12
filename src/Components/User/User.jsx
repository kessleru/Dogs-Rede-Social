import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <main className='container mainContainer'>
      <UserHeader />
      <Routes>
        <Route index element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
    </main>
  );
};

export default User;

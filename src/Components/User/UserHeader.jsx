import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';
import { useMemo } from 'react';

const UserHeader = () => {
  const location = useLocation();

  const title = useMemo(() => {
    switch (location.pathname) {
      case '/conta/postar':
        return 'Poste Sua Foto';
      case '/conta/estatisticas':
        return 'Estatisticas';
      default:
        return 'Minha Conta';
    }
  }, [location.pathname]);

  return (
    <header className='grid grid-cols-[1fr_auto] items-center mb-8 mt-4 relative'>
      <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
        {title}
      </h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;

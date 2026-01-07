import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className='flex gap-2 *:border'>
      <NavLink to='/conta'><MinhasFotos/>Minhas Fotos</NavLink>
      <NavLink to='/conta/estastisticas'><Estatisticas/>Estastísticas</NavLink>
      <NavLink to='/conta/postar'><AdicionarFoto/>Adicionar Foto</NavLink>
      <button onClick={userLogout} className='cursor-pointer'>
        <Sair/>Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;

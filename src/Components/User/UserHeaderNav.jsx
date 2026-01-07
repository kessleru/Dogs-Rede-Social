import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className='flex gap-2 *:border'>
      <NavLink to='/conta'>Minhas Fotos</NavLink>
      <NavLink to='/conta/estastisticas'>Estastísticas</NavLink>
      <NavLink to='/conta/postar'>Adicionar Foto</NavLink>
      <button onClick={userLogout} className='cursor-pointer'>
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;

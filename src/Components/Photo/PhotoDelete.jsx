import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className='bg-neutral-100 border border-neutral-200 text-neutral-700 text-sm font-medium py-1.5 px-3 rounded-md cursor-pointer transition duration-150 hover:border-neutral-400 hover:bg-neutral-100/80 focus:outline-none focus:border-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-wait active:scale-95'
      aria-label='Deletar foto'
    >
      {loading ? 'Deletando...' : 'Deletar'}
    </button>
  );
};

export default PhotoDelete;

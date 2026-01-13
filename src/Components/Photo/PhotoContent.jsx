import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div
      className={`m-auto rounded-md bg-white grid overflow-hidden animate-scaleUp ${single ? 'grid-cols-1 max-w-2xl' : 'h-144 grid-cols-[36rem_20rem] grid-rows-[auto_1fr_auto] max-lg:h-auto max-lg:max-h-[calc(100vh-4rem)] max-lg:overflow-y-auto max-lg:grid-cols-[minmax(20rem,40rem)]'}`}
    >
      <div
        className={`row-span-3 max-lg:row-start-1 max-lg:row-end-1 ${single ? 'overflow-hidden rounded-md' : ''}`}
      >
        <Image
          src={photo.src}
          alt={photo.title}
          className={single ? 'rounded-md' : ''}
        />
      </div>
      <div className={single ? 'pt-8' : 'px-8 pt-8'}>
        <div>
          <p className='text-neutral-500 mb-4 flex justify-between items-center'>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link
                to={`/perfil/${photo.author}`}
                className='hover:underline hover:underline-offset-2 hover:text-amber-600 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm'
              >
                @{photo.author}
              </Link>
            )}
            <span
              className='flex items-center before:size-4 before:view-icon-black before:inline-block before:mr-1'
              aria-label={`${photo.acessos} visualizações`}
            >
              {photo.acessos}
            </span>
          </p>
          <h1 className='text-neutral-800 relative title font-second after:block after:w-6 after:h-6 after:bg-amber-400 after:absolute after:bottom-1.25 after:-left-1.25 after:rounded-md after:-z-10'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className='flex text-neutral-800 text-xl font-bold mt-4 mb-8 *:mr-8 *:before:inline-block *:before:h-5 *:before:relative *:before:top-0.75 *:before:w-0.5 *:before:mt-1.25 *:before:mr-2 *:before:bg-neutral-800'>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhotoContent;

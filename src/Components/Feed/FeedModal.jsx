import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) setModalPhoto(null);
  }

  useEffect(() => {
    const { url, options } = PHOTO_GET({ id: photo.id });
    request(url, options);
  }, [photo, request]);

  return (
    <div onClick={handleOutsideClick} className='fixed w-screen h-screen bg-neutral-950/40 top-0 left-0 flex z-50 py-8 pl-16 pr-[calc(4rem+15px)] max-sm:pl-8 max-sm:pr-[calc(2rem+15px)]'>
      {error && <Error error={error} />}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal;

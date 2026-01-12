import Dogs from '../Assets/dogs.svg?react';

const Footer = () => {
  return (
    <footer className='h-40 bg-amber-400 text-center text-amber-900 flex flex-col items-center justify-center gap-4 px-4'>
      <Dogs
        className='**:fill-[#7b3306]'
        aria-hidden='true'
        focusable='false'
      />
      <p className='m-0'>
        Dogs © {new Date().getFullYear()} - Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;

const Error = ({ error }) => {
  if (!error) return null;

  return (
    <p className='relative inline-block text-red-500 text-base mt-2 whitespace-pre-line'>
      {error}
    </p>
  );
};

export default Error;

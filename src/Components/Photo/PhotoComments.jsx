import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({ id, comments: initialComments, single }) => {
  const [comments, setComments] = useState(() => {
    return initialComments || [];
  });
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`overflow-y-auto break-all *:mb-2 *:leading-[1.2] ${single ? '' : 'px-8'}`}
        aria-label='Comentários da foto'
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setComments={setComments} single={single} />
      )}
    </>
  );
};

export default PhotoComments;

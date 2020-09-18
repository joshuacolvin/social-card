import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';

const Comment = () => {
  const [comments, incrementComments] = useState(0);

  return (
    <React.Fragment>
      <FaRegComment onClick={() => incrementComments(comments + 1)} />
      {comments}
    </React.Fragment>
  );
};

export default Comment;

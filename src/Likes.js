import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Likes = () => {
  const [likes, incrementLikes] = useState(0);

  return (
    <React.Fragment>
      <FaRegHeart onClick={() => incrementLikes(likes + 1)} /> {likes}
    </React.Fragment>
  );
};

export default Likes;

import React, { useState } from 'react';
import { FaRetweet } from 'react-icons/fa';

const Share = () => {
  const [shares, incrementShares] = useState(0);

  return (
    <React.Fragment>
      <FaRetweet onClick={() => incrementShares(shares + 1)} /> {shares}
    </React.Fragment>
  );
};

export default Share;

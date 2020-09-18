import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import Comment from './Comment';
import Likes from './Likes';
import Share from './Share';

const Footer = () => {
  return (
    <div className="footer">
      <div className="comments item">
        <Comment />
      </div>
      <div className="shares item">
        <Share />
      </div>
      <div className="likes item">
        <Likes />
      </div>
      <div className="message item">
        <FaRegEnvelope />
      </div>
    </div>
  );
};

export default Footer;

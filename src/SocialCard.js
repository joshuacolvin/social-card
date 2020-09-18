import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Preview from './Preview';
import Avatar from './Avatar';

const SocialCard = () => {
  return (
    <div className="social-card">
      <Avatar />
      <div className="content">
        <Header />
        <Preview />
        <Footer />
      </div>
    </div>
  );
};

export default SocialCard;

import React from 'react';
import Faker from 'faker';

const Avatar = () => {
  return <img className="avatar" src={Faker.internet.avatar()} alt="avatar" />;
};

export default Avatar;

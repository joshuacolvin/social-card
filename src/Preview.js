import React from 'react';
import Faker from 'faker';

const Preview = () => {
  const image = Faker.random.image();

  return (
    <div className="card">
      <img className="card-img" src={image} alt="corgi" />
      <div className="card-content">
        <div className="title">Title</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="url">example.com</div>
      </div>
    </div>
  );
};

export default Preview;

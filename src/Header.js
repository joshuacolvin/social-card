import React from 'react';
import Faker from 'faker';

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <span className="displayname">{Faker.name.findName()}</span>
        <span className="username">@{Faker.internet.userName()}</span>
        <span className="date">
          {Faker.date.past().toLocaleString('default', {
            month: 'short',
            day: '2-digit',
          })}
        </span>
      </div>

      <div className="row">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default Header;

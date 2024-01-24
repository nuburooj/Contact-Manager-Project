import React from 'react';
import { Dmodetoggle } from './Dmodetoggle';

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
      <h2 className="contact-manager-heading">Contact Manager</h2>
        <Dmodetoggle /> 
      </div>
    </div>
  );
};

export default Header;

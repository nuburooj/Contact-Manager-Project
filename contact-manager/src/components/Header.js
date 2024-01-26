import React from 'react';
import { Link } from 'react-router-dom';
import { Dmodetoggle } from './Dmodetoggle';

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="contact-manager-heading">Contact Manager</h2>
        </Link>
        <Dmodetoggle />
      </div>
    </div>
  );
};

export default Header;
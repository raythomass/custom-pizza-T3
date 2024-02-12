import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = ({ totalCost }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div class="container">
          <h1>Custom Pizza</h1>
          <nav>
              <ul>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to="/login">Login</Link>
              </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;


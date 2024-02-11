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
                  <li><a href="#about">About</a></li>
                  <Link to='/menu'>Menu</Link>
                  <li><a href="#contact">Contact</a></li>
                  <Link to="/login">Login</Link>
              </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;


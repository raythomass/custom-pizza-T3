import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = ({ totalCost }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="header__logo">
        
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header__actions">
        <button className="header__signin">Sign In</button>
        <div className="header__total-cost">Total: ${totalCost.toFixed(2)}</div>
      </div>
    </header>
  );
};

export default Header;


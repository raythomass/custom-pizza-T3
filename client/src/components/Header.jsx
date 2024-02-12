import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './Header.css';

const Header = ({ totalCost }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="container">
          <h1>Custom Pizza</h1>
          <nav>
              <ul>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                {Auth.loggedIn() ? (
                  <button onClick={logout} className='logout-btn'> Logout </button>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                  </>
                )}
              </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;


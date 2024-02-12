import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

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
                <Link className='link btn-lg btn-info m-2' to='/'>Home</Link>
                <Link className='link btn-lg btn-info m-2' to='/menu'>Menu</Link>
                <Link className='link btn-lg btn-info m-2' to='/about'>About</Link>
                <Link className='link btn-lg btn-info m-2' to='/contact'>Contact Us</Link>
                {Auth.loggedIn() ? (
                  <button  onClick={logout} className='btn btn-lg btn-info m-2'> Logout </button>
                ) : (
                  <>
                    <Link className='link btn-lg btn-info m-2' to="/login">Login</Link>
                    <Link className='link btn-lg btn-info m-2' to="/signup">Signup</Link>
                  </>
                )}
              </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;


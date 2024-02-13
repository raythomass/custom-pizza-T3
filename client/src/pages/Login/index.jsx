import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import './Login.css'
import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-container">
      { data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <div className="form-container">
            {/* Login Form */}
            <form onSubmit={handleFormSubmit} id="login-form" className="auth-form">
                <h2>Login</h2>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required  
                  onChange={handleChange}
                  value={formState.email} 
                />
                <input
                 type="password" 
                 name="password" 
                 placeholder="Password" 
                 required  
                 onChange={handleChange} 
                 value={formState.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
      )}
      {
          error ? <div>
              <p className="error-text">The provided credentials are incorrect</p>
          </div> : null
      }

    </div>
  );
};

export default Login;

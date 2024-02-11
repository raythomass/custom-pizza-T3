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
          <h1>User Authentication</h1>
          <div className="form-container">
              {/* Login Form */}
              <form id="login-form" className="auth-form">
                  <h2>Login</h2>
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="password" name="password" placeholder="Password" required />
                  <button type="submit">Login</button>
              </form>
              {/* Registration Form */}
              <form id="register-form" className="auth-form">
                  <h2>Register</h2>
                  <input type="text" name="username" placeholder="Username" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="password" name="password" placeholder="Password" required />
                  <input type="password" name="confirm_password" placeholder="Confirm Password" required />
                  <button type="submit">Register</button>
              </form>
              {/* Password Reset Form */}
              <form id="reset-password-form" className="auth-form">
                  <h2>Reset Password</h2>
                  <input type="email" name="email" placeholder="Email" required />
                  <button type="submit">Reset Password</button>
              </form>
          </div>
      </div>
  );
};

export default Login;

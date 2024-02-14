import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import './signup.css';
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formState);
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);

      Auth.login(data.addUser.token);
    } catch (e) {
      window.alert('An account with this email or username already exists. Please log in.');
    }
  };

  return (
          <div className="form-container">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <div className='signup-container'>
                <div className='form-container'>
                  <form onSubmit={handleFormSubmit} className="auth-form" id='register-form' >
                    <h2>Register</h2>
                    <input 
                      type="text" 
                      name="username" 
                      placeholder="Username" 
                      required
                      onChange={handleChange}
                      value={formState.username} 
                    />
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
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="Address" 
                      required 
                      onChange={handleChange}
                      value={formState.address}
                    />
                    <input 
                      type="text" 
                      name="phoneNumber" 
                      placeholder="Phone Number" 
                      required 
                      onChange={handleChange}
                      value={formState.phoneNumber}
                    />
                    <button type="submit">Register</button>
                </form>
              </div>
             </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
  );
};

export default Signup;

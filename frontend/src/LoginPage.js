import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === 'Admin' && password === 'nesthome') {
      login(username, 'admin');
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/login/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          alert('Login failed: Invalid username or password.');
        } else {
          alert(`Login failed: Server responded with status ${response.status}.`);
        }
        return;
      }

      const result = await response.json();
      if (result.success) {
        login(username, result.role);

        // Update navigation based on role
        if (result.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/'); // Redirect users to the homepage or their dashboard
        }
      } else {
        alert('Login failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert('Login failed: Network error or server not responding.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="form-header">
          <b><h2>PRIME PROPS</h2></b>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-buttons">
            <center><button type="submit" className="login-button">Login</button></center>
          </div>
        </form>
        <div className="form-footer">
          <Link to="/signup" className="signup-link">Sign Up</Link>
        </div>
      </div>
      <div className="image">
        <img src="login.png" alt="Login" />
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import './LoginPage.css';
import maskGroup from '../components/images/Mask group.png'; 
import logo from '../components/images/logo1.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the API
    const credentials = {
      email: formData.email,
      password: formData.password
    };

    try {
      const response = await fetch('https://skai-backend-firj.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful!');
        localStorage.setItem('token', data.token); 
        window.location.href = '/newProject';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong, please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <div className="content">
          <img src={logo} alt="Logo" />
          <h2>Your podcast will no longer be just a hobby.</h2>
          <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
        <img src={maskGroup} alt="Background" className="mask-img" />
      </div>

      <div className="right-section">
        <h3>Welcome to Ques.AI</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="google-login">
          <p>or</p>
          <button className="google-btn">Continue with Google</button>
        </div>
        <p className="register">
          Don’t have an account? <a href="/register">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

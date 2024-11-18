// RegisterPage.js
import React, { useState } from 'react';

import maskGroup from '../components/images/Mask group.png'; 
import logo from '../components/images/logo1.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    try {
      const response = await fetch('https://skai-backend-firj.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        alert(data.message || 'Registration failed');
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
          <h2>Join Ques.AI today.</h2>
          <p>Start your journey with our AI assistant!</p>
        </div>
        <img src={maskGroup} alt="Background" className="mask-img" />
      </div>

      <div className="right-section">
        <h3>Create an Account</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="login-btn">Register</button>
        </form>
        <p className="register">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

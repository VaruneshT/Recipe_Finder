import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('https://recipe-finder-backend-cw2w.onrender.com/admin/login', formData);
      navigate('/dash');
    } catch (err) {
      setMessage(err.response.data.message || 'Server error');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontSize: '2em',
        marginBottom: '20px',
        color: '#4b79a1',
        textShadow: '1px 1px 2px #b3cde0'
      }}>Admin Login</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
      }}>
        <div style={{ marginBottom: '15px', width: '100%' }}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#4b79a1'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>
        <div style={{ marginBottom: '15px', width: '100%' }}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'border-color 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#4b79a1'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#4b79a1',
          color: '#ffffff',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          outline: 'none',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#376089';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#4b79a1';
          e.target.style.transform = 'scale(1)';
        }}>Log In</button>
      </form>
      {message && <p style={{
        color: 'red', 
        marginTop: '15px', 
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(255, 0, 0, 0.2)'
      }}>{message}</p>}
    </div>
  );
};

export default AdminLogin;

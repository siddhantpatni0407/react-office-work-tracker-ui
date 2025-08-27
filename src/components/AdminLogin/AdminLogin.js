import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add backend API validation for admin
    if (email === 'admin@example.com' && password === 'admin') {
      login({ role: 'admin', email });
      navigate('/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;

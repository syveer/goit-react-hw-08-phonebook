import React, { useState } from 'react';
import LoginPage from '../../redux/pages/LoginPage';
import RegisterPage from '../../redux/pages/RegisterPage';
import styles from './AuthForm.module.css';

function AuthForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onLogin();
  };

  return (
    <div className={styles.authForm}>
      {' '}
      {}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
      <LoginPage /> {/* Utilizăm LoginPage */}
      <RegisterPage /> {/* Utilizăm RegisterPage */}
    </div>
  );
}

export default AuthForm;

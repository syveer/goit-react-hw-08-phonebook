import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { loginAPI } from '../Store/Auth/AuthApi';

function LoginPage() {
  const handleLogin = async credentials => {
    try {
      const user = await loginAPI(credentials);
      console.log('User logged in:', user);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} /> {}
    </div>
  );
}

export default LoginPage;

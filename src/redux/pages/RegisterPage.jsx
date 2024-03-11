import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { registerAPI } from '../Store/Auth/AuthApi';

function RegisterPage() {
  const handleRegister = async userData => {
    try {
      const response = await registerAPI(userData);
      console.log('Register response:', response);
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onRegister={handleRegister} /> {}
    </div>
  );
}

export default RegisterPage;

// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { loginAPI, registerAPI, logoutAPI } from '../Auth/AuthApi';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async credentials => {
    try {
      const userData = await loginAPI(credentials);
      setUser(userData);
      localStorage.setItem('token', userData.token);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const register = async userData => {
    try {
      const registeredUser = await registerAPI(userData);
      setUser(registeredUser);
      localStorage.setItem('token', registeredUser.token);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  const logout = async () => {
    try {
      await logoutAPI();
      setUser(null);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

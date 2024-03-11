import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/Store/ContactSlice/ContactSlice';
import ContactList from './ContactList/ContactList';
import AddContactForm from './ContactForm/AddContactForm';

import styles from './App.module.css';
import Navigation from './Navigation/Navigation';
import AuthForm from '../components/AuthForm/AuthForm';

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsRegistering(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  return (
    <div className={styles.app}>
      <h1>Phone Book</h1>
      <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {isLoggedIn ? (
        <>
          <AddContactForm />
          <ContactList />
        </>
      ) : (
        <AuthForm
          onLogin={handleLogin}
          isRegistering={isRegistering}
          onRegister={handleRegister}
        />
      )}
    </div>
  );
}

export default App;

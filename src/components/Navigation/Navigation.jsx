import React, { useState } from 'react';
import RegisterPage from '../../redux/pages/ContactsPage';
import LoginPage from '../../redux/pages/LoginPage';
import ContactsPage from '../../redux/pages/ContactsPage';

function Navigation() {
  const [currentPage, setCurrentPage] = useState('contacts');

  const handleNavigation = page => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'register') return <RegisterPage />;
    if (currentPage === 'login') return <LoginPage />;
    if (currentPage === 'contacts') return <ContactsPage />;
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('register')}>
              Register
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('login')}>Login</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('contacts')}>
              Contacts
            </button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default Navigation;

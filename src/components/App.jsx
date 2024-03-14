import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../redux/Store/Context/AuthContext';
import LoginPage from '../redux/pages/LoginPage';
import RegisterPage from '../redux/pages/RegisterPage';
import ContactsPage from '../redux/pages/ContactsPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Folosiți useNavigate în loc de useHistory
import { useAuth } from '../Store/Context/AuthContext';

function Login() {
  const navigate = useNavigate(); // Folosiți useNavigate în loc de useHistory
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // Starea pentru gestionarea erorilor

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Verificați dacă răspunsul este de succes sau nu
        throw new Error('Invalid credentials'); // Aruncă o eroare în caz de eșec
      }

      const userData = await response.json();
      login(userData);
      navigate('/contacts');
    } catch (error) {
      setError(error.message); // Setează eroarea în starea componentei
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>} {/* Afiseaza eroarea */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

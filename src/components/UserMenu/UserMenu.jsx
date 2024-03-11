import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/Store/AuthSlice/authSlice'; // Importați acțiunea logout

function UserMenu({ userEmail }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatchați acțiunea de logout pentru a reseta starea de autentificare
    dispatch(logout());
    // Aici puteți adăuga orice altă logică pentru a șterge token-ul sau datele de sesiune din backend
  };

  return (
    <div>
      <p>{userEmail}</p> {/* Afiseazați emailul utilizatorului */}
      <button onClick={handleLogout}>Logout</button>{' '}
      {/* Adăugați butonul de logout */}
    </div>
  );
}

export default UserMenu;

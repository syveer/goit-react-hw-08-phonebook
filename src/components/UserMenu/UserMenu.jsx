import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../redux/Store/Context/AuthContext';
import {
  selectUser,
  selectFilteredTutors,
} from '../../redux/selectors/selectors';

function UserMenu() {
  const { user, logout } = useAuth();
  const userData = useSelector(selectUser);
  const filteredTutors = useSelector(selectFilteredTutors);

  return (
    <div>
      <p>{user.email}</p>
      <p>
        {userData.firstName} {userData.lastName}
      </p>
      {/* Afisăm numele și prenumele utilizatorului */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserMenu;

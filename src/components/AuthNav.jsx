import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.active : style.nav__link
        }
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.active : style.nav__link
        }
        to="/login"
      >
        Log in
      </NavLink>
    </div>
  );
}

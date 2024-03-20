import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../styles.module.css';

const HomeView = () => (
  <div className={style.view__container}>
    <h1 className={style.home__title}>Phonebook </h1>
    <p className={style.please}>Please</p>
    <div className={style.please__container}>
      <NavLink
        className={({ active }) => (active ? style.active : style.home__linc)}
        to="/login"
      >
        Log in
      </NavLink>
      <p className={style.please}>or</p>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.active : style.home__linc
        }
        to="/register"
      >
        Register
      </NavLink>
    </div>
  </div>
);

export default HomeView;

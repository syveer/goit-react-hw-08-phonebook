import style from '../styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={style.user__container}>
      <p className={style.user__link}>Welcome, </p>
      <p className={style.user__name}>{name} </p>
      <p className={style.user__smile}>😃</p>
      <button
        className={style.user__btn}
        type="submit"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
}

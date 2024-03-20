import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import style from '../styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={style.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors';

import css from '../AppBar/AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? (
        <p className={css.welcome}>Welcome, {user}</p>
      ) : (
        <AuthNav />
      )}
      <UserMenu />
    </header>
  );
}

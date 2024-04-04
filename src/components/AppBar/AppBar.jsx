import { useDispatch, useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { selectUser, selectedIsLoggedIn } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from '../AppBar/AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? (
        <p className={css.welcome}>Welcome, {user}</p>
      ) : (
        <AuthNav />
      )}
      {isLoggedIn && (
        <button
          className={css.button}
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </button>
      )}
    </header>
  );
}

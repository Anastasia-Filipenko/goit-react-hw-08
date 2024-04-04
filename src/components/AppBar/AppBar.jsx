import { useDispatch, useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { selectUser, selectedIsLoggedIn } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function AppBar() {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <p>Welcome, {user}</p> : <AuthNav />}
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </header>
  );
}

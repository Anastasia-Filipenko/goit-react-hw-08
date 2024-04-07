import { logOut } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from '../UserMenu/UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <p className={css.welcome}>Welcome, {user}</p>
      <button
        className={css.button}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </>
  );
}

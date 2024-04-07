import { logOut } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from '../UserMenu/UserMenu.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    isLoggedIn && (
      <button
        className={css.button}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    )
  );
}

import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectedIsLoggedIn } from '../../redux/auth/selectors';
export default function Navigation() {
  const isLoggedIn = useSelector(selectedIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

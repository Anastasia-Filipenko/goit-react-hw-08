import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';
import clsx from 'clsx';

const activeLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink className={activeLink} to="/login">
        Log In
      </NavLink>
      <NavLink className={activeLink} to="/register">
        Register
      </NavLink>
    </div>
  );
}

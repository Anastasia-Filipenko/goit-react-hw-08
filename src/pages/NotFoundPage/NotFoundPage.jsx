import { NavLink } from 'react-router-dom';
import css from '../../pages/NotFoundPage/NotFoundPage.module.css';
export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Page not found</h1>
      <NavLink className={css.link} to="/">
        Back to home
      </NavLink>
    </div>
  );
}

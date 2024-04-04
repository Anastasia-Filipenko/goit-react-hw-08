import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../ContactsPage/ContactsPage.module.css';
export default function Contacts() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      <div className={css.linkContainer}>
        <NavLink className={css.link} to="addContact">
          Add Contact
        </NavLink>
        <h2 className={css.title}>Phonebook</h2>

        <NavLink className={css.link} to="searchContact">
          Find Contact
        </NavLink>
      </div>
      <Outlet />
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

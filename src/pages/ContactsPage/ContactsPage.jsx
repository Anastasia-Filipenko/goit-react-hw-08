import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import css from '../ContactsPage/ContactsPage.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
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
        <ContactForm />
        <h2 className={css.title}>Phonebook</h2>
        <SearchBox />
      </div>
      <Outlet />
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

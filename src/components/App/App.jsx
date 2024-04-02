import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

import css from '../App/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import Loader from '../Loader/Loader';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {loading && <Loader />}

      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
};

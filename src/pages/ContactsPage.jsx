import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import SearchBox from '../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';

export default function Contacts() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      <ContactList />
    </>
  );
}

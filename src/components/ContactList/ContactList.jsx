import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

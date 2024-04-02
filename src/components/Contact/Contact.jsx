import css from '../Contact/Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.container}>
        <p>
          <IoMdContact className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
}

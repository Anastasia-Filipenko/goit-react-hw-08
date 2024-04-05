import css from '../Contact/Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';
export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <IoMdContact className={css.iconContact} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.iconPhone} />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() =>
          dispatch(deleteContact(id))
            .unwrap()
            .then(() => {
              toast.success('Successfully deleted');
            })
            .catch(() => {
              toast.error('An error occurred while deleting');
            })
        }
      >
        <MdDeleteForever className={css.iconDelete} />
      </button>
    </>
  );
}

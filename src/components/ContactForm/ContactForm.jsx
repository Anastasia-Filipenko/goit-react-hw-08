import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import Modal from 'react-modal';
import { FaRegWindowClose } from 'react-icons/fa';
import toast from 'react-hot-toast';
const validation = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
});

Modal.setAppElement('#root');

export default function ContactForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const contactName = useId();
  const contactNumber = useId();
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <button className={css.buttonOpen} onClick={openModal}>
        Add Contact
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modal"
        className={css.modal}
      >
        <h2 className={css.modalTitle}>Add your contact</h2>
        <button className={css.closeButton} onClick={closeModal}>
          <FaRegWindowClose className={css.closeModalIcon} />
        </button>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={validation}
          onSubmit={(value, actions) => {
            dispatch(addContact(value))
              .unwrap()
              .then(() => {
                toast.success('Contact added');
              })
              .catch(() => {
                toast.error('An error occurred while adding a contact');
              });
            closeModal();
            actions.resetForm();
          }}
        >
          <Form className={css.form}>
            <div className={css.inputContainer}>
              <label htmlFor={contactName} className={css.label}>
                Name:
                <Field
                  className={css.input}
                  type="text"
                  name="name"
                  id={contactName}
                />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </label>
            </div>

            <div className={css.inputContainer}>
              <label htmlFor={contactNumber} className={css.label}>
                Number:
                <Field
                  className={css.input}
                  type="tel"
                  name="number"
                  id={contactNumber}
                />
                <ErrorMessage
                  className={css.error}
                  name="number"
                  component="span"
                />
              </label>
            </div>

            <button className={css.button} type="submit">
              Add contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

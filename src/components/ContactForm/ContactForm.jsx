import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

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

export default function ContactForm() {
  const contactName = useId();
  const contactNumber = useId();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validation}
      onSubmit={(value, actions) => {
        dispatch(addContact(value));
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
          </label>

          <ErrorMessage className={css.error} name="name" component="span" />
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
          </label>

          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

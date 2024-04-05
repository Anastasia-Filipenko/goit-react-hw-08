import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from '../RegistrationForm/RegistrationForm.module.css';
import toast from 'react-hot-toast';
const validation = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success(
          'Congratulations! You have been successfully registered!'
        );
      })
      .catch(() => {
        toast.error('Error! Please try again.');
      });
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Registration</h2>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Username:
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <label htmlFor="email" className={css.label}>
            Email:
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <label htmlFor="password" className={css.label}>
            Password:
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import css from '../LoginForm/LoginForm.module.css';
import toast from 'react-hot-toast';

const validation = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short!').required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('You have successfully logged in!');
      })
      .catch(() => {
        toast.error('Error! Please try again.');
      });
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Log In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="email" className={css.label}>
              Email:
              <Field type="email" name="email" className={css.input} />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className={css.label}>
              Password:
              <Field type="password" name="password" className={css.input} />
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </label>
          </div>
          <button className={css.button} type="submit">
            Log In
          </button>
          <span className={css.span}>or</span>
          <NavLink className={css.link} to="/register">
            Registration
          </NavLink>
        </Form>
      </Formik>
    </div>
  );
}

import { Form, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <h2>Registration</h2>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Username
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <button type="submit">Register</button>
          </label>
        </Form>
      </Formik>
    </div>
  );
}

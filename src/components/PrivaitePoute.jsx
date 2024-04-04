import { useSelector } from 'react-redux';
import { selectedIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}

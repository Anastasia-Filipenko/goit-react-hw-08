import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
}

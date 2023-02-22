import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLoginToken);
  console.log('RestrictedRoute >>isLoggedIn :>>');
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

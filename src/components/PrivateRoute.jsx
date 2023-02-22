import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoginToken } from 'redux/auth/auth.selectors';

export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
  const isLoggedIn = useSelector(selectLoginToken);
  console.log('PrivateRoute >>isLoggedIn :>>');
  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={addres} /> : Component;
};

// import React from 'react';
// import css from './App.module.css';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

// const App = () => {
//   return (
//     <>
//       <div className={css.container}>
//         <h2>Phonebook</h2>
//         <ContactForm></ContactForm>
//         <Filter />
//         <h2>Contacts:</h2>
//         <ContactList />
//       </div>
//     </>
//   );
// };

// export default App;

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Contacts } from '../pages/Contacts';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo={'/contacts'}
                  component={<Login />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<Register />} />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
};

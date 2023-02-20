import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { authLogout } from 'redux/auth/auth.operations';
import { selectLoginToken } from 'redux/auth/auth.selectors';

export const Layout = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectLoginToken);

  const handleLogout = () => {
    dispatch(authLogout());
  };
  return (
    <>
      <header>
        {token ? (
          <>
            <p>Hello, {token.user.name}</p>
            <p>{token.user.email}</p>
            <button type="button" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <Navigation />
        )}
      </header>
      <main>
        <aside>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            {token && (
              <li>
                <NavLink to="contacts">Phonebook</NavLink>
              </li>
            )}
          </ul>
        </aside>
        <Outlet />
      </main>
    </>
  );
};

import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className="navigation">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? 'link__active link' : 'link')}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? 'link__active link' : 'link'
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

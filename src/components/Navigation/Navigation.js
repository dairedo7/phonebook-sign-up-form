import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className="navigation">
      <NavLink
        to="/home"
        className={styles.link}
        activeclassname={styles.link_active}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.link}
          activeclassname={styles.link_active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.scss';

export function AuthNav() {
  return (
    <div className={styles.box}>
      <NavLink
        to="/register"
        className={styles.link}
        activeclassname={styles.link_active}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        activeclassname={styles.link_active}
      >
        Login
      </NavLink>
    </div>
  );
}

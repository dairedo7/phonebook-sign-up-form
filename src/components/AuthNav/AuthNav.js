import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.scss';

export function AuthNav() {
  return (
    <div className={styles.box}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? 'link__active link' : 'link')}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? 'link__active link' : 'link')}
      >
        Login
      </NavLink>
    </div>
  );
}

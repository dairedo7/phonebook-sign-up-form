import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import styles from './Header.module.scss';

export function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

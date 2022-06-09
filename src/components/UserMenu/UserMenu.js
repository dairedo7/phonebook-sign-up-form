import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';

import styles from './UserMenu.module.scss';

export function UserMenu() {
  const name = useSelector(getUserName);

  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <p className={styles.text}>Welcome to your phonebook, {name}!</p>

      <button
        type="button"
        onClick={() => dispatch(signOut())}
        className={styles.btn}
      >
        Logout
      </button>
    </div>
  );
}

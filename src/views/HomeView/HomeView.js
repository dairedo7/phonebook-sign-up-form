import { MdOutlineMenuBook } from 'react-icons/md';
import styles from './HomeView.module.scss';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import titleAppearing from '../../titleAppearing.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function HomeView() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <CSSTransition
        in
        appear
        timeout={500}
        classNames={titleAppearing}
        unmountOnExit
      >
        <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>
      <CSSTransition
        in
        appear
        timeout={500}
        classNames={titleAppearing}
        unmountOnExit
      >
        <p className={styles.description}>all your contacts are stored here!</p>
      </CSSTransition>
      <MdOutlineMenuBook className={styles.icon} />

      <div className={styles.button__options}>
        {!isLoggedIn ? (
          <>
            <CSSTransition
              in
              appear
              timeout={500}
              classNames={titleAppearing}
              unmountOnExit
            >
              {/* <p className={styles.subtitle}>Sign in or Sign up</p> */}
              <NavLink
                to="/login"
                className={styles.button}
                title="Sign in now!"
                aria-label="Move to sign in form"
              >
                Sign in
              </NavLink>
            </CSSTransition>
            <CSSTransition
              in
              appear
              timeout={500}
              classNames={titleAppearing}
              unmountOnExit
            >
              <NavLink
                to="/register"
                className={styles.button}
                title="Sign up now!"
                aria-label="Move to sign up form"
              >
                Sign up
              </NavLink>
            </CSSTransition>
          </>
        ) : (
          <>
            <CSSTransition
              in
              appear
              timeout={500}
              classNames={titleAppearing}
              unmountOnExit
            >
              {/* <p className={styles.subtitle}>Sign in or Sign up</p> */}
              <button
                to="/login"
                className={styles.button}
                onClick={() => dispatch(signOut())}
                title="Sign out!"
                aria-label="Sign out from the phonebook"
              >
                Sign out
              </button>
            </CSSTransition>
          </>
        )}
      </div>
    </div>
  );
}

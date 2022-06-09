import styles from './HomeView.module.scss';
import { CSSTransition } from 'react-transition-group';
import titleAppearing from '../../titleAppearing.module.css';

export default function HomeView() {
  return (
    <CSSTransition
      in
      appear
      timeout={500}
      classNames={titleAppearing}
      unmountOnExit
    >
      <p className={styles.title}>
        Phonebook: all your contacts are stored here!
      </p>
    </CSSTransition>
  );
}

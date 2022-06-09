import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.border}>&#169; 2022 Phonebook</p>
    </footer>
  );
}

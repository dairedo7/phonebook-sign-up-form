import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__signature}>&#169; 2022 Phonebook by </p>
      <a
        className={styles.footer__link}
        href="https://github.com/dairedo7"
        target="_blank"
        rel="noopener noreferrer"
        title="Github Profile Link"
        aria-label="Link to GitHub profile"
      >
        Dairedo
      </a>
    </footer>
  );
}

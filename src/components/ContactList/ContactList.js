import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import transitionStyles from './transition.module.css';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { findContactsByQuery } from 'redux/contacts/contacts-selector';

export default function ContactList() {
  const contacts = useSelector(findContactsByQuery);

  return (
    <TransitionGroup component="ul" className={styles.list}>
      <Suspense fallback={<h1>Loading...</h1>}>
        {contacts.map(contact => (
          <CSSTransition
            in={contacts.length > 0}
            key={contact.id}
            timeout={250}
            classNames={transitionStyles}
            unmountOnExit
          >
            <ContactItem key={contact.name} contact={contact} />
          </CSSTransition>
        ))}
      </Suspense>
    </TransitionGroup>
  );
}

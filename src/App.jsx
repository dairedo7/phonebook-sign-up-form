import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/contacts/contacts-selector';
import { addContact } from 'redux/contacts/contacts-actions';

import './index.css';
import { CSSTransition } from 'react-transition-group';
import titleAppearing from './titleAppearing.module.css';
import phonebookAppearing from './phonebookAppearing.module.css';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const updateContacts = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }
  };

  return (
    <>
      <div className="phonebook__container">
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={titleAppearing}
          unmountOnExit
        >
          <h1 className="phonebook__title">Phonebook</h1>
        </CSSTransition>
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={phonebookAppearing}
          unmountOnExit
        >
          <ContactForm changeContactsState={updateContacts} />
        </CSSTransition>
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={titleAppearing}
          unmountOnExit
        >
          <h2 className="contacts__title">Contacts</h2>
        </CSSTransition>
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={phonebookAppearing}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList />
      </div>
    </>
  );
}

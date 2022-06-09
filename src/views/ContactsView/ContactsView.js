import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';

import Filter from '../../components/Filter/Filter';
import { getContacts } from 'redux/contacts/contacts-selector';
import { addContact } from 'redux/contacts/contacts-operations';
// import s from './ContactsView.module.scss';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const updateContacts = ({ name, phone }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      dispatch(addContact({ name, phone }));
    }
  };
  return (
    <>
      <h1 className="visually_hidden">This is contacts page.</h1>

      <ContactForm changeContactsState={updateContacts} />
      <Filter />
      <ContactList />
    </>
  );
}

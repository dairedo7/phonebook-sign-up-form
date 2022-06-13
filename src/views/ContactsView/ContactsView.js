import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Filter from '../../components/Filter/Filter';
import { getContacts } from 'redux/contacts/contacts-selector';
import { addContact } from 'redux/contacts/contacts-operations';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const updateContacts = ({ name, phone }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.info('The contact with the same name already exists!', {
        theme: 'colored',
      });
    } else {
      dispatch(addContact({ name, phone }));
      toast.success('New contact was added!', { theme: 'colored' });
    }
  };
  return (
    <>
      <ToastContainer autoClose={2000} />
      <h1 className="visually_hidden">This is contacts page.</h1>

      <ContactForm changeContactsState={updateContacts} />
      <Filter />
      <ContactList />
    </>
  );
}

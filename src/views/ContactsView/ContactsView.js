import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Filter from '../../components/Filter/Filter';
import { getContacts } from 'redux/contacts/contacts-selector';

import { addContact } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

function ContactsView() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts();
  }, []);

  const updateContacts = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.info('The contact with the same name already exists!', {
        theme: 'colored',
      });
    } else {
      dispatch(addContact({ name, number }));
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

const mapDispatchToProps = dispatch => ({
  getContacts: dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsView);

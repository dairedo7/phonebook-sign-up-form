import { PropTypes } from 'prop-types';
import styles from './ContactItem.module.scss';

import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function ContactItem({ contact }) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteContact());
  }, [dispatch]);

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
    toast.warn('The contact was succesfully deleted', { theme: 'colored' });
  };
  return (
    <>
      <ToastContainer autoClose={2000} />
      <li key={id} className={styles.contact__item}>
        <span className={styles.contact__text}>
          {name}: {number}
        </span>
        <button
          className={styles.delete__btn}
          onClick={() => onDeleteClick(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

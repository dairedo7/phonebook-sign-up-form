import { PropTypes } from 'prop-types';
import styles from './ContactItem.module.scss';

import { deleteContact } from 'redux/contacts/contacts-actions';
import { useDispatch } from 'react-redux';
export default function ContactItem({ contact }) {
  const { name, number, id } = contact;

  const dispatch = useDispatch();

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={styles.contact__item}>
      <span className={styles.contact__text}>
        {name}: {number}
      </span>
      <button className={styles.delete__btn} onClick={() => onDeleteClick(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

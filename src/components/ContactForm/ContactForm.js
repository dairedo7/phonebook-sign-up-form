import styles from './ContactForm.module.scss';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

function ContactForm({ changeContactsState }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  // const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name,
      phone,
    };

    changeContactsState(contact);
    resetForm();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} action="#">
      <label className={styles.label} htmlFor="name">
        <input
          className={styles.form__field}
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder=" "
          value={name}
          onChange={handleChange}
          required
        />
        <span className={styles.name__label}>Name</span>
      </label>

      <label className={styles.label} htmlFor="number">
        <input
          className={styles.form__field}
          type="tel"
          id="number"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder=" "
          value={phone}
          onChange={handleChange}
          required
        />
        <span className={styles.number__label}>Number</span>
      </label>
      <button className={styles.submit__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = { changeContactsState: PropTypes.func.isRequired };

export default ContactForm;

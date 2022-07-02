import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operations';

import styles from './RegisterView.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, [action.type]: action.payload };

    case 'email':
      return { ...state, [action.type]: action.payload };

    case 'password':
      return { ...state, [action.type]: action.payload };

    default:
      return state;
  }
}

export default function RegisterView() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    dispatch(register(state));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        <input
          autoFocus
          className={styles.form__field}
          type="text"
          name="name"
          value={state.name}
          title="Please check if the data you entered is valid."
          placeholder=" "
          onChange={e =>
            setState({ type: e.target.name, payload: e.target.value })
          }
          required
        />
        <span className={styles.name__label}>Name</span>
      </label>

      <label className={styles.label}>
        <input
          className={styles.form__field}
          type="text"
          name="email"
          value={state.email}
          pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
          title="Please check the entered data is correct."
          placeholder=" "
          onChange={e =>
            setState({ type: e.target.name, payload: e.target.value })
          }
          required
        />
        <span className={styles.email__label}>Email</span>
      </label>

      <label className={styles.label}>
        <input
          autoComplete="off"
          className={styles.form__field}
          type="password"
          name="password"
          value={state.password}
          placeholder=" "
          onChange={e =>
            setState({ type: e.target.name, payload: e.target.value })
          }
        />
        <span className={styles.password__label}>Password</span>
      </label>

      <button className={styles.btn} type="submit">
        Register
      </button>
    </form>
  );
}

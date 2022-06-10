import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '../../redux/auth/auth-operations';

import styles from './LoginView.module.scss';

const initialState = {
  email: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, [action.type]: action.payload };

    case 'password':
      return { ...state, [action.type]: action.payload };

    default:
      return state;
  }
}

export default function LoginView() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  console.log(state);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn(state));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        <input
          autoFocus
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
        />
        <span className={styles.email__label}>Email</span>
      </label>

      <label className={styles.label}>
        <input
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

      <button type="submit" className={styles.btn}>
        Login
      </button>
    </form>
  );
}

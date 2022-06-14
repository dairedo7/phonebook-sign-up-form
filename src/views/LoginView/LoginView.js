import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../../redux/auth/auth-operations';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const { email, password } = state;

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // console.log(state);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(state);

    dispatch(signIn(state));
    if (!isLoggedIn) {
      toast.error(
        'Request failed with status code 400. Check your email and password!',
        {
          theme: 'colored',
        }
      );
    } else {
      toast.success('You have succesfully logged in!', {
        theme: 'colored',
      });
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          <input
            autoFocus
            className={styles.form__field}
            type="text"
            name="email"
            autoComplete="on"
            value={email}
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
            autoComplete="on"
            value={password}
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
    </>
  );
}

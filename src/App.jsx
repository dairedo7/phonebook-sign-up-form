import './index.css';
import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { fetchContacts } from 'redux/contacts/contacts-operations';

// import { contactsLoading } from 'redux/contacts/contacts-selector';

import { getIsLoadingCurrent } from 'redux/auth/auth-selectors.js';

import PublicRoute from './Routes/PublicRoute.js';
import PrivateRoute from './Routes/PrivateRoute.js';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

// import { getContacts } from 'redux/contacts/contacts-selector';
// import { updateUser } from './redux/auth/auth-operations';

// import { CSSTransition } from 'react-transition-group';
// import titleAppearing from './titleAppearing.module.css';
// import phonebookAppearing from './phonebookAppearing.module.css';

export default function App() {
  const dispatch = useDispatch();
  // const loading = useSelector(contactsLoading);
  const isLoadingCurrentUser = useSelector(getIsLoadingCurrent);
  const auth = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    !isLoadingCurrentUser && (
      <>
        <Header />

        <main className="main">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<HomeView />}></Route>
              <Route
                path="/home/*"
                element={
                  <PublicRoute path="/*" restricted>
                    <HomeView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/register/*"
                element={
                  <PublicRoute path="/*" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/login/*"
                element={
                  <PublicRoute path="/*" restricted redirectTo="/contacts">
                    <LoginView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/contacts/*"
                element={
                  <PrivateRoute path="/*" redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="*"
                element={
                  auth ? <Navigate to="/contacts" /> : <Navigate to="/" />
                }
              ></Route>
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </>
    )
  );
}

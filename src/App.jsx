// import { nanoid } from 'nanoid';
// import ContactForm from './components/ContactForm/ContactForm.js';
// import ContactList from './components/ContactList/ContactList.js';
// import Filter from './components/Filter/Filter';
import PublicRoute from './Routes/PublicRoute.js';
import PrivateRoute from './Routes/PrivateRoute.js';

import HomeView from 'views/HomeView/HomeView.js';
import RegisterView from 'views/RegisterView/RegisterView.js';
import LoginView from 'views/LoginView/LoginView.js';
import ContactsView from 'views/ContactsView/ContactsView.js';

import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

// import { getContacts } from 'redux/contacts/contacts-selector';
// import { updateUser } from './redux/auth/auth-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';

// import { contactsLoading } from 'redux/contacts/contacts-selector';

import { getIsLoadingCurrent } from 'redux/auth/auth-selectors.js';

import './index.css';
// import { CSSTransition } from 'react-transition-group';
// import titleAppearing from './titleAppearing.module.css';
// import phonebookAppearing from './phonebookAppearing.module.css';

export default function App() {
  const dispatch = useDispatch();
  // const loading = useSelector(contactsLoading);
  const isLoadingCurrentUser = useSelector(getIsLoadingCurrent);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    !isLoadingCurrentUser && (
      <>
        <Header />

        <main style={{ padding: '20px 10px 20px 10px' }}>
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
              <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </>
    )
    /* { <div className="phonebook__container">
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={titleAppearing}
          unmountOnExit
        >
          <h1 className="phonebook__title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in
          appear
          timeout={500}
          classNames={phonebookAppearing}
          unmountOnExit
        >
          <ContactForm changeContactsState={updateContacts} />
        </CSSTransition>
        {loading && <h1 className="loading">Loading...</h1>}
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={titleAppearing}
          unmountOnExit
        >
          <h2 className="contacts__title">Contacts</h2>
        </CSSTransition>
        <Filter />
        <ContactList />
      </div> }*/
  );
}

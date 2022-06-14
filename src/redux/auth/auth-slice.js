// import { createSlice } from '@reduxjs/toolkit';
// import { register, signIn, signOut, updateUser } from './auth-operations';

// const initialState = {
//   user: { name: '', email: '' },
//   token: null,
//   isLoggedIn: false,
//   isLoading: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.pending]: state => (state.isLoading = true),
//     [register.fulfilled](state, { payload }) {
//       // console.log(action);
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//     },
//     [register.rejected](state) {
//       state.isLoading = false;
//     },

//     [signIn.pending]: state => {
//       state.isLoading = true;
//     },
//     [signIn.fulfilled]: (state, { payload }) => {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//     },
//     [signIn.rejected](state) {
//       state.isLoading = false;
//     },

//     [signOut.pending]: state => {
//       state.isLoading = true;
//     },
//     [signOut.fulfilled](state) {
//       state.user = { name: '', email: '' };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//     [signOut.rejected](state) {
//       state.isLoading = false;
//     },

//     [updateUser.pending]: state => {
//       state.isLoading = true;
//     },
//     [updateUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//     },
//     [updateUser.rejected](state) {
//       state.isLoading = false;
//     },
//   },
// });
// export default authSlice.reducer;

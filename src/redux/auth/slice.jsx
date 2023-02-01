import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';

// const extraActions = [register, logIn, logOut, refreshUser];

// const getActions = type => extraActions.map(action => action[type]);

// const registerFulfilledReducer = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// };

// const logInFulfilledReducer = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// };

// const logOutFulfilledReducer = state => {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
// };

// const refreshUserPendingReducer = state => {
//   state.isRefreshing = true;
// };

// const refreshUserRejectedReducer = state => {
//   state.isRefreshing = false;
// };

// const refreshUserFulfilledReducer = (state, action) => {
//   state.user = action.payload;
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },

//   extraReducers: builder =>
//     builder
//       .addCase(register.fulfilled, registerFulfilledReducer)
//       .addCase(logIn.fulfilled, logInFulfilledReducer)
//       .addCase(logOut.fulfilled, logOutFulfilledReducer)
//       .addMatcher(isAnyOf(...getActions('pending')), refreshUserPendingReducer)
//       .addMatcher(
//         isAnyOf(...getActions('rejected')),
//         refreshUserRejectedReducer
//       )
//       .addMatcher(
//         isAnyOf(...getActions('fulfilled')),
//         refreshUserFulfilledReducer
//       ),
// });

// export const authReducer = authSlice.reducer;

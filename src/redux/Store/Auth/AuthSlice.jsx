import { createSlice } from '@reduxjs/toolkit';
import { loginAPI, registerAPI, logoutAPI } from './AuthApi';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

// Exemplu de utilizare a funcției loginAPI în acțiunea loginStart
export const loginUser = credentials => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await loginAPI(credentials);
    dispatch(loginSuccess(response.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;

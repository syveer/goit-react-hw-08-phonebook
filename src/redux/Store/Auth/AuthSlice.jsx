import { createSlice } from '@reduxjs/toolkit';
import { loginAPI, registerAPI } from './AuthApi';

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
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export const loginUser = credentials => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await loginAPI(credentials);
    dispatch(loginSuccess(response.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const registerUser = userData => async dispatch => {
  try {
    dispatch(registerStart());
    const response = await registerAPI(userData);
    dispatch(registerSuccess(response.user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const authReducer = authSlice.reducer;
export default authReducer;

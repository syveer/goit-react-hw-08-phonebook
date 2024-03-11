import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../Store/ContactSlice/ContactSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;

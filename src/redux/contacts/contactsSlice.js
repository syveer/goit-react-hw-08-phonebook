// contactsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from '../contacts/contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.getContacts.fulfilled,
        (state, { payload }) => {
          state.items = payload;
          state.isLoading = false;
        }
      )
      .addCase(
        contactsOperations.getContacts.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )
      .addCase(contactsOperations.addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.addContact.fulfilled,
        (state, { payload }) => {
          state.items.unshift(payload);
          state.isLoading = false;
        }
      )
      .addCase(contactsOperations.addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(contactsOperations.deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        contactsOperations.deleteContact.fulfilled,
        (state, { payload }) => {
          state.items = state.items.filter(({ id }) => id !== payload);
          state.isLoading = false;
        }
      )
      .addCase(
        contactsOperations.deleteContact.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const { changeFilter, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

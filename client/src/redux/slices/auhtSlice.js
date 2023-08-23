import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {},
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.session = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.playlist = action.payload;
      state.loading = false;
      state.error = null;
    },
    registerFailure: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});

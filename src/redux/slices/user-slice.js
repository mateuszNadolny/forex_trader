import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  cookie: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCookie: (state, action) => {
      state.cookie = action.payload;
    }
  }
});

export const { setIsLoggedIn, setCookie } = userSlice.actions;

export default userSlice;

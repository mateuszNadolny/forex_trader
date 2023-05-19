import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const { setIsLoggedIn } = userSlice.actions;

export default userSlice;

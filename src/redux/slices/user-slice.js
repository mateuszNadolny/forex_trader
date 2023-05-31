import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isDemo: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsDemo: (state, action) => {
      state.isDemo = action.payload;
      console.log('dispatchng');
    }
  }
});

export const { setIsLoggedIn, setIsDemo } = userSlice.actions;

export default userSlice;

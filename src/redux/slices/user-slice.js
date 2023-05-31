import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isDemo: false,
  photoURL: '',
  displayName: ''
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
    },
    setUserData: (state, action) => {
      console.log(action.payload.photoURL);
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    }
  }
});

export const { setIsLoggedIn, setIsDemo, setUserData } = userSlice.actions;

export default userSlice;

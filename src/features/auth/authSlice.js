import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.username = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

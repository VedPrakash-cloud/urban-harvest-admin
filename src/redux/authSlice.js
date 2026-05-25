import { createSlice } from '@reduxjs/toolkit';


const savedUser = localStorage.getItem("rememberedUser");
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: isLoggedIn && !!savedUser,
    user: isLoggedIn && savedUser ? {email: savedUser} : null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
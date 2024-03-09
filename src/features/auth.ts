import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") || "")
    : null,
  isAuthenticated: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logoutFront: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo");
    },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { authenticate, setCredentials, logoutFront } = auth.actions;
export default auth.reducer;

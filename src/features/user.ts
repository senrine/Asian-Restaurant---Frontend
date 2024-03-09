import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, deleteUser } = user.actions;
export default user.reducer;

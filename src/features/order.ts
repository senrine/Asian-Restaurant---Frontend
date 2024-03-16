import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: localStorage.getItem("order")
    ? JSON.parse(localStorage.getItem("order") || "")
    : null,
};

const orders = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrUpdateOrder: (state, action) => {
      state.order = action.payload;
      localStorage.setItem("order", JSON.stringify(action.payload));
    },
    deleteOrder: (state) => {
      state.order = null;
      localStorage.removeItem("order");
    },
  },
});

export default orders.reducer;
export const { createOrUpdateOrder, deleteOrder } = orders.actions;

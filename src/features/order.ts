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
      state.order = action.payload.data.data;
      localStorage.setItem("order", JSON.stringify(action.payload.data.data));
    },
    deleteStoreOrder: (state) => {
      state.order = null;
      localStorage.removeItem("order");
    },
    changeDeliveryToStandard: (state) => {
      state.order = {
        ...state.order,
        standardDelivery: true,
        speedDelivery: false,
      };
    },
    changeDeliveryToSpeed: (state) => {
      state.order = {
        ...state.order,
        speedDelivery: true,
        standardDelivery: false,
      };
    },
  },
});

export default orders.reducer;
export const {
  createOrUpdateOrder,
  deleteStoreOrder,
  changeDeliveryToStandard,
  changeDeliveryToSpeed,
} = orders.actions;

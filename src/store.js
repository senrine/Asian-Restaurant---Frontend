import { configureStore } from "@reduxjs/toolkit";
import menu from "./features/menu";
export const store = configureStore({
  reducer: {
    menu,
  },
});
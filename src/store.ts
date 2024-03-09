import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api";
import menus from "./features/menu";
import user from "./features/user";
import auth from "./features/auth";
import order from "./features/order";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    menus,
    user,
    auth,
    order,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

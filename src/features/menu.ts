import { createSlice } from "@reduxjs/toolkit";
import { Menu } from "../types";

interface MenuState {
  menu: Menu[];
}
const initialState: MenuState = {
  menu: [],
};

const menus = createSlice({
  name: "menus",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setPicked: (state, action) => {
      state.menu = state.menu.map((menu) =>
        menu.id === action.payload ? { ...menu, picked: !menu.picked } : menu
      );
    },
  },
});
export const { setMenu, setPicked } = menus.actions;
export default menus.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: []
};

const menus = createSlice({
    name: "menus",
    initialState,
    reducers:{
        setMenu : (state, action) => {
            state.menu = action.payload;
        }
    }
})
export const {setMenu} = menus.actions
export default menus.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order : []
}

const orders = createSlice({
    name: "orders",
    initialState,
    reducers:{}
})

export default orders.reducer 
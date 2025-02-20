// State Management of Redux

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {}
})

export const { } = globalSlice.actions
export default globalSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "./authUserThunk";

const initialState = {
    token: null,
    isLoading: false,
    error: null,
}

const authUserSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registerUserThunk.pending, state => {
            state.isLoading = true;
        })
        .addCase(registerUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.token = action.payload.token;

        })
    }
});

export const authReducer = authUserSlice.reducer;
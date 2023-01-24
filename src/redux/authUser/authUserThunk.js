import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, token } from "services/userService";

export const registerUserThunk = createAsyncThunk('auth/register', async(formData, {rejectWithValue}) => {
    try {
        const data = await registerUser(formData);
        token.set(data.token)
        return data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {getUserData, loginUser, registerUser, token, userLogOut} from "services/userService";

export const registerUserThunk = createAsyncThunk('auth/register', async(formData, {rejectWithValue}) => {
    try {
        const data = await registerUser(formData);
        token.set(data.token)
        return data;
    } catch (e) {
        toast.error(`Oops! Something went wrong...${e.message}`);
        return rejectWithValue(e.message);
    }
});

export const loginUserThunk = createAsyncThunk('auth/login', async(formData, {rejectWithValue}) => {
    try {
        const data = await loginUser(formData);
        token.set(data.token)
        return data;
    } catch (e) {
        toast.error(`Oops! Something went wrong...${e.message}`);
        return rejectWithValue(e.message);
    }
});

export const getCurrentUserThunk = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if(!state.auth.token) return;
    token.set(state.auth.token);

    try {
        const data = await getUserData();
        return data;
    }
     catch (e) {
        if (e.request.status === 401) {
            token.unset();
            toast.error('Something went wrong, please log in again')
            return thunkAPI.rejectWithValue(e.request.status);
        }
        toast.error(`${e.message}`);
        return thunkAPI.rejectWithValue(e.request.status);
    }
});

export const logOutUserThunk = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
      try {
        await userLogOut();
        token.unset();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );



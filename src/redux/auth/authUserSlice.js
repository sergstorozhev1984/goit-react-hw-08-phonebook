import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserThunk, loginUserThunk, logOutUserThunk, registerUserThunk } from "./authUserThunk";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import { toast } from "react-toastify";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoading: false,
    isLoggedIn: false,
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
        .addCase(registerUserThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            toast.success('Acount was successfully created' )

        })
        .addCase(registerUserThunk.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
            if (state.error === 400 || state.error === 401) {
                toast.error('This account already exists, please log in')
            } else {
                toast.error(`${state.error}`);
            }
        })
        .addCase(loginUserThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUserThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            toast.success(`Welcome back, ${state.user.name}!`)
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            if (state.error === 400 || state.error === 401) {
                toast.error('This account doesn\'t exist, please sign up')
            } else {
                toast.error(`${state.error}`);
            }
        })
        .addCase(logOutUserThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(logOutUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success('See you again');
      })
      .addCase(logOutUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        toast.error('Something went wrong, please try again');
      })
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(getCurrentUserThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
        state.isLoggedIn = true;
        toast.success(`Welcome back, ${state.user.email}!`)
    })
    .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        if (state.error === 400 || state.error === 401) {
            toast.error('This account doesn\'t exist, please sign up')
        } else {
            toast.error(`${state.error}`);
        }
    })
    }
});

const persistConfig = {
    key: 'AUTH',
    storage,
    whitelist: ['token']
};

export const authReducer = authUserSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, authReducer);
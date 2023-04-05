import { createAction, createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./authOperation";

const initialState = {
    userData: { email: '',},
    accessToken: '',
    isLogin: false,
    loading: false,
    error: null,
};
export const addAccessToken = createAction('auth/token');

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [addAccessToken](state, { payload }) {
            state.accessToken = payload
        },

        [register.pending]: (state) => {
            state.loading = true
        },
        [register.fulfilled]: (state, { payload }) => {
            state.userData = { ...payload };
            state.isLogin = true;
            state.loading = false;
            
            //  state.accessToken = payload.accessToken;
        },
        [register.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },

        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, { payload }) => {
            state.isLogin = true;
            state.loading = false;
            state.userData = { ...payload.userData };
            state.accessToken = payload.accessToken;
        },
        [login.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },

        [logout.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled]:(state) => {
            state.userData = {};
            state.accessToken = '';
            state.isLogin = false;
            state.loading = false;
            
        },
        [logout.rejected]:(state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },

        [getCurrentUser.pending]:(state) => {
            state.loading = true;
            state.error = null;
        },
        [getCurrentUser.fulfilled]:(state, { payload }) => {
            state.isLogin = true;
            state.loading = false;
            state.userData.email = payload.email;
        },
        [getCurrentUser.rejected]:(state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.accessToken = '';
         },
    },
});

export default authSlice.reducer;


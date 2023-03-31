import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./authOperation";

const initialState = {
    userData: {},
    accessToken: '',
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending](state) {
            state.loading = true
        },
        [register.fulfilled](state, { payload }) {
            state.isLogin = true;
            state.loading = false;
            state.userData = { ...payload };
        },
        [register.rejected](state, { payload }) {
            state.loading = false;
            state.error = payload;
        },

        [login.pending](state) {
            state.loading = true;
        },
        [login.fulfilled](state, { payload }) {
            state.isLogin = true;
            state.loading = false;
            state.userData = { ...payload };
        },
        [login.rejected](state, { payload }) {
            state.loading = false;
            state.error = payload;
        },

        [logout.pending](state) {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled](state) {
            state.userData = {};
            state.accessToken = '';
            state.isLogin = false;
            state.loading = false;
            state.error = null;
        },
        [logout.rejected](state, { payload }) {
            state.loading = false;
            state.error = payload;
        },

        [getCurrentUser.pending](state) {
            state.loading = true;
            state.error = null;
        },
        [getCurrentUser.fulfilled](state, { payload }) {
            state.isLogin = true;
            state.loading = false;
            state.userData = payload;
        },
        [getCurrentUser.rejected](state, { payload }) {
            state.loading = false;
            state.error = payload;
            state.accessToken = '';
         },
    },
});

export default authSlice.reducer;

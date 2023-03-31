import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://protest-backend.goit.global/';

export const token = {
    set(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/register', userData);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
       
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', userData);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/logout');
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    '/user',
    async (_, { rejectWithValue, getState }) => {
        const { user } = getState();
        const { accessToken } = user;

        if (accessToken === null) {
            return rejectWithValue('Unable to fetch user');
        } try {
            token.set(accessToken);
            const { data } = await axios.get('/user');
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);

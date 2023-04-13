import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../auth/authOperation";

axios.defaults.baseURL = "https://protest-backend.goit.global";

export const getTechTest = createAsyncThunk(
  "qa-test/tech",
  async (_, { getState, rejectWithValue }) => {
    try {
      const value = getState().auth.accessToken;
      token.set(value);
      const { data } = await axios.get("/qa-test/tech");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTheoryTest = createAsyncThunk(
  "qa-test/theory",
  async (_, { getState, rejectWithValue }) => {
    try {
      const value = getState().auth.accessToken;
      token.set(value);
      const { data } = await axios.get("/qa-test/theory");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postTechTestResults = createAsyncThunk(
  "qa-test/tech-results",
  async (answers, { getState, rejectWithValue }) => {
    try {
      const value = getState().auth.accessToken;
      token.set(value);
      const { data } = await axios.post("/qa-test/tech-results", answers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postTheoryTestResults = createAsyncThunk(
  "qa-test/theory-results",
  async (answers, { getState, rejectWithValue }) => {
    try {
      const value = getState().auth.accessToken;
      token.set(value);
      const { data } = await axios.post("/qa-test/tech-results", answers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

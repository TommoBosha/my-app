import { createAction, createSlice } from "@reduxjs/toolkit";
import {
  getTechTest,
  getTheoryTest,
  postTechTestResults,
  postTheoryTestResults,
} from "./testOperation";

const initialState = {
  answers: { question: "", questionId: null, answers: null },
  isLoading: false,
  error: null,
  results: { result: "", mainMessage: "", secondaryMessage: "" },
  typeOfTesting: "",
};

export const addAccessToken = createAction("test/token");

const testSlice = createSlice({
  name: "test",
  initialState,

  reducers: {
    testingType: (state, { payload }) => {
      state.typeOfTesting = payload;
    },
  },

  extraReducers: {
    [getTechTest.pending]: (state) => {
      state.isLoading = true;
    },
    [getTechTest.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.answers.question = payload.question;
      state.answers.questionId = payload.questionId;
      state.answers.answers = payload.answers;
    },
    [getTechTest.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getTheoryTest.pending]: (state) => {
      state.isLoading = true;
    },
    [getTheoryTest.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.answers.question = payload.question;
      state.answers.questionId = payload.questionId;
      state.answers.answers = payload.answers;
    },
    [getTheoryTest.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [postTechTestResults.pending]: (state) => {
      state.isLoading = true;
    },
    [postTechTestResults.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.results.result = payload.result;
      state.results.mainMessage = payload.mainMessage;
      state.results.secondaryMessage = payload.secondaryMessage;
    },
    [postTechTestResults.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [postTheoryTestResults.pending]: (state) => {
      state.isLoading = true;
    },
    [postTheoryTestResults.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.results.result = payload.result;
      state.results.mainMessage = payload.mainMessage;
      state.results.secondaryMessage = payload.secondaryMessage;
    },
    [postTheoryTestResults.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { testingType } = testSlice.actions;
export default testSlice.reducer;

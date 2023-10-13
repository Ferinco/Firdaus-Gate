import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentInformation: null,
  parentInformation: null,
  payment: null,
};

const slices = createSlice({
  initialState,
  name: "admission",
  reducers: {
    stepOne: (state, payload) => {
      state.studentInformation = payload;
    },
    stepTwo: (state, payload) => {
      state.studentInformation = payload;
    },
    stepThree: (state, payload) => {
      state.studentInformation = payload;
    },
    stepFour: (state, payload) => {
      state.studentInformation = payload;
    },
  },
});

export default slices.reducer;

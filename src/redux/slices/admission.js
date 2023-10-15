import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentInformation: null,
  parentInformation: null,
  payment: null,
};

const slice = createSlice({
  initialState,
  name: "admission",
  reducers: {
    studentInformation: (state, action) => {
      state.studentInformation = action.payload;
    },
    parentInformation: (state, action) => {
      state.parentInformation = action.payload;
    },
    payment: (state, action) => {
      state.payment = action.payload;
    },
    stepFour: (state, action) => {
      state.studentInformation = action.payload;
    },
  },
});
export const { studentInformation, payment, parentInformation } = slice.actions;
// export const admissionInfo =(values)=> (dispatch)=> {
//   dispatch(slice)
// }

export default slice.reducer;

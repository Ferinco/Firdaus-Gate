import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
export const fetchStudentNames =(role, teacherId)=> createAsyncThunk(
  "students/fetchStudentNames",
  async () => {
    await UserService.getStudentNames().then((res) => {
      console.log(res.data);
      return res.data;
    });
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    studentNames: [],
  },
  reducers: {
    setStudentNames: (state, action) => {
      state.studentNames= action.payload;
    },
},
});
export const { reducer } = studentSlice;
export default studentSlice.reducer;
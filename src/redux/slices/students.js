import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  students: [],
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (params, thunkApi) => {
    const { teacherId } = params;
    try {
      const res = await UserService.getStudents(teacherId);
      return res;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    clearState: () => initialState,
    clearSuccess: () => (initialState.isSuccess = false),
  },
  extraReducers: (builder) => {
    // reducers for fetching students
    builder.addCase(fetchStudents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.students = action.payload.data;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    //  end fetching students
  },
});

export const { reducer } = studentSlice;
export default studentSlice.reducer;

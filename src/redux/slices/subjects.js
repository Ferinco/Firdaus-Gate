import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SubjectService } from "../../services/subjectService";

const initialState = {
    isLoading: false,
    isSuccess: false,
    error: null,
    subjects: [],
  };

  export const fetchSubjects = createAsyncThunk(
    "user/fetchSubjects",
    async (params) => {
      const { id } = params;
      try {
        const res = await SubjectService.getSubjects(id);
        return res;
      } catch (error) {
        console.log("error");
        // return thunkApi.rejectWithValue(error);
      }
    }
  )

  const subjectSlice = createSlice({
    name: "subjects",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        // reducers for fetching users
        builder.addCase(fetchSubjects.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(fetchSubjects.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.users = action.payload.data;
        });
        builder.addCase(fetchSubjects.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.error = action.payload;
        });
    }
  })

  export const {reducer} = subjectSlice
  export default subjectSlice.reducer
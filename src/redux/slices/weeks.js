import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WeeksService } from "../../services/weekService";
const initialState = {
  weeks: [],
  error: null,
  isLoading: false,
};

export const CreateWeek = createAsyncThunk(
  "weeks/createWeeks",
  async (values, { rejectWithValue }) => {
    try {
      const data = await WeeksService.createWeeks(values);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const FetchWeeks = createAsyncThunk(
  "weeks/fetchWeeks",
  async (thunk) => {
    try {
      const data = await WeeksService.getWeeks();
      console.log(data);
      return data;
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);


const slices = createSlice({
    name: "weeks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // fetch current term
      builder.addCase(FetchWeeks.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(FetchWeeks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weeks = action.payload.data;
      });
      builder.addCase(FetchWeeks.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      });

      builder.addCase(createTerm.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(createTerm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weeks = [...state.weeks, action.payload];
      });
      builder.addCase(createTerm.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      });
    },
  });

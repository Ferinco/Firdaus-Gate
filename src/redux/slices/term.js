import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TermService } from "../../services/termService";

const initialState = {
  terms: [],
  currentTerm: {},
  error: null,
  isLoading: false,
};

export const fetchCurrentTerm = createAsyncThunk(
  "term/fetchCurrentTerm",
  async (thunk) => {
    try {
      const data = await TermService.getCurrentTerm();
      return data;
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);
export const createTerm = createAsyncThunk(
  "term/createTerm",
  async (values, { rejectWithValue }) => {
    try {
      const data = await TermService.createTerm(values);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const slices = createSlice({
  name: "term",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch current term
    builder.addCase(fetchCurrentTerm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentTerm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentTerm = action.payload;
    });
    builder.addCase(fetchCurrentTerm.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
    // fetch current term ends here
    // fetch term
    builder.addCase(createTerm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTerm.fulfilled, (state, action) => {
      state.isLoading = false;
      state.terms = [...state.terms, action.payload];
    });
    builder.addCase(createTerm.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
    // fetch term ends here
  },
});

export default slices.reducer;

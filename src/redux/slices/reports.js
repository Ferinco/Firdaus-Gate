import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReportService } from "../../services/reportService";

export const getReports = createAsyncThunk(
  "reports/fetchReports",
  async (params, thunkApi) => {
    try {
      const response = await ReportService.getReports(params);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createReports = createAsyncThunk(
  "reports/createReports",
  async (params, thunkApi) => {
    const { reportData } = params;
    try {
      const response = await ReportService.createReport(reportData);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  isSuccess: false,
  reports: [],
};
const slices = createSlice({
  initialState,
  name: "reports",
  reducers: {
    // clearSuccess: () => (initialState.success = false),
    // clearState: () => initialState,
  },
  extraReducers: (builder) => {
    // create report promise check
    builder.addCase(createReports.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createReports.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isSuccess = true;
      state.reports = [...state.reports, action.payload];
    });
    builder.addCase(createReports.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //end of create report promise check

    // fetch reports promise check
    builder.addCase(getReports.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReports.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isSuccess = true;
      state.reports = action.payload;
    });
    builder.addCase(getReports.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // end of reports promise check
  },
});

export default slices.reducer;

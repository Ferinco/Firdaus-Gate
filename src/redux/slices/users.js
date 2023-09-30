import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  users: [],
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (params, thunkApi) => {
    try {
      const res = await UserService.findUsers(params);
      return res;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // reducers for fetching users
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    //  end fetching users
  },
});

export const { reducer } = userSlice;
export default userSlice.reducer;

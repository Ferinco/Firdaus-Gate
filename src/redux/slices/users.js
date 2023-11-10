import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  users: [],
  user: null
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
export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (params, thunkApi) => {
    const { id } = params;
    try {
      const res = await UserService.getUser(id);
      return res;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
)
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (params, thunkApi) => {
    const { id } = params;
    try {
      const res = await UserService.deleteUser(id);
      return res;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const editUser = createAsyncThunk(
  "users/editUser",
  async (params, thunkApi) => {
    try {
      const res = await UserService.updateUser(params);
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

    //reducers for fetching single user
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.data;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
//end of fetchuser

    // reducers for deleting users
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(action);
      console.log(state.users);
      state.users = state.users.filter(
        (item) => item._id !== action.payload.data._id
      );
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    //  end deleting users

    // reducers for editing users
    builder.addCase(editUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const updatedUser = state.users.map((user) => {
        if (user._id === action.payload.data._id) return updatedUser;
        else return user;
      });
      state.users = [...state.users, updatedUser];
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    //  end editing users
  },
});

export const { reducer } = userSlice;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUserLoginStatus, createUser } from './authAPI';

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const checkUserLoggedInAsync = createAsyncThunk(
  "user/checkUserLoginStatus",
  async (loginInfo) => {
    const response = await checkUserLoginStatus(loginInfo);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserLoggedInAsync.fulfilled, (state, action) => {
        state.status = "loading";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserLoggedInAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export const { increment } = userSlice.actions;
export const selectLoggedInUser = (state, action) => state.auth.loggedInUser;
export const selectError = (state, action) => state.auth.error;

export default userSlice.reducer;

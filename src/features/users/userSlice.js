import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: {
    listUser: {},
  },
};

export const fetchDataListUser = createAsyncThunk(
  "user/fetchDataListUser",
  async () => {}
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(fetchDataListUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDataListUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchDataListUser.fulfilled, (state, action) => {
        state.category.listCategory = action.payload;
        state.isLoading = false;
      });
  },
});

// export const { } = productSlice.actions;

// Selector
export const selectListPost = (state) => state.user.users.listUser;

export default userSlice.reducer;

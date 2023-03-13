import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/config";

const initialState = {
  profile: {
    jwt_token: "",
  },
};

export const fetchTokenLogin = createAsyncThunk(
  "post/fetchTokenLogin",
  async (payload) => {
    const res = await http.post("/api/v1/token", payload);
    console.log("token", res.data.jwt_token);
    return res.data.jwt_token;
  }
);

export const authenSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      // .addCase(fetchTokenLogin.pending, (state, action) => {
      //     state.isLoading = true
      // })
      // .addCase(fetchTokenLogin.rejected, (state, action) => {
      //     state.isLoading = false
      // })
      .addCase(fetchTokenLogin.fulfilled, (state, action) => {
        state.profile.jwt_token = action.payload;
        // state.isLoading = false
      });
  },
});

// export const { } = productSlice.actions;

// Selector
export const selectListPost = (state) => state.post.posts.listPost;

export default authenSlice.reducer;

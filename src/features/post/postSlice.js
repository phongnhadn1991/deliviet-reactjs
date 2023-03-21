import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/config";

const initialState = {
  isLoading: false,
  posts: {
    listPost: [],
  },
  category: {
    listCategory: [],
  },
};

export const fetchDataPost = createAsyncThunk(
  "post/fetchDataPost",
  async (payload) => {
    const res = await http.get(`/wp/v2/posts?_embed&author=${payload}`);
    return res.data;
  }
);

// DELETE POST
export const deleteDataPost = createAsyncThunk(
  "post/deleteDataPost",
  async (payload) => {
    const res = await http.delete(`/wp/v2/posts/${payload}`);
    return res.data;
  }
);

export const fetchDataCategory = createAsyncThunk(
  "post/fetchDataCategory",
  async () => {
    const res = await http.get("/wp/v2/categories");
    return res.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(fetchDataPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDataPost.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchDataPost.fulfilled, (state, action) => {
        state.posts.listPost = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchDataCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDataCategory.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchDataCategory.fulfilled, (state, action) => {
        state.category.listCategory = action.payload;
        state.isLoading = false;
      })

      // delete post
      .addCase(deleteDataPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteDataPost.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteDataPost.fulfilled, (state, action) => {
        state.posts.listPost = action.payload;
        state.isLoading = false
      })
  },
});

// export const { } = productSlice.actions;

// Selector
export const selectListPost = (state) => state.post.posts.listPost;
export const selectListCate = (state) => state.post.category.listCategory;

export default postSlice.reducer;

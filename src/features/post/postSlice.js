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

// CATEGORY - FETCH
export const fetchDataCategory = createAsyncThunk(
  "post/fetchDataCategory",
  async () => {
    const res = await http.get("/wp/v2/categories");
    return res.data;
  }
);

// CATEGORY - DELETE
export const deleteCategoryByID = createAsyncThunk(
  "post/deleteCategoryByID",
  async (payload) => {
    await http.delete(`/wp/v2/categories/${payload}?force=true`);
    return payload;
  }
);

// CATEGORY - DELETE
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
        state.isLoading = false;
      });

    builer
      .addCase(deleteCategoryByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteCategoryByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category.listCategory = state.category.listCategory.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export const { deleteCateByID } = postSlice.actions;

// Selector
export const selectListPost = (state) => state.post.posts.listPost;
export const selectListCate = (state) => state.post.category.listCategory;

export default postSlice.reducer;

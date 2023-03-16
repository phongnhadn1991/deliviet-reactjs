import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http_token } from "../../config/config";

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
  async () => {
    fetch("http://localhost/wp-json/wp/v2/posts?_embed", {
      headers: {
        "Content-Type": "application/json",
        Authentication: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJxdWFudHJpIiwiaWF0IjoxNjc4OTQwODM0LCJleHAiOjE4MzY2MjA4MzR9.1MLQYLHGFfTeigunAC7pksSjLNy7Id7-x0w33RfnAZg'
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    const res = await http_token.get("/wp/v2/posts?_embed");
    return res.data;
  }
);

export const fetchDataCategory = createAsyncThunk(
  "post/fetchDataCategory",
  async () => {
    const res = await http_token.get("/wp/v2/categories");
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
      });
  },
});

// export const { } = productSlice.actions;

// Selector
export const selectListPost = (state) => state.post.posts.listPost;
export const selectListCate = (state) => state.post.category.listCategory;

export default postSlice.reducer;

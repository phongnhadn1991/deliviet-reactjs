import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/config";

const initialState = {
  isLoading: false,
  posts: {
    listPost: [],
  },
  category: {
    itemCateogry: '',
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
  async (payload, { dispatch }) => {
    const res = await http.delete(`/wp/v2/posts/${payload}`);
    dispatch(fetchDataPost(res.data.author));
    return payload;
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
  async (payload, { dispatch }) => {
    await http
      .delete(`/wp/v2/categories/${payload}?force=true`)
      .then((resp) => {
        dispatch(fetchDataCategory(resp.data.author));
      })
      .catch((error) => console.log(error));
    return payload;
  }
);

// CATEGORY - GET DETAIL
export const getCategoryByID = createAsyncThunk(
  "post/getCategoryByID",
  async (payload) => {
    const res = await http.get(`/wp/v2/categories/${payload}`);
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
        state.isLoading = false;
        state.posts.listPost = state.posts.listPost.filter(
          (item) => item.id !== action.payload
        );
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

    builer
      .addCase(getCategoryByID.pending, (state, action) => {})
      .addCase(getCategoryByID.fulfilled, (state, action) => {
        state.category.itemCateogry = action.payload
      });
  },
});

export const { deleteCateByID } = postSlice.actions;

// Selector
export const selectListPost = (state) => state.post.posts.listPost;
export const selectListCate = (state) => state.post.category.listCategory;
export const selectItemCate = (state) => state.post.category.itemCateogry

export default postSlice.reducer;

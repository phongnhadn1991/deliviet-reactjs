import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingScreen: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingOpen: (state, action) => {
      state.isLoadingScreen = true;
    },
    loadingClose: (state, action) => {
      state.isLoadingScreen = false;
    },
  },
  extraReducers: (builer) => {},
});

export const { loadingOpen, loadingClose } = loadingSlice.actions;

export default loadingSlice.reducer;

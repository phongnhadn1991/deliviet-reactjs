import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../config/config";

const initialState = {
  isAuthenticated: !localStorage.getItem('access_token') ? false : true,
  profile: {},
};

export const fetchTokenLogin = createAsyncThunk(
  "post/fetchTokenLogin",
  async (payload) => {
    const res = await http.post("/api/v1/token", payload);
    if (res) {
      localStorage.setItem("access_token", res.data.jwt_token);
      const config = {
        headers: {
          Authorization: `Bearer ${res.data.jwt_token}`,
        },
      };
      const resData = await http.get("/api/v1/token-validate", config);
      return resData.data;
    }
  }
);

export const authenSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("profile_user");
      state.isAuthenticated = false;
      state.profile = {};
    },
  },
  extraReducers: (builer) => {
    builer.addCase(fetchTokenLogin.fulfilled, (state, action) => {
      console.log(state.isAuthenticated);
      console.log(action.payload);
      if (action.payload) {
        state.isAuthenticated = true;
        state.profile = action.payload;
        localStorage.setItem("profile_user", JSON.stringify(state.profile));
      }
    });
  },
});

export const { logOutUser } = authenSlice.actions;

// Selector
export const isAuthenticated = (state) => state.authen.isAuthenticated;

export default authenSlice.reducer;

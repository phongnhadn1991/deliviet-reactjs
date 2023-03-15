import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/config";


const initialState = {
  isAuthenticated: !localStorage.getItem('access_token') ? false : true,
  profile: {
    jwt_token: null,
    roles: null,
    user: null
  },
};


export const fetchTokenLogin = createAsyncThunk(
  "post/fetchTokenLogin",
  async (payload) => {
    const res = await http.post('/simple-jwt-login/v1/auth', payload)
    if (res) {
      localStorage.setItem('access_token', res.data.data.jwt)
      const config = {
        headers: {
          'Authorization': `Bearer ${res.data.data.jwt}`
        }
      }
      const resData = await http.get('/simple-jwt-login/v1/auth/validate', config)
      return resData.data.data
    }
  }
);

export const authenSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('profile_user')
      state.isAuthenticated = false
      state.profile = {}
    }
  },
  extraReducers: (builer) => {
    builer
      .addCase(fetchTokenLogin.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true
          state.profile.jwt_token = action.payload.jwt
          state.profile.roles = action.payload.roles
          state.profile.user = action.payload.user
          localStorage.setItem('profile_user', JSON.stringify(state.profile))
        }
      });
  },
});

export const { logOutUser } = authenSlice.actions;

// Selector
export const isAuthenticated = (state) => state.authen.isAuthenticated;

export default authenSlice.reducer;

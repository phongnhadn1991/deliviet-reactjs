import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/config";

const initialState = {
  isAuthenticated: !localStorage.getItem("access_token") ? false : true ,
  profileUser: {},
};

//  Config LocalStorage
export const setAccessTokenToLS = (access_token) => {
  localStorage.setItem('access_token', access_token)
}

export const setProfileToLS = (profile) => {
  localStorage.setItem('profile_user', JSON.stringify(profile))
}

export const getAccessTokenFromLS = () => {
  try {
    const token = localStorage.getItem("access_token");
    return token;
  } catch (error) {
    console.log(error);
    return "";
  }
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile_user')
  return result ? JSON.parse(result) : null
}
export const clearLS = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("profile_user");
}

export const fetchTokenLogin = createAsyncThunk(
  "post/fetchTokenLogin",
  async (payload) => {
    const res = await http.post("/api/v1/token", payload)
    return res.data.jwt_token
  }
);

export const authenSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      state.isAuthenticated = false;
      state.profileUser = {};
      clearLS()
    },
  },
  extraReducers: (builer) => {
    builer
      .addCase(fetchTokenLogin.fulfilled, (state, action) => {
        const jwt_token = action.payload
        setAccessTokenToLS(jwt_token)

        http.get("/wp/v2/users/me")
          .then((res) => setProfileToLS(res.data))
          .catch(error => console.log(error))
        state.profileUser = getProfileFromLS();
        state.isAuthenticated = true
      })
  },
});

export const { logOutUser } = authenSlice.actions;

// Selector
export const isAuthenticated = (state) => state.authen.isAuthenticated;

export default authenSlice.reducer;

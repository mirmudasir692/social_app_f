import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: localStorage.getItem("access_token") || "",
  refresh_token: localStorage.getItem("refresh_token") || "",
  user_id: localStorage.getItem("user_id") || "",
  is_authenticated: localStorage.getItem("is_authenticated") || false,
  profile_pic: localStorage.getItem("profile_pic") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login_user: (state, action) => {
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      localStorage.setItem("user_id", action.payload.user_id);
      localStorage.setItem("is_authenticated", action.payload.is_authenticated);
      localStorage.setItem("profile_pic", action.payload.profile_pic);
      state.profile_pic = action.payload.profile_pic;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.user_id = action.payload.user_id;
      state.is_authenticated = action.payload.is_authenticated;
    },
    logout_user: (state) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("is_authenticated");
      localStorage.removeItem("profile_pic");
      state.profile_pic = null;
      state.access_token = "";
      state.refresh_token = "";
      state.user_id = "";
      state.is_authenticated = false;
    },
    refresh_tokens: (state, action) => {
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
 
  },
});

export const {
  login_user,
  refresh_tokens,
  logout_user,
} = authSlice.actions;
export const is_user_authenticated = (state) => state.auth.is_authenticated;
export const refresh_token = (state) => state.auth.refresh_token;
export const access_token = (state) => state.auth.access_token;
export const user_id = (state) => state.auth.user_id;
export const profile_pic = (state) => state.auth.profile_pic;

export default authSlice.reducer;

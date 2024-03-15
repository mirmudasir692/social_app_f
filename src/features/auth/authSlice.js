import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    "access_token": localStorage.getItem("access_token") || "",
    "refresh_token": localStorage.getItem("refresh_token") || "",
    "user_id" : localStorage.getItem("user_id") || "",
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login_user: (state, action)=>{
            localStorage.setItem("access_token", action.payload.access_token)
            localStorage.setItem("refresh_token", action.payload.refresh_token)
            localStorage.setItem("user_id", action.payload.user_id)
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            state.user_id = action.payload.user_id
        }
    }
})

export const {login_user} = authSlice.actions

export default authSlice.reducer
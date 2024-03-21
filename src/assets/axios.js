import axios from "axios";
import { baseUrl } from "../conf/conf";
import { store } from "../app/store";
import {access_token, logout_user } from "../features/auth/authSlice";
import RefreshAccessToken from "../api/user/refreshtoken";




const AxiosInstance = axios.create({
    baseURL:baseUrl,
})
AxiosInstance.interceptors.request.use(async (req)=>{
    const authToken = access_token(store.getState())
    if(authToken){
        req.headers["Authorization"] = `Bearer ${authToken}`
    }
    return req
})
AxiosInstance.interceptors.response.use(async (res)=>{
    return res
},
async (error)=>{
    if(error.response && error.response.status===401){
        const dispatch = store.dispatch
        try{
            await RefreshAccessToken()
            const newAuthToken = access_token(store.getState())
            error.config.headers["Authorization"] = `Bearer ${newAuthToken}`
            return AxiosInstance(error.config)
        }catch(refresherror){
            store.dispatch(logout_user())
            throw refresherror
        }
    }
    throw error
}
)

export default AxiosInstance
import { baseUrl } from "../../conf/conf"
import axios from "axios"
import {store} from "../../app/store"
import {login_user} from "../../features/auth/authSlice"
import AxiosInstance from "../../assets/axios"



const login_user_api = async({data, changeErrorQuuery, changeLoadingState, changeErrorState, clear_inputs}) =>{
    const loginurl = `${baseUrl}/accounts/login/`
    changeLoadingState(true)
    try{
        const response = await axios.post(loginurl, data)
        if(typeof(response.data) === "string"){
            changeErrorState(true)
            changeErrorQuuery(response.data)
        }
        else if(typeof(response.data) === "object"){
            store.dispatch(login_user(response.data))
            return true
        }
        changeLoadingState(false)
        clear_inputs()
    }
    catch(error){
        changeLoadingState(false)
        changeErrorState(true)
        changeErrorQuuery(error && error.response && error.response.data)
        console.log("error occured", error.response.data)
        clear_inputs()
    }
}


const get_user_profile = async()=>{
    const url = `${baseUrl}/accounts/myaccount/`
    try{
        const response = await AxiosInstance.get(url)
        console.log("profile info received", response.data)
        return response.data
    }catch(error){
        console.log("error while getting profile information",error)
    }

}





export {login_user_api, get_user_profile}
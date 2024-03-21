import axios from "axios"
import { store } from "../../app/store"
import { baseUrl } from "../../conf/conf"
import { refresh_token as refresh_token_action , refresh_tokens } from "../../features/auth/authSlice"

const RefreshAccessToken =async()=>{
    const url = `${baseUrl}/accounts/refresh/`
    const refresh_token_ = refresh_token_action(store.getState())
    try{
        const response = await axios.post(url, {
            "refresh_token": refresh_token_
        })
            store.dispatch(refresh_tokens(response.data))
    }catch(error){
        console.log("error while refreshing", error)
        throw error
    }   
}
export default RefreshAccessToken
import { useState } from "react"
import axios from "axios"
import { baseUrl } from "../../conf/conf"

const Login =() =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorquery, setErrorquery] = useState("")
    const [error, setError] = useState(false)
    const loginurl = `${baseUrl}/accounts/login/`


    const clear_inputs =()=>{
        setUsername("")
        setPassword("")
    }

    const login_user = async(e) =>{
        e.preventDefault()
        setLoading(true)
        try{
            const data ={
                "username":username,
                "password":password
            }
            const response = await axios.post(loginurl, data)
            console.log("response received", response.data)
            if(typeof(response.data) === "string"){
                setError(true)
                setErrorquery(response.data)
            }
            else if(typeof(response.data) === "object"){
                console.log(response.data)
            }
            setLoading(false)
            clear_inputs()
        }
        catch(error){
            setLoading(false)
            setError(true)
            setErrorquery(error && error.response && error.response.data)
            console.log("error occured", error.response.data)
            clear_inputs()
        }
    }

    return (
        <>
        <div class="w-full ml-auto mr-auto max-w-lg min-h-dvh mt-20">
  <form onSubmit={(e)=>login_user(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h3 className="text-blue-600 font-bold text-3xl mb-3 opacity-70">Login</h3>
    {
        error && <p className="text-red-400 font-semibold ml-auto flex justify-center text-lg">{errorquery}</p>
    }
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        {
            loading ?
            <span class="loader"></span> :
            "Sign In"
        }
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
        </>
    )
}
export default Login
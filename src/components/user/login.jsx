import { useState } from "react"
import { baseUrl } from "../../conf/conf"
import { login_user_api } from "../../api/user/userapi"
import {Link, useNavigate} from "react-router-dom"

const Login =() =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorquery, setErrorquery] = useState("")
    const [error, setError] = useState(false)
    const navigator = useNavigate()

    const changeLoadingState = (value) =>{
      setLoading(value)
    }
    const changeErrorQuuery =(value)=>{
      setErrorquery(value)
    }
    const changeErrorState =(value)=>{
      setError(value)
    }

    const clear_inputs =()=>{
        setUsername("")
        setPassword("")
    }

    const handle_login = async(e) =>{
        e.preventDefault()
        const data ={
          "username":username,
          "password":password
      }
      const response = await login_user_api({data, changeErrorQuuery, changeLoadingState, changeErrorState, clear_inputs})
      if(response){
        navigator("/")
      }
    }

    return (
        <>
        <div class="w-full ml-auto mr-auto max-w-lg min-h-dvh mt-20">
  <form onSubmit={(e)=>handle_login(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
      <Link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </Link>
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
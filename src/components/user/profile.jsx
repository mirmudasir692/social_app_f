import { useEffect, useState } from "react"
import { get_user_profile } from "../../api/user/userapi"
import { baseUrl } from "../../conf/conf"
import { useDispatch } from "react-redux"
import { logout_user } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

const Profile = ()=>{
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const navigator = useNavigate()

    useEffect(()=>{
        const fetchuserprofile = async()=>{
            try{
                const userData = await get_user_profile()
                setUser(userData)
                console.log("user is ", userData)
            }catch(error){
                console.log("Error fetching user profile", error)
            }
        }
        fetchuserprofile()
    },[])
    const logout_user_handler = async()=>{
        dispatch(logout_user())
        navigator("/")
    }
    return (
        <section class="w-full overflow-hidden dark:bg-gray-900">
        <div class="flex flex-col">
            <img src={`${baseUrl}${ user && user.profile_pic}`} alt="User Cover"
                    class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem] max-w-fit mx-auto rounded-full max-sm:w-36" />
    
            <div class="sm:w-[80%] xs:w-[90%] mx-auto flex">
                
    
                <h1
                    class="w-full text-left font-bold my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl text-4xl mb-10 flex justify-center max-sm:text-2xl max-sm:mb-2">
                    {user && user.username}</h1>
    
            </div>
    
            <div
                class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4 max-w-1/2">
    
    
                <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                    <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                        <div class="w-full">
                            <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div class="flex flex-col pb-3">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
                                    <dd class="text-lg font-semibold">{user && user.name}</dd>
                                </div>
                                <div class="flex flex-col py-3">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of Birth</dt>
                                    <dd class="text-lg font-semibold">{user && user.dob}</dd>
                                </div>
                                <div class="flex flex-col py-3">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
                                    <dd class="text-lg font-semibold">{
                                   user && (
                                    user.gender === "M" ? "Male" : user.gender === "F" ? "Female" : "Other"
                                   )
                                    }</dd>
                                </div>
                            </dl>
                        </div>
                        <div class="w-full">
                            <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                <div class="flex flex-col pt-3">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                                    <dd class="text-lg font-semibold">{user && user.mobile}</dd>
                                </div>
                                <div class="flex flex-col pt-3">
                                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                    <dd class="text-lg font-semibold">{user && user.email}</dd>
                                </div>
    
                                
                            </dl>
                        </div>
                    </div>
                    <button onClick={()=>logout_user_handler()} className="bg-white py-1 mx-auto font-black text-xl px-5 rounded-md hover:bg-slate-600 hover:text-white hover:border hover:border-b">
                        logout
                    </button>
                    
                </div>
    
    
            </div>
        </div>
    </section>
    

    )
}
export default Profile
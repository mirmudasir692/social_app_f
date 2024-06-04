import { useEffect, useState } from "react";
import { get_user_profile } from "../../api/user/userapi";
import { baseUrl } from "../../conf/conf";
import { useDispatch } from "react-redux";
import { logout_user, username } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import UserBlogs from "../blogs/userblogs";

const Profile = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [showBlogs, setShowBlogs] = useState(true);
  const [showMoments, setShowMoments] = useState(false);

  useEffect(() => {
    const fetchuserprofile = async () => {
      try {
        const userData = await get_user_profile();
        setUser(userData);
        console.log("user is ", userData);
      } catch (error) {
        console.log("Error fetching user profile", error);
      }
    };
    fetchuserprofile();
  }, []);
  const logout_user_handler = async () => {
    dispatch(logout_user());
    navigator("/");
  };

  return (
    <div>
      <main class="bg-gray-100 bg-opacity-25">
        <div class="lg:w-8/12 lg:mx-auto mb-8">
          <header class="flex flex-wrap items-center p-4 md:py-8">
            <div class="md:w-3/12 md:ml-16">
              <img
                class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                       border-2 border-pink-600 p-1"
                src={user && `${baseUrl}${user.profile_pic}`}
                alt="profile"
              />
            </div>

            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {user && user.username}
                </h2>

                <span
                  class="inline-block fas fa-certificate fa-lg text-blue-500 
                                 relative mr-6  text-xl transform -translate-y-2 top-2 max-sm:top-1 max-sm:left-1"
                  aria-hidden="true"
                >
                  <i
                    class="fas fa-check text-white text-xs absolute inset-x-0
                                 ml-1 mt-px"
                  ></i>
                </span>
              </div>

              <ul class="hidden md:flex space-x-8 mb-4">
                <li>
                  <span class="font-semibold">{user && user.num_blogs}</span>{" "}
                  blogs
                </li>

                <li>
                  <span class="font-semibold">{user && user.num_blogs}</span>{" "}
                  moments
                </li>

                <li>
                  <span class="font-semibold">
                    {user && user.followers_num}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span class="font-semibold">
                    {user && user.following_num}
                  </span>{" "}
                  following
                </li>
              </ul>

              <div class="hidden md:block">
                <h1 class="font-semibold">{user && user.name}</h1>
                <p>{user && user.bio}</p>
              </div>
            </div>

            <div class="md:hidden text-sm my-2">
              <h1 class="font-semibold">ByteWebster</h1>
              <span class="bioclass">Internet company</span>
              <p>{user && user.bio}</p>
              <span>
                <strong>www.bytewebster.com</strong>
              </span>
            </div>
          </header>

          <div class="px-px md:px-3">
            <ul
              class="flex md:hidden justify-around space-x-8 border-t 
                  text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span class="font-semibold text-gray-800 block">
                  {user && user.num_blogs}
                </span>
                blogs
              </li>
              <li>
                <span class="font-semibold text-gray-800 block">
                  {user && user.num_blogs}
                </span>
                moments
              </li>

              <li>
                <span class="font-semibold text-gray-800 block">
                  {user && user.followers_num}
                </span>
                followers
              </li>
              <li>
                <span class="font-semibold text-gray-800 block">
                  {user && user.following_num}
                </span>
                following
              </li>
            </ul>
            <br />
            <br />
            <ul
              class="flex items-center justify-around md:justify-center space-x-12  
                      uppercase tracking-widest font-semibold text-xs text-gray-600
                      border-t"
            >
              <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <button
                  onClick={() => {
                    setShowBlogs((preValue) => !preValue);
                    setShowMoments((preValue) => !preValue);
                  }}
                  class="inline-block p-3"
                  href="#"
                >
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline">blogs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setShowBlogs((preValue) => !preValue);
                    setShowMoments((preValue) => !preValue);
                  }}
                  class="inline-block p-3"
                  href="#"
                >
                  <i class="far fa-square text-xl md:text-xs"></i>
                  <span class="hidden md:inline">Moments</span>
                </button>
              </li>
              <li>
                <a class="inline-block p-3" href="#">
                  <i
                    class="fas fa-user border border-gray-500
                               px-1 pt-1 rounded text-xl md:text-xs"
                  ></i>
                  <span class="hidden md:inline">tagged</span>
                </a>
              </li>
            </ul>

            {showBlogs && <UserBlogs />}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Profile;

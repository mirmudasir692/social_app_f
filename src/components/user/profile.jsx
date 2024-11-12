import { useEffect, useState } from "react";
import { get_user_profile, update_user } from "../../api/user/userapi";
import { baseUrl } from "../../conf/conf";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FollowersContainer from "./followers";
import FollowingList from "./followings";

const Profile = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [showfollowers, setShowFollowers] = useState(false);
  const [showfollowings, setShowFollowings] = useState(false);
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [profile_pic, setProfile_pic] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchuserprofile = async () => {
      try {
        const userData = await get_user_profile();
        setUser(userData);
        setUsername(userData.username);
        setBio(userData.bio);
        setName(userData.name);
        setProfile_pic(userData.profile_pic);
        console.log("user is ", userData);
      } catch (error) {
        console.log("Error fetching user profile", error);
      }
    };
    fetchuserprofile();
  }, []);
  const handle_image_selection = (e) => {
    const file = e.target.files[0];
    setProfile_pic(file);
  };
  const update_user_handler = async () => {
    try {
      const response = await update_user({
        username,
        name,
        profile_pic,
        password,
        bio,
      });
      if (response.status === 200) {
        setEdit(false);
        
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col">
      <main class="bg-gray-100 bg-opacity-25 max-lg:w-96">
        <div class="lg:w-8/12 lg:mx-auto mb-8">
          <header class="flex flex-wrap items-center p-4 md:py-8">
            <div class="md:w-3/12 md:ml-16">
              {!edit ? (
                <img
                  class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                       border-2 border-pink-600 p-1"
                  src={user && `${baseUrl}${user && user.profile_pic}`}
                  alt="profile"
                />
              ) : (
                <div class="py-20 bg-white px-2">
                  <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <div class="md:flex">
                      <div class="w-3/4 p-3">
                        <div class="relative border-dotted h-48 border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center rounded-full">
                          <div class="absolute">
                            <div class="flex flex-col items-center">
                              <i class="fa fa-folder-open fa-4x text-blue-700 text-4xl"></i>
                            </div>
                          </div>

                          <input
                            type="file"
                            class="h-full w-full opacity-0"
                            name=""
                            accept=".png, .jpg, .jpeg"
                            onClick={(e) => handle_image_selection(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                {!edit ? (
                  <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {user && user.username}
                  </h2>
                ) : (
                  <div class="flex">
                    <input
                      name="field_name"
                      class="border border-2 rounded-r px-4 py-2 w-full rounded-lg mt-1"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                )}

                <span
                  class={`inline-block fas fa-certificate fa-lg text-blue-500 
                                 relative mr-6  text-xl transform -translate-y-2 top-2 max-sm:top-1 max-sm:left-1 ${
                                   edit ? "hidden" : "block"
                                 }`}
                  aria-hidden="true"
                >
                  <i
                    class="fas fa-check text-white text-xs absolute inset-x-0
                                 ml-1 mt-px"
                  ></i>
                </span>
              </div>

              <div>
                {!edit ? (
                  <p className="text-md font-thin">{user && user.bio}</p>
                ) : (
                  <div>
                    <label
                      for="bio"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Add Bio
                    </label>
                    <textarea
                      id="bio"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                )}
              </div>

              <ul class="hidden md:flex space-x-8 mb-4 mt-5">
                <li>
                  <span class="font-semibold">{user && user.num_blogs}</span>{" "}
                  blogs
                </li>

                <li>
                  <span class="font-semibold">{user && user.num_blogs}</span>{" "}
                  moments
                </li>

                <li>
                  <button
                    onClick={() => {
                      setShowFollowers((preValue) => {
                        // If followings are being shown, hide them before toggling followers
                        if (showfollowings) {
                          setShowFollowings(false);
                        }
                        // Toggle followers state
                        return !preValue;
                      });
                    }}
                  >
                    <span className="font-semibold">
                      {user && user.followers_num}
                    </span>{" "}
                    followers
                  </button>
                </li>
                <button
                  className=""
                  onClick={() =>
                    setShowFollowings((preValue) => {
                      if (showfollowers) {
                        setShowFollowers(false);
                      }
                      return !preValue;
                    })
                  }
                >
                  <li>
                    <span class="font-semibold">
                      {user && user.following_num}
                    </span>{" "}
                    following
                  </li>
                </button>
              </ul>

              <div class="hidden md:block">
                {!edit ? (
                  <h1 class="font-semibold">{user && user.name}</h1>
                ) : (
                  <div class="mb-6 text-black">
                    <label
                      for="success"
                      class="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Edit Name
                    </label>
                    <input
                      type="text"
                      id="success"
                      class="bg-green-50 border border-black dark:text-gray-400 text-sm rounded-lg block w-full p-2.5"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}
                <div class={`max-w-sm ${edit ? "block" : "hidden"}`}>
                  <label class="block text-sm mb-2 dark:text-white">
                    Enter your password to proceed
                  </label>
                  <div class="relative">
                    <input
                      id="hs-toggle-password"
                      type={`${showPassword ? "text" : "password"}`}
                      class="py-3 ps-4 pe-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your password to proceed"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                      class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <svg
                        class="shrink-0 size-3.5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          class="hs-password-active:hidden"
                          d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                        ></path>
                        <path
                          class="hs-password-active:hidden"
                          d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                        ></path>
                        <path
                          class="hs-password-active:hidden"
                          d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                        ></path>
                        <line
                          class="hs-password-active:hidden"
                          x1="2"
                          x2="22"
                          y1="2"
                          y2="22"
                        ></line>
                        <path
                          class="hidden hs-password-active:block"
                          d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                        ></path>
                        <circle
                          class="hidden hs-password-active:block"
                          cx="12"
                          cy="12"
                          r="3"
                        ></circle>
                      </svg>
                    </button>
                  </div>
                </div>
                <p>{user && user.bio}</p>
              </div>
            </div>
          </header>

          <div class="px-px md:px-3">
            <br />
            {showfollowers && <FollowersContainer />}
            {showfollowings && <FollowingList />}
            <br />
          </div>
        </div>
      </main>
      <div className="flex mx-auto gap-10">
        <button
          onClick={() => update_user_handler()}
          class={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow
          ${!edit ? "hidden" : "block"}`}
        >
          Save
        </button>
        <button
          className="mt-5 text-2xl"
          onClick={() => setEdit((preValue) => !preValue)}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  );
};
export default Profile;

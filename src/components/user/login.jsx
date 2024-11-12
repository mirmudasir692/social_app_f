import { useState, useEffect } from "react";
import { baseUrl, fronturl } from "../../conf/conf";
import { login_user_api } from "../../api/user/userapi";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login_user } from "../../features/auth/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorquery, setErrorquery] = useState("");
  const [error, setError] = useState(false);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handle_login = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    // Ensure CSRF token is included in the request for login
    const response = await login_user_api({
      data,
      changeErrorQuuery: setErrorquery,
      changeLoadingState: setLoading,
      changeErrorState: setError,
      clear_inputs: () => {
        setUsername("");
        setPassword("");
      },
    });

    if (response) {
      navigator("/"); // Redirect on successful login
    }
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const google_login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const access_token = tokenResponse.access_token; // This should be a valid Google access token
      console.log("Access Token:", access_token); // Log the access token to verify

      try {
        const response = await axios.post(
          `${baseUrl}/accounts/google/callback/`, // Your backend URL
          { access_token: access_token },
          { withCredentials: true } // Ensure cookies are sent with the request
        );

        console.log("Response from Django:", response.data);
        dispatch(login_user(response.data));
        navigator("/");
      } catch (error) {
        console.error(
          "Error sending token to backend:",
          error.response ? error.response.data : error.message
        );
      }
    },
  });

  // Get CSRF token from cookies
  const csrfToken = getCookie("csrftoken");
  console.log("csrf", csrfToken);
  return (
    <>
      <div className="w-full ml-auto mr-auto max-w-lg min-h-dvh mt-20">
        <form
          onSubmit={handle_login}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="text-blue-600 font-bold text-3xl mb-3 opacity-70">
            Login
          </h3>
          {error && (
            <p className="text-red-400 font-semibold ml-auto flex justify-center text-lg">
              {errorquery}
            </p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              required
            />
            <p className="text-red-500 text-xs italic">Write Your Password</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full rounded-full mb-3"
              type="submit"
            >
              {loading ? <span className="loader"></span> : "Sign In"}
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <button
              onClick={() => google_login()}
              type="button"
              className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              Continue with Google
              <img
                className="w-6"
                src="public/7123025_logo_google_g_icon.png"
                alt=""
              />
            </button>
            <button
              onClick={() => navigator("/register")}
              className="px-2 bg-green-700 text-white py-1 rounded-full w-3/4 flex justify-center mx-auto hover:bg-green-900"
            >
              Sign Up
            </button>
          </div>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-10"
            to="#"
          >
            Forgot Password?
          </Link>
        </form>

        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Saad Writes. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;

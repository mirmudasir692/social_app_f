import "./App.css";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import router from "./router.jsx";
import { google_client_id } from "./conf/conf.js";

function App() {
  return (
    <GoogleOAuthProvider clientId={google_client_id}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;

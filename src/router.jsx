import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/main";
import Layout from "./components/main/layout";
import Body from "./components/main/body";
import Login from "./components/user/login"
import MyAccount from "./components/user/myaccount";
import Moments from "./components/moments/moments";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route path="" element={<Body />} />
          <Route path="login" element={<Login/>}/>
          <Route path="myaccount" element={<MyAccount/>}/>
          <Route path="moments" element={<Moments/>}/>
      </Route>
      
  )
)

export default router;

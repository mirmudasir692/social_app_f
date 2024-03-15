import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/main";
import Layout from "./components/main/layout";
import Body from "./components/main/body";
import Login from "./components/user/login"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route path="" element={<Body />} />
          <Route path="login" element={<Login/>}/>
      </Route>
      
  )
)

export default router;

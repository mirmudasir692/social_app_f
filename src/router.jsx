import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/main";
import Layout from "./components/main/layout";
import Body from "./components/main/body";
import Login from "./components/user/login";
import MyAccount from "./components/user/myaccount";
import Moments from "./components/moments/moments";
import ViewStory from "./components/story/viewstory";
import AddStory from "./components/story/addstory";
import Container from "./components/blogs/container";
import AddMoment from "./components/media/AddMoment";
import AddBlog from "./components/blogs/addblog";
import Saved from "./components/saved/saved";
import SavedBlogsContainer from "./components/saved/blogs";
import Register from "./components/user/register";
import ViewFriend from "./components/user/viewfriend";
import SearchPage from "./components/search/searchpage";
import NotePage from "./components/notes/note_page";
import AddNote from "./components/notes/addnote";
import AddPost from "./components/posts/addpost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Body />} />
      <Route path="login" element={<Login />} />
      <Route path="myaccount" element={<MyAccount />} />
      <Route path="moments" element={<Moments />} />
      <Route path="stories/:lodger_id" element={<ViewStory />} />
      <Route path="addstory" element={<AddStory />} />
      <Route path="blogs" element={<Container />} />
      <Route path="add_moment" element={<AddMoment />} />
      <Route path="add_blog" element={<AddBlog />} />
      <Route path="saved" element={<Saved />} />
      <Route path="saved_blogs" element={<SavedBlogsContainer />} />
      <Route path="register" element={<Register />} />
      <Route path="view_friend/:user_id" element={<ViewFriend />} />
      <Route path="search/:username" element={<SearchPage />} />
      <Route path="notes" element={<NotePage />} />
      <Route path="add_note" element={<AddNote />} />
      <Route path="add_post" element={<AddPost />} />
    </Route>
  )
);

export default router;

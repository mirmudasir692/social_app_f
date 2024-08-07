import { Outlet } from "react-router-dom";
import Header from "../../components/main/header";
import body from "../../components/main/body";
import Footer from "../../components/main/footer";
import SideBar from "../../components/main/sidebar";
import { store } from "../../app/store";
import { is_user_authenticated } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

const Layout = () => {
  const IsAuthenticated = useSelector(is_user_authenticated);
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        {IsAuthenticated && <SideBar />}
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;

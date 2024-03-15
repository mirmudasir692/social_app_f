import { Outlet } from "react-router-dom";
import Header from "../../components/main/header"
import body from "../../components/main/body"
import Footer from "../../components/main/footer"

const Layout = () =>{
    return (
        <div className="flex flex-col">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}
export default Layout
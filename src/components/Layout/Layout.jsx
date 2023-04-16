import { Suspense } from "react";
// import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
// import { IsUserLogin } from "../../redux/auth/authSelectors";
// import AuthForm from "../AuthForm/AuthForm";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
// import UserMenu from "../Navigation/UserMenu/UserMenu";

const Layout = () => {
    const isLogin = useLogin();
    
    return (
        <div>
            <header>
                <Navigation />
                {/* {isLogin && <UserMenu />} */}
                {/* : <AuthForm/> */}
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </div>
    )
    
};

export default Layout;
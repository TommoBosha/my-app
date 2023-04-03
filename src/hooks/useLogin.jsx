import { shallowEqual, useSelector } from "react-redux"
import { IsUserLogin } from "../redux/auth/authSelectors"


const useLogin = () => {
    const isLogin = useSelector(IsUserLogin, shallowEqual);
    return isLogin;
};

export default useLogin;
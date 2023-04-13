// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
// import { IsUserLogin } from "../../redux/auth/authSelectors";

const Navigation = () => {
  const isLogin = useLogin();

  return (
    <nav>
      {isLogin && (
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/usefull-info">Materials</NavLink>
        </ul>
      )}
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;

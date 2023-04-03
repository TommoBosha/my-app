import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/authOperation";
import { IsUserEmail } from "../../../redux/auth/authSelectors";

const UserMenu = () => {
  const dispatch = useDispatch();
    const userEmail = useSelector(IsUserEmail);
    console.log(userEmail)
  const firstLetter = userEmail && userEmail.slice(0, 1);

  return (
    <div>
      <p>{firstLetter}</p>
      <p>{userEmail}</p>
      <div>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;

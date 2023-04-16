// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../../redux/auth/authOperation";
// import { IsUserEmail } from "../../../redux/auth/authSelectors";

// const UserMenu = () => {
//   const dispatch = useDispatch();
//     const userEmail = useSelector(IsUserEmail);
//     console.log(userEmail)
//   const firstLetter = userEmail && userEmail.slice(0, 1);

//   return (
//     <div>
//       <p>{firstLetter}</p>
//       <p>{userEmail}</p>
//       <div>
//         <button type="button" onClick={() => dispatch(logout())}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserMenu;


import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/authOperation";
import { IsUserEmail } from "../../../redux/auth/authSelectors";
import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
}));

const AvatarButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
  },
  
}));

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(IsUserEmail);
  const firstLetter = userEmail && userEmail.slice(0, 1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <AvatarButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
        <AvatarStyled>{firstLetter}</AvatarStyled>
      </AvatarButton>
      <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: "top", horizontal: "right" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>{userEmail}</MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
      </Menu>
      <ButtonStyled onClick={() => dispatch(logout())}>
        Logout
      </ButtonStyled>
    </Root>
  );
};

export default UserMenu;
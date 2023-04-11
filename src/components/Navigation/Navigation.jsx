// import { useSelector } from "react-redux";
// import { Link, NavLink } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";
// import Logo from "../Logo/Logo";
// import { AppBar, IconButton } from "@mui/material";
// // import { IsUserLogin } from "../../redux/auth/authSelectors";

// const Navigation = () => {
//     const isLogin = useLogin();

//     return (
//         <nav>
//             <AppBar position="static">
//             <Link
//             to="/">
//             <Logo
//               name={"logo"}
//               width={130}
//               height={30}
//             />
//             </Link>
//             {isLogin && (
//                 <ul>
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/usefull-info">Materials</NavLink>
//                 </ul>
//             )}
//                 <IconButton
//               size="large"
//               aria-label="contact"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//             //   onClick={handleOpenNavMenu}
//                     color="#FFFFFF"

//             ><NavLink to="/contacts">Contacts</NavLink></IconButton>
//                 </AppBar>
//         </nav>
//     )
// }

// export default Navigation;

import { Link, NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Logo from "../Logo/Logo";
import { AppBar, Toolbar, Button, Typography, styled } from "@mui/material";

const LogoWrapper = styled("div")({
  "& img": {
    width: 130,
    height: 30,
    marginRight: (theme) => theme.spacing(2),
  },
});

const LinkWrapper = styled("div")({
 ml: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
    flex: "1",
});

const Navigation = () => {
  const isLogin = useLogin();

  return (
    <AppBar position="static" sx={{ height: 66 }}>
      <Toolbar>
        <LogoWrapper>
          <Link to="/">
            <Logo name={"logo"} />
          </Link>
        </LogoWrapper>
        {isLogin && (
          <LinkWrapper>
            <Button
              component={NavLink}
              to="/"
              color="inherit"
             
            >
              <Typography variant="body1">Home</Typography>
            </Button>

            <Button
              component={NavLink}
              to="/usefull-info"
              color="inherit"
              
            >
              <Typography variant="body1">Materials</Typography>
            </Button>
          </LinkWrapper>
        )}
        <Button
          component={NavLink}
          to="/contacts"
          color="inherit"
          sx={{ ml: "auto" }}
        >
          <Typography variant="body1">Contacts</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

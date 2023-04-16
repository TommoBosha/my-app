// import { Link, NavLink } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";
// import Logo from "../Logo/Logo";
// import { AppBar, Toolbar, Button, Typography, styled } from "@mui/material";
// import UserMenu from "./UserMenu/UserMenu";

// const LogoWrapper = styled("div")({
//   "& img": {
//     width: 130,
//     height: 30,
//     marginRight: (theme) => theme.spacing(2),
//   },
// });

// const LinkWrapper = styled("div")({
//  ml: "auto",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//     flex: "1",
// });

// const Navigation = () => {
//   const isLogin = useLogin();

//   return (
//     <AppBar position="static" sx={{ height: 66 }}>
//       <Toolbar>
//         <LogoWrapper>
//           <Link to="/">
//             <Logo name={"logo"} />
//           </Link>
//         </LogoWrapper>
//         {isLogin && (
//           <LinkWrapper>
//             <Button
//               component={NavLink}
//               to="/"
//               color="inherit"
             
//             >
//               <Typography variant="body1">Home</Typography>
//             </Button>

//             <Button
//               component={NavLink}
//               to="/usefull-info"
//               color="inherit"
              
//             >
//               <Typography variant="body1">Materials</Typography>
//                       </Button>
//                       <UserMenu/>
//           </LinkWrapper>
//         )}
//         <Button
//           component={NavLink}
//           to="/contacts"
//           color="inherit"
//           sx={{ ml: "auto" }}
//         >
//           <Typography variant="body1">Contacts</Typography>
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navigation;


import { Link, NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Logo from "../Logo/Logo";
import { AppBar, Toolbar, Button, Typography, styled } from "@mui/material";
import UserMenu from "./UserMenu/UserMenu";

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
        {isLogin ? (
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
            <Button component={NavLink} to="/contacts" color="inherit">
              <Typography variant="body1">Contacts</Typography>
            </Button>
            <UserMenu />
          </LinkWrapper>
        ) : (
          <>
            <Button sx={{ ml: "auto" }} component={NavLink} to="/contacts" color="inherit">
              <Typography variant="body1">Contacts</Typography>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#E5E5E5",
        height: "91vh"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <Box sx={{ width: "50%", p: 4 }}>
          <Typography variant="h1" sx={{ fontSize: "34px", textAlign: "center" }}>
            Pro Test
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "center" }}>
            [ We will help you find weak points <br />
            in knowledge so that you can strengthen it. We will show you what is
            relevant to know for a{" "}
            <Typography component="span" fontWeight="bold">
              QA Engineer
            </Typography>{" "}
            and will try to make the learning process more diverse_ ]
          </Typography>
        </Box>
        <Box sx={{
          backgroundImage: "url(https://source.unsplash.com/random?tests&it&qa)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <AuthForm />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;